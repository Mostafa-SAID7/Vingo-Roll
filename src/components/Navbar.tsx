import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Vingo Roll</div>
                <div className="text-xs text-gray-500 -mt-1">Premium Curtains</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link 
              to="/shop" 
              className={`font-medium transition-colors ${
                isActive('/shop') 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className={`font-medium transition-colors ${
                isActive('/categories') 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/custom-orders" 
              className={`font-medium transition-colors ${
                isActive('/custom-orders') 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Custom Orders
            </Link>
            <Link 
              to="/inspiration" 
              className={`font-medium transition-colors ${
                isActive('/inspiration') 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Inspiration
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              About
            </Link>
          </div>

          {/* Spacer removed - flex-1 is now on navigation */}

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 relative">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Search size={24} />
            </motion.button>

            {/* Search Modal Dropdown */}
            {isSearchOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setIsSearchOpen(false)}
                />
                
                {/* Search Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-0 bg-white rounded-2xl shadow-2xl p-6 z-50 w-96"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search curtains, blinds, accessories..."
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Quick Links */}
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Popular Searches</p>
                    <div className="space-y-2">
                      <a href="#" className="block text-gray-700 hover:text-purple-600 text-sm py-1">Blackout Curtains</a>
                      <a href="#" className="block text-gray-700 hover:text-purple-600 text-sm py-1">Sheer Curtains</a>
                      <a href="#" className="block text-gray-700 hover:text-purple-600 text-sm py-1">Roller Blinds</a>
                      <a href="#" className="block text-gray-700 hover:text-purple-600 text-sm py-1">Custom Orders</a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}

            <Link to="/wishlist">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Heart size={24} />
              </motion.button>
            </Link>
            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </motion.button>
            </Link>
            <Link to="/profile">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <User size={24} />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className={`font-medium ${
                  isActive('/shop') 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className={`font-medium ${
                  isActive('/categories') 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Categories
              </Link>
              <Link 
                to="/custom-orders" 
                className={`font-medium ${
                  isActive('/custom-orders') 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Custom Orders
              </Link>
              <Link 
                to="/inspiration" 
                className={`font-medium ${
                  isActive('/inspiration') 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Inspiration
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActive('/about') 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;