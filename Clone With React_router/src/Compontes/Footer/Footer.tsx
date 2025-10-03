import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 pt-12 pb-8 lg:flex lg:justify-between">
        {/* Logo + description */}
        <div className="w-full lg:w-1/4 text-left lg:pl-12 lg:pr-4">
          <a
            href="/"
            className="flex items-center justify-start lg:justify-start sm:justify-center"
          >
            <svg
              className="w-auto h-6 text-gray-800 fill-current"
              viewBox="0 0 194 116"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd">
                <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
              </g>
            </svg>
          </a>
          <p className="mt-6 text-base text-gray-500">
            Crafting the next-level of user experience and engagement.
          </p>
        </div>

        {/* Link sections */}
        <div className="w-full lg:w-3/4 mt-6 lg:mt-0 flex flex-wrap">
          {/* Product */}
          <div className="w-1/2 sm:w-1/4 px-3">
            <h3 className="mb-3 text-gray-800 font-bold uppercase text-sm">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Features
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Integrations
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Pricing
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  FAQ
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-1/2 sm:w-1/4 px-3">
            <h3 className="mb-3 text-gray-800 font-bold uppercase text-sm">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Privacy
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* TailwindCSS */}
          <div className="w-1/2 sm:w-1/4 px-3">
            <h3 className="mb-3 text-gray-800 font-bold uppercase text-sm">
              TailwindCSS
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Tailwind Components
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Tailwind Templates
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
                  Tails
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-1/2 sm:w-1/4 px-3">
            <h3 className="mb-3 text-gray-800 font-bold uppercase text-sm">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* Replace with actual links / icons */}
              <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                {/* Facebook SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                {/* Twitter SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                {/* GitHub SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright / attribution */}
      <div className="pt-4 mt-10 text-center text-gray-500 border-t border-gray-100">
        © 2020 Landmark. All rights reserved.
      </div>
      <div className="pt-2 mt-2 text-center text-gray-600 border-t border-gray-100">
        Distributed by{" "}
        <a
          href="https://themewagon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Themewagon
        </a>
      </div>
    </footer>
  );
}
