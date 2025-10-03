
import { motion } from "framer-motion";

export default function Foooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-gray-200 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start">
          {/* Brand & short */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 12L12 3l9 9" stroke="url(#g)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-semibold">BrandName</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Build delightful experiences — simple, fast and accessible. Subscribe to get occasional product updates
              and resources.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/6 backdrop-blur-sm ring-1 ring-white/6 hover:bg-white/10"
                href="#"
                aria-label="Try demo"
              >
                Try demo
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10"
                href="#"
                aria-label="Docs"
              >
                Docs
              </motion.a>
            </div>
          </motion.div>

          {/* Links grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-1/3 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div>
              <h4 className="text-sm font-semibold text-gray-100 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a className="footer-link" href="#">Overview</a></li>
                <li><a className="footer-link" href="#">Pricing</a></li>
                <li><a className="footer-link" href="#">Releases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-100 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a className="footer-link" href="#">About</a></li>
                <li><a className="footer-link" href="#">Careers</a></li>
                <li><a className="footer-link" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-100 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a className="footer-link" href="#">Blog</a></li>
                <li><a className="footer-link" href="#">Guides</a></li>
                <li><a className="footer-link" href="#">Help Center</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Newsletter & socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3"
          >
            <h4 className="text-sm font-semibold text-gray-100 mb-3">Stay in the loop</h4>
            <p className="text-sm text-gray-300 mb-4">Get product updates, tips, and resources — once or twice a month.</p>

            <form className="flex items-center gap-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-md px-3 py-2 bg-white/6 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="rounded-md px-4 py-2 bg-indigo-500 text-white font-medium"
              >
                Subscribe
              </motion.button>
            </form>

            <div className="mt-6 flex items-center gap-3" aria-label="Social links">
              {[
                { name: "Twitter", href: "#", svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="0.6"/></svg>) },
                { name: "GitHub", href: "#", svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M12 2C6.48 2 2 6.58 2 12.28c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.62.07-.61.07-.61 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.17-4.56-5.2 0-1.15.39-2.09 1.03-2.83-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.08A9.32 9.32 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.35 2.74-1.08 2.74-1.08.55 1.4.2 2.44.1 2.7.64.74 1.03 1.68 1.03 2.83 0 4.04-2.34 4.94-4.57 5.19.36.32.68.95.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.49A10.3 10.3 0 0022 12.28C22 6.58 17.52 2 12 2z" stroke="currentColor" strokeWidth="0.4"/></svg>) },
                { name: "Dribbble", href: "#", svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="0.6"/></svg>) },
              ].map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ scale: 1.14, rotate: [0, -6, 6, 0] }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-md bg-white/6 ring-1 ring-white/6 hover:bg-white/8"
                  aria-label={s.name}
                >
                  <span className="sr-only">{s.name}</span>
                  {s.svg}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} BrandName. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="footer-link" href="#">Terms</a>
            <a className="footer-link" href="#">Privacy</a>
            <a className="footer-link" href="#">Security</a>
          </div>
        </div>
      </div>

      {/* Local styles for link animation (keeps file self-contained) */}
      <style jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 100%;
          transform: scaleX(0);
          transform-origin: left;
          background: linear-gradient(90deg,#8b5cf6,#06b6d4);
          transition: transform 0.25s ease;
          opacity: 0.95;
        }
        .footer-link:hover::after { transform: scaleX(1); }
      `}</style>
    </footer>
  );
}
