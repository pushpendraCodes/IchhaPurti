import { useState } from "react";
import { Search, Bell, Menu, X, User, Home, ShoppingBag, Package, Heart, Phone, LogOut, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: ShoppingBag, label: "Products", href: "/products" },
    { icon: Package, label: "My Orders", href: "/orders" },
    { icon: Heart, label: "Wallet", href: "/wallet" },
    { icon: Phone, label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 shadow-sm sticky top-0 z-30 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link to="/" className="flex flex-col group">
                <span className="text-xl font-bold tracking-wide text-black transition-transform group-hover:scale-105">
                  <span className="text-[#C9A227]">I</span>CCHHA
                  <span className="text-[#C9A227]">PURTI</span>
                </span>
                <span className="text-xs text-gray-500 italic font-medium">
                  पूर्ण करे हर इच्छा आपकी
                </span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search 
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                    searchFocused ? 'text-[#C9A227]' : 'text-gray-400'
                  }`} 
                  size={18} 
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg outline-none transition-all focus:border-[#C9A227] focus:shadow-md focus:shadow-[#C9A227]/20 bg-white"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <Link
                to="/notification" 
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <Bell size={22} className="text-[#C9A227] group-hover:scale-110 transition-transform" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </Link>

              {/* Menu Button */}
              <button 
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <Menu size={26} className="text-[#C9A227] group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg outline-none transition-all focus:border-[#C9A227] bg-white"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* RIGHT SLIDING DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* User Profile Section */}
        <div className="bg-gradient-to-br from-[#C9A227] to-[#B89020] p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <User size={28} className="text-[#C9A227]" />
              </div>
              <Link to="/account" className="group">
                <p className="font-semibold text-lg">John Doe</p>
                <p className="text-sm text-white/90 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Profile 
                  <ChevronRight size={14} />
                </p>
              </Link>
            </div>

            <button 
              onClick={() => setMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Drawer Menu Items */}
        <div className="p-6 flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.href}
                className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#C9A227]/10 hover:text-[#C9A227] transition-all group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium flex-1">{item.label}</span>
                <ChevronRight size={18} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}

          {/* Logout Button */}
          <button className="mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A227] to-[#B89020] text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#C9A227]/30 transition-all group">
            <LogOut size={20} className="group-hover:scale-110 transition-transform" />
            Logout
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            © 2024 ICCHAPURTI. All rights reserved.
          </p>
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}