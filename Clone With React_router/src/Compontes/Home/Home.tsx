import React from "react";

export default function Home() {
  return (
    <div
      className="relative w-full overflow-x-hidden bg-cover bg-center lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl px-8 -mt-32">
        
        {/* Left Content */}
        <div className="z-30 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-48 lg:pt-20 xl:pt-40">
          <h1 className="mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:mb-8">
            Build the Next Great Thing
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg xl:text-xl lg:pr-20">
            Are you ready to start your adventure and build the next greatest
            SaaS app on the market?
          </p>
          <a
            href="#_"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-md shadow-xl hover:bg-indigo-700 transition"
          >
            Sign Up Today!
          </a>
        </div>

        {/* Right Content */}
        <div className="relative z-50 w-full lg:w-1/2 flex justify-end items-center lg:pl-10 mt-16 lg:mt-0">
          <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                Super-fast setup in minutes
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                Scalable and reliable architecture
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                Built-in analytics & reports
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                24/7 customer support
              </li>
            </ul>
            <button className="mt-8 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
