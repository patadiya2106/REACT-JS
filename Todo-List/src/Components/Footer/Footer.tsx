function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-950 border-t border-gray-800 shadow-inner py-6 px-8 animate-fade-in">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-300">
        
        {/* Left side */}
        <p className="text-center md:text-left">
          © 2025{" "}
          <span className="font-semibold text-green-500 hover:text-green-400 transition-colors duration-300">
            Task Manager
          </span>
          . All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-6">
          {["Privacy Policy", "Terms", "Support"].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="relative group text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
