import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900/90 backdrop-blur-md text-gray-200 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 gap-6">
          {/* Logo / Brand */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white">RP Fashion</h1>
            <p className="text-gray-400 mt-1">Bringing style and elegance to your wardrobe.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h2 className="font-semibold mb-2">Company</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Support</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Help Center</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Legal</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RP Fashion. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
