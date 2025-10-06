import { useState } from "react";
import { FashionAPIService } from "../../Service/APIService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function AddProductForm() {
  const [ProductFormData, setProductFormData] = useState({
    id: Math.floor(Math.random() * 10000).toString(),
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleEvent = (e: any) => {
    const { name, value } = e.target;
    setProductFormData({ ...ProductFormData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // ✅ Improved Validation
  const validate = () => {
    const newErrors: any = {};

    if (!ProductFormData.name.trim()) newErrors.name = "Please enter a product name.";
    else if (ProductFormData.name.trim().length < 3)
      newErrors.name = "Product name must be at least 3 characters long.";

    if (!ProductFormData.brand.trim()) newErrors.brand = "Please enter the brand name.";
    else if (ProductFormData.brand.trim().length < 2)
      newErrors.brand = "Brand name must be at least 2 characters.";

    if (!ProductFormData.price) newErrors.price = "Please enter a price.";
    else if (Number(ProductFormData.price) <= 0)
      newErrors.price = "Price must be greater than zero.";

    if (!ProductFormData.image.trim())
      newErrors.image = "Please provide a product image URL.";
    else if (!/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i.test(ProductFormData.image))
      newErrors.image = "Enter a valid image URL (jpg, png, jpeg, gif, webp).";

    if (!ProductFormData.description.trim())
      newErrors.description = "Please enter a product description.";
    else if (ProductFormData.description.trim().length < 10)
      newErrors.description = "Description should be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("⚠️ Please correct the highlighted fields before submitting.");
      return;
    }

    try {
      const status = await FashionAPIService.addProduct(ProductFormData);
      if (status) {
        toast.success("✅ Product added successfully!");
        setProductFormData({
          id: Math.floor(Math.random() * 10000).toString(),
          name: "",
          brand: "",
          price: "",
          image: "",
          description: "",
        });
      } else {
        toast.error("❌ Failed to add the product. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("🚨 Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-6 py-16"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/80 backdrop-blur-sm"></div>

        <motion.div
          className="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 via-green-600 to-green-500 text-white py-6 px-8 text-center shadow-md">
            <motion.h2
              className="text-2xl font-extrabold tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Add Your Product
            </motion.h2>
            <p className="mt-2 text-green-100 text-sm">
              Fill in the details below to showcase your latest fashion item.
            </p>
          </div>

          {/* Form */}
          <form className="p-8 grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
            {[
              { name: "name", placeholder: "Enter product name" },
              { name: "brand", placeholder: "Enter brand name" },
              { name: "price", placeholder: "Enter price (₹)" },
              { name: "image", placeholder: "Paste image URL" },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <input
                  type={field.name === "price" ? "number" : "text"}
                  value={(ProductFormData as any)[field.name]}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleEvent}
                  className="w-full border border-green-200 rounded-lg px-4 py-3 bg-white/20 text-white placeholder-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition duration-300"
                />
                {errors[field.name] && (
                  <p className="text-red-300 text-sm mt-1">{errors[field.name]}</p>
                )}
              </motion.div>
            ))}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <textarea
                rows={4}
                value={ProductFormData.description}
                name="description"
                placeholder="Write a short product description..."
                onChange={handleEvent}
                className="w-full border border-green-200 rounded-lg px-4 py-3 bg-white/20 text-white placeholder-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition duration-300 resize-none"
              ></textarea>
              {errors.description && (
                <p className="text-red-300 text-sm mt-1">{errors.description}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 via-green-600 to-green-500 text-white px-10 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ✨ Add Product
              </button>
            </motion.div>
          </form>
        </motion.div>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
