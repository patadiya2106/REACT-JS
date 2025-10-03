import React from "react";

export default function Pricing() {
  return (
    <div className="relative px-8 py-16 bg-white border-t border-gray-200 lg:py-24 xl:py-32 xl:px-0">
      <div
        id="pricing"
        className="container flex flex-col items-center max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="mb-4 text-base font-medium tracking-tight text-indigo-500 uppercase">
          Our Pricing
        </h2>
        <h3 className="max-w-2xl text-3xl font-black leading-tight text-center text-gray-900 sm:text-5xl">
          Simple, Transparent Pricing for Everyone
        </h3>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="relative z-0 w-full max-w-sm p-8 mx-auto border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-center">
              Basic <span className="font-light">Plan</span>
            </h3>
            <h4 className="flex items-center justify-center mt-4 text-4xl font-bold text-gray-900">
              <span className="mr-1 text-lg text-gray-600">$</span>48
            </h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              In our basic plan you can take advantage of all these features.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Awesome Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Another Cool Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> One More Feature
              </li>
            </ul>
            <button className="w-full px-6 py-3 mt-6 text-white bg-gray-900 rounded-lg hover:bg-green-600 transition">
              Select This Plan
            </button>
          </div>

          {/* Pro Plan (Most Popular) */}
          <div className="relative z-10 w-full max-w-sm p-8 mx-auto bg-white border-2 border-indigo-500 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="absolute top-0 left-0 right-0 py-2 text-sm font-semibold tracking-wide text-center text-white uppercase bg-indigo-500 rounded-t-2xl">
              Most Popular
            </div>
            <h3 className="mt-8 text-xl font-bold text-center">
              Pro <span className="font-light">Plan</span>
            </h3>
            <h4 className="flex items-center justify-center mt-4 text-5xl font-bold text-gray-900">
              <span className="mr-1 text-lg text-gray-600">$</span>98
            </h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              Our most popular package gives you access to the following:
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Really Cool Features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Another Cool Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> And One More
              </li>
            </ul>
            <button className="w-full px-6 py-3 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
              Select This Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative z-0 w-full max-w-sm p-8 mx-auto border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-center">
              Premium <span className="font-light">Plan</span>
            </h3>
            <h4 className="flex items-center justify-center mt-4 text-4xl font-bold text-gray-900">
              <span className="mr-1 text-lg text-gray-600">$</span>78
            </h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              With our premium plan you can take advantage of all the following features.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Tubular Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Super Cool Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> And One More
              </li>
            </ul>
            <button className="w-full px-6 py-3 mt-6 text-white bg-gray-900 rounded-lg hover:bg-green-600 transition">
              Select This Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
