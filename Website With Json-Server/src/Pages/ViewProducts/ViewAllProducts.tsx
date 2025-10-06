import { useLoaderData, useNavigate } from "react-router";
import { FashionAPIService, type FashionType } from "../../Service/APIService";
import { FaPenFancy, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function ViewAllProducts() {
  const allProductss: FashionType[] = useLoaderData();
  const [allProducts, setAllProducts] = useState(allProductss || []);
  const navigator = useNavigate();
  const [modalData, setModalData] = useState<FashionType | null>(null);

  const deleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        const deleted = await FashionAPIService.deleteProducts(id);
        if (deleted) {
          setAllProducts(await FashionAPIService.fetchAllProducts());
          toast.success("🧹 Product removed successfully!");
        } else {
          toast.error("❌ Failed to remove product. Please try again.");
        }
      } catch (error) {
        toast.error("⚠️ Something went wrong while deleting the product.");
      }
    }
  };

  // Animation Variants
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="py-28 px-4 md:px-10 bg-gradient-to-br from-green-950 via-black to-green-900 min-h-screen font-sans">
        <div className="overflow-x-auto bg-green-950/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-800 p-6">
          <h1 className="text-4xl font-extrabold text-center text-green-400 mb-8 tracking-wide">
            🌿 Our Products
          </h1>

          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-green-300 text-lg font-semibold">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Brand</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-center">Image</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence>
                {allProducts && allProducts.length > 0 ? (
                  allProducts.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${
                        index % 2 === 0
                          ? "bg-green-900/30"
                          : "bg-green-800/30"
                      }`}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={rowVariants}
                      onClick={() => setModalData(product)}
                    >
                      <td className="px-6 py-4 text-gray-200 font-semibold">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-green-400 font-bold text-lg">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-base">
                        {product.brand}
                      </td>
                      <td className="px-6 py-4 text-green-500 font-bold text-lg">
                        ₹{product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-28 object-cover rounded-xl border-2 border-green-500 shadow-md"
                          whileHover={{ scale: 1.1, rotate: 1 }}
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm line-clamp-2">
                        {product.description}
                      </td>

                      <td className="px-3 py-4 w-52">
                        <div className="flex gap-3 justify-center flex-wrap">
                          <motion.button
                            className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigator(`/edit-product/${product.id}`);
                              toast.info("✏️ Editing product details...");
                            }}
                          >
                            <FaPenFancy /> Edit
                          </motion.button>

                          <motion.button
                            className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteProduct(product.id.toString());
                            }}
                          >
                            <FaRegTrashAlt /> Delete
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-10 text-gray-300 text-lg font-medium"
                    >
                      🌱 No products available. Start by adding one!
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-green-950 via-black to-green-800 rounded-3xl shadow-2xl max-w-3xl w-full relative overflow-hidden p-6 text-white font-sans"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-green-400 transition-transform hover:rotate-90 hover:scale-110 bg-gray-800/70 rounded-full p-2 shadow-lg"
                onClick={() => setModalData(null)}
              >
                ❌
              </button>

              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-green-400">
                  {modalData.name}
                </h2>

                <motion.img
                  src={modalData.image}
                  alt={modalData.name}
                  className="w-full h-64 object-cover rounded-2xl border-4 border-green-400 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-900/70 p-4 rounded-xl text-gray-200 font-semibold text-center shadow-lg">
                    Product ID: {modalData.id}
                  </div>
                  <div className="bg-green-900/70 p-4 rounded-xl text-gray-200 font-semibold text-center shadow-lg">
                    Brand: {modalData.brand}
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-400 p-4 rounded-xl text-white font-bold text-center shadow-lg">
                    ₹{modalData.price.toLocaleString()}
                  </div>
                </div>

                <div className="bg-green-900/70 p-6 rounded-2xl text-gray-200 shadow-lg">
                  <h3 className="font-bold text-lg mb-2">Description</h3>
                  <p>{modalData.description}</p>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white font-bold py-3 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toast.success("🛒 Product added to cart!")}
                >
                  🛒 Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}
