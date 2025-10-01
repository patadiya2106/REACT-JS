import { NavLink } from 'react-router';
import { Home, User, Briefcase, Mail, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-slideInLeft">
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 p-2 rounded-lg animate-float">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              TechVision
            </span>
          </div>
          <div className="flex gap-2 animate-slideInRight">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`
              }
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`
              }
            >
              <User size={20} />
              <span className="font-medium">About</span>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`
              }
            >
              <Briefcase size={20} />
              <span className="font-medium">Services</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`
              }
            >
              <Mail size={20} />
              <span className="font-medium">Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
