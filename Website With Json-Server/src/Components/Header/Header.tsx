import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: any) =>
    `relative px-1 transition-all duration-300 font-medium text-base 
    ${isActive ? "text-green-400" : "text-gray-300"} 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
    after:h-[2px] after:bg-green-400 hover:after:w-full after:transition-all after:duration-300`;

  return (
    <header
      className="w-full bg-gray-900/90 backdrop-blur-md text-gray-200 fixed top-0 left-0 z-50 shadow-md"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-extrabold text-white">
          <Link to="/" className="hover:text-green-400 transition-colors">RP Fashion</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/addNewProduct" className={navLinkClass}>Add Product</NavLink>
          <NavLink to="/viewAllProduct" className={navLinkClass}>All Products</NavLink>
        </nav>

        {/* Cart Button */}
        <div className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md border border-green-500">
          <FaShoppingCart className="text-lg text-green-500" />
          <h4 className="text-sm font-semibold text-green-500">Add to Cart</h4>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-white hover:text-green-400 transition-colors"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-900 px-6 py-4 space-y-3 transform transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink to="/" className="block text-gray-300 hover:text-green-400 transition-colors">Home</NavLink>
        <NavLink to="/about" className="block text-gray-300 hover:text-green-400 transition-colors">About</NavLink>
        <NavLink to="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">Contact</NavLink>
        <NavLink to="/addNewProduct" className="block text-gray-300 hover:text-green-400 transition-colors">Add Product</NavLink>
        <NavLink to="/viewAllProduct" className="block text-gray-300 hover:text-green-400 transition-colors">All Products</NavLink>

        <div className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md border border-green-500">
          <FaShoppingCart className="text-lg text-green-500" />
          <button className="text-sm font-semibold text-green-500">Add to Cart</button>
        </div>
      </div>
    </header>
  );
}
