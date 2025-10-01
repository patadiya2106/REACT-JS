import { Search, Calendar, Bell, User } from "lucide-react";

function HeaderPage() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-tr from-green-500 animate-bounce">
              T
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Task Manager
            </h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-6 hidden sm:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400 group-focus-within:text-green-500 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-12 pr-4 py-2.5 rounded-2xl bg-gray-900/70 border border-green-600 text-green-200 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                 transition-all duration-300 placeholder-green-400 group-hover:shadow-md"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="p-2.5 rounded-2xl bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-300 shadow-sm">
              <Calendar className="w-5 h-5 text-white" />
            </button>
            <button className="p-2.5 rounded-2xl bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-300 shadow-sm relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 border-2 border-gray-900 rounded-full animate-ping"></span>
            </button>
            <button className="p-1.5 rounded-full border-2 border-gray-700 hover:border-green-400 transition-all duration-300 shadow-sm">
              <User className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPage;
