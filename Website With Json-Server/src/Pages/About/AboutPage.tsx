import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6 md:px-12">
      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 mb-4">
          About RP Fashion
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Redefining fashion, embracing style, and inspiring confidence—one collection at a time.
        </p>
      </motion.div>

      {/* Our Journey Section */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Our Journey
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          RP Fashion was born from a passion for elegance and individuality. From humble beginnings, we have grown into a trendsetting brand, delivering high-quality clothing that celebrates creativity, confidence, and personal expression. 
          Every piece is carefully crafted to make you stand out and feel empowered.
        </p>
      </motion.div>

      {/* Our Vision Section */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Our Vision
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          We envision a world where fashion empowers and inspires. Our mission is to combine sophistication with innovation, offering collections that set trends while respecting sustainability. With RP Fashion, style meets purpose, and elegance meets individuality.
        </p>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105">
            <h3 className="text-green-600 font-bold text-xl mb-2">Elegance</h3>
            <p className="text-gray-600 text-sm">
              Sophisticated designs that elevate your style in every moment.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105">
            <h3 className="text-green-600 font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Fresh ideas and bold designs to redefine fashion standards.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105">
            <h3 className="text-green-600 font-bold text-xl mb-2">Sustainability</h3>
            <p className="text-gray-600 text-sm">
              Conscious practices that respect the environment and future generations.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105">
            <h3 className="text-green-600 font-bold text-xl mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">
              Premium materials and meticulous craftsmanship in every collection.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
