import { useLoaderData } from "react-router";
import type { FashionType } from "../../Service/APIService";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const allproduct: FashionType[] = useLoaderData();
  const [modalData, setModalData] = useState<FashionType | null>(null);

  // Animation variants for modal
  const modalVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Product List Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Our Exclusive Product Collection
          </h2>

          {allproduct && allproduct.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {allproduct.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-gradient-to-br from-green-50/70 to-white/20 rounded-2xl border border-green-200/40 shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Product Image */}
                  <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.description.substring(0, 50)}...</p>
                    <p className="text-green-600 font-bold text-lg">₹{product.price.toLocaleString()}</p>

                    <button
                      className="mt-2 w-full py-2 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 shadow-lg transition"
                      onClick={() => setModalData(product)}
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-16">No product available.</p>
          )}

          {/* Modal */}
          <AnimatePresence>
            {modalData && (
              <motion.div
                className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalData(null)}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-lg rounded-t-3xl shadow-2xl w-full max-w-lg relative overflow-hidden"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold transition-transform hover:scale-110"
                    onClick={() => setModalData(null)}
                  >
                    ×
                  </button>

                  {/* Image */}
                  <div className="w-full h-64 overflow-hidden rounded-t-3xl">
                    <img
                      src={modalData.image}
                      alt={modalData.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-3xl font-extrabold text-green-600">{modalData.name}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50/50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-500">Product ID</p>
                        <p className="text-gray-800 font-semibold">{modalData.id}</p>
                      </div>
                      <div className="bg-green-50/50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-500">Brand</p>
                        <p className="text-gray-800 font-semibold">{modalData.brand}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-4 text-center text-white font-bold">
                        <p className="text-sm">Price</p>
                        <p className="text-xl">₹{modalData.price.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="bg-green-50/30 p-4 rounded-xl">
                      <h3 className="text-green-700 font-semibold mb-1">Description</h3>
                      <p className="text-gray-800 text-sm">{modalData.description}</p>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 shadow-lg hover:shadow-green-400 transition transform hover:scale-105">
                      🛒 Add to Cart
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
