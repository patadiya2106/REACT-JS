import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import {
  FaBuilding,
  FaTag,
  FaDollarSign,
  FaImage,
  FaAlignLeft,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";
import { FashionAPIService } from "../../Service/APIService";
import { routerName } from "../../Routes/routes";
import { toast } from "react-toastify";

export default function EditProductPage() {
  const data = useLoaderData();
  const navigator = useNavigate();

  const [ProductFormData, setProductFormData] = useState({
    id: data.id,
    name: data.name,
    brand: data.brand,
    price: data.price,
    image: data.image,
    description: data.description,
  });

  const [errors, setErrors] = useState<any>({});

  const handleEvent = (event: any) => {
    const { name, value } = event.target;
    setProductFormData({ ...ProductFormData, [name]: value });
  };

  // Validation rules
  const validateForm = () => {
    let validationErrors: any = {};

    if (!ProductFormData.name || ProductFormData.name.length < 2) {
      validationErrors.name = "Product name must be at least 2 characters.";
    }

    if (!ProductFormData.brand || ProductFormData.brand.length < 2) {
      validationErrors.brand = "Product brand must be at least 2 characters.";
    }

    if (!ProductFormData.price || Number(ProductFormData.price) <= 0) {
      validationErrors.price = "Price must be greater than 0.";
    }

    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
    if (!ProductFormData.image || !urlPattern.test(ProductFormData.image)) {
      validationErrors.image = "Please enter a valid image URL (jpg, png, gif, webp).";
    }

    if (!ProductFormData.description || ProductFormData.description.length < 10) {
      validationErrors.description = "Description must be at least 10 characters.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix validation errors before submitting.");
      return;
    }

    if (await FashionAPIService.updateProducts(data.id, ProductFormData)) {
      toast.success("Product updated successfully!");
      navigator(routerName.viewAllProduct);
    } else {
      toast.error("Product update failed...");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4">
      {/* Form Card */}
      <div className="relative max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 px-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaBoxOpen /> Edit Product
          </h2>
          <p className="text-sm text-green-100">
            Update your product details below
          </p>
        </div>

        {/* Form */}
        <form className="p-8 grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="relative">
            <FaTag className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={ProductFormData.name}
              onChange={handleEvent}
              placeholder=" "
              required
              className={`peer w-full bg-white/10 text-white border rounded-lg pl-10 pr-4 py-3 
                focus:ring-2 focus:ring-green-500 outline-none transition
                ${errors.name ? "border-green-500" : "border-gray-400/30"}`}
            />
            <label
              className="absolute left-10 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-400"
            >
              Product Name
            </label>
            {errors.name && <p className="text-green-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Brand */}
          <div className="relative">
            <FaBuilding className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="brand"
              value={ProductFormData.brand}
              onChange={handleEvent}
              placeholder=" "
              required
              className={`peer w-full bg-white/10 text-white border rounded-lg pl-10 pr-4 py-3 
                focus:ring-2 focus:ring-green-500 outline-none transition
                ${errors.brand ? "border-green-500" : "border-gray-400/30"}`}
            />
            <label
              className="absolute left-10 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-400"
            >
              Brand
            </label>
            {errors.brand && <p className="text-green-400 text-xs mt-1">{errors.brand}</p>}
          </div>

          {/* Price */}
          <div className="relative">
            <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              name="price"
              value={ProductFormData.price}
              onChange={handleEvent}
              placeholder=" "
              required
              className={`peer w-full bg-white/10 text-white border rounded-lg pl-10 pr-4 py-3 
                focus:ring-2 focus:ring-green-500 outline-none transition
                ${errors.price ? "border-green-500" : "border-gray-400/30"}`}
            />
            <label
              className="absolute left-10 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-400"
            >
              Price
            </label>
            {errors.price && <p className="text-green-400 text-xs mt-1">{errors.price}</p>}
          </div>

          {/* Image */}
          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="image"
              value={ProductFormData.image}
              onChange={handleEvent}
              placeholder=" "
              required
              className={`peer w-full bg-white/10 text-white border rounded-lg pl-10 pr-4 py-3 
                focus:ring-2 focus:ring-green-500 outline-none transition
                ${errors.image ? "border-green-500" : "border-gray-400/30"}`}
            />
            <label
              className="absolute left-10 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-400"
            >
              Image URL
            </label>
            {errors.image && <p className="text-green-400 text-xs mt-1">{errors.image}</p>}
          </div>

          {/* Description */}
          <div className="relative">
            <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="description"
              value={ProductFormData.description}
              onChange={handleEvent}
              placeholder=" "
              rows={4}
              required
              className={`peer w-full bg-white/10 text-white border rounded-lg pl-10 pr-4 py-3 resize-none
                focus:ring-2 focus:ring-green-500 outline-none transition
                ${errors.description ? "border-green-500" : "border-gray-400/30"}`}
            ></textarea>
            <label
              className="absolute left-10 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-400"
            >
              Description
            </label>
            {errors.description && (
              <p className="text-green-400 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 
                text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg 
                transform hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <FaCheckCircle /> Update Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
