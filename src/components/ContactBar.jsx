import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactBar = ({ handleContactClick }) => {
  return (
    <section className="py-6 bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 md:mb-0">
            <div className="flex items-center hover:scale-105 transition-transform">
              <Phone size={20} className="mr-2" />
              <span className="font-medium">(303) 945-2022</span>
            </div>
            <div className="flex items-center hover:scale-105 transition-transform">
              <Mail size={20} className="mr-2" />
              <span className="font-medium">dccpm@deancallan.com</span>
            </div>
          </div>
          <button 
            className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium hover:scale-105" 
            onClick={handleContactClick}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;