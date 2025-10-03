import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Automated Tools",
    description: "Automate your workflow with these top of the line marketing tools.",
    link: "#",
    gradient: "from-purple-600 to-indigo-600",
    icon: "▶", // placeholder, replace with SVG if needed
  },
  {
    title: "Machine Learning",
    description: "Your Marketing tools will learn how to better convert and sell.",
    link: "#",
    gradient: "from-yellow-400 to-red-500",
    icon: "⚙",
  },
  {
    title: "Smart Notifications",
    description: "Our smart notifications will notify you when users convert.",
    link: "#",
    gradient: "from-cyan-400 to-blue-600",
    icon: "🔔",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full px-8 py-16 border-t border-gray-200 lg:py-24 xl:py-32">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Headings */}
        <h2 className="text-base font-medium tracking-wide text-indigo-500 uppercase">
          Our Features
        </h2>
        <h3 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Built and Designed with you in Mind
        </h3>

        {/* Features grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex flex-col items-center p-10 bg-white shadow-lg rounded-2xl"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white text-2xl shadow-md`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="mt-6 text-lg font-bold text-gray-800">{feature.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>

              {/* Link */}
              <a
                href={feature.link}
                className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
