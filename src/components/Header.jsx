import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollY, handlePayRentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'shadow-lg backdrop-blur-sm bg-white/95' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/dclogo.png" 
              alt="Dean Callan PM - Boulder Property Management Company Logo" 
              className="h-10 w-auto mr-4"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-800 leading-tight">Dean Callan & Company</h1>
              <p className="text-sm text-slate-600 leading-tight">Dean Callan PM - Boulder Property Management</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#team" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1 relative group">
              Our Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </a>
            <button
              onClick={handlePayRentClick}
              className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-2.5 rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:scale-105 cursor-pointer"
              type="button"
            >
              Pay Rent
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-700 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <a href="#home" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">Home</a>
            <a href="#about" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">About Us</a>
            <a href="#services" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">Services</a>
            <a href="#team" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">Our Team</a>
            <div className="pt-2">
              <button
                onClick={handlePayRentClick}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white px-4 py-3 rounded-md font-semibold hover:from-brand-700 hover:to-brand-800 transition-all duration-300 cursor-pointer"
                type="button"
              >
                Pay Rent
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;