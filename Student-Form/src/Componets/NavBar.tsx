import React from "react";

type NavBarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <nav
      className={`${
        isLight ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
      } fixed w-full z-20 top-0 left-0`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://rst6-livesite.rschooltoday.com/sites/r-pschools.com/files/images/Private_User/laurahahn/R-P-logo_grn-ylw_main-(outlined).jpg"
            className="h-8"
            alt="R.P School logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            R.P School
          </span>
        </a>

        {/* Navigation Links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg ${
              isLight
                ? "bg-gray-50 border-gray-100 md:bg-white"
                : "bg-gray-800 border-gray-700 md:bg-gray-900"
            } md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
          >
            {["Home", "About", "Services", "Contact"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`block py-2 px-3 md:p-0 rounded-sm ${
                    isLight
                      ? "text-gray-900 hover:text-blue-700"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right buttons */}
        <div className="flex md:order-2 items-center space-x-3 rtl:space-x-reverse">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              isLight
                ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"
            }`}
            aria-label="Toggle Theme"
          >
            {isLight ? "🌙" : "🌞"}
          </button>

          {/* Mobile menu toggle */}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ${
              isLight
                ? "text-gray-500 hover:bg-gray-100 focus:ring-gray-200"
                : "text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            }`}
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 17 14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
