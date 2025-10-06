import React from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <header className="relative z-50 w-full h-24 bg-white shadow">
      <div className="container mx-auto px-8 max-w-6xl h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            className="w-auto h-6 text-indigo-600 fill-current"
            viewBox="0 0 194 116"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="evenodd">
              <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
              <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
            </g>
          </svg>
          <span className="ml-3 text-xl font-black text-gray-800">
            Landmark<span className="text-pink-500">.</span>
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-base text-gray-800 font-semibold">
            <li>
              <NavLink
                to="#home"
                className="font-bold cursor-pointer hover:text-indigo-600 transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                className="font-bold cursor-pointer hover:text-indigo-600 transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#add-product"
                className="font-bold cursor-pointer hover:text-indigo-600 transition-colors"
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#view-product"
                className="font-bold cursor-pointer hover:text-indigo-600 transition-colors"
              >
                View Product
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="#login"
            className="text-pink-500 font-bold cursor-pointer hover:underline transition"
          >
            Login
          </NavLink>
          <NavLink to="#get-started">
            <button className="px-5 py-2 text-white bg-indigo-700 font-bold rounded hover:shadow-lg transition">
              Get Started
            </button>
          </NavLink>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden flex flex-col justify-center items-center cursor-pointer">
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>
    </header>
  );
}
