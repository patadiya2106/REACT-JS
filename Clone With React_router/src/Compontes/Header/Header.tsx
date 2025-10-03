import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="relative z-50 w-full h-24 bg-white">
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
        <nav className="hidden md:flex space-x-8 text-base text-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold cursor-pointer hover:text-indigo-600 ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `font-bold cursor-pointer hover:text-indigo-600 ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `font-bold cursor-pointer hover:text-indigo-600 ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              `font-bold cursor-pointer hover:text-indigo-600 ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            Testimonials
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-pink-500 font-bold cursor-pointer hover:underline"
          >
            Login
          </NavLink>
          <NavLink to="/get-started">
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
