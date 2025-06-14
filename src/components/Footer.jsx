import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ handlePayRentClick, handleContactClick }) => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/dclogo.png" 
                alt="Dean Callan PM - Boulder Property Management Company Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Dean Callan & Company</h3>
                <p className="text-slate-400">Property Management</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Dean Callan property management - serving Boulder County with professional property management services since 1963.
            </p>
            <p className="text-slate-400 text-sm">
              Locally owned and operated in Boulder County, Colorado.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Phone size={18} className="mr-3 text-slate-400" />
                <div>
                  <p className="font-medium">(303) 945-2022</p>
                  <p className="text-sm text-slate-400">Monday - Friday, 9AM - 5PM</p>
                </div>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Mail size={18} className="mr-3 text-slate-400" />
                <div>
                  <p className="font-medium">info@deancallanpm.com</p>
                  <p className="text-sm text-slate-400">General inquiries</p>
                </div>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin size={18} className="mr-3 text-slate-400" />
                <div>
                    <p className="font-medium text-slate-300">Boulder, Colorado</p>
                    <p className="text-sm text-slate-400">Denver Metro & surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Actions</h4>
            <div className="space-y-3">
              <button
                onClick={handlePayRentClick}
                className="w-full bg-brand-600 text-white px-3 py-2 rounded text-sm hover:bg-brand-700 transition-colors"
                type="button"
              >
                Pay Rent Online
              </button>
              <button
                onClick={handleContactClick}
                className="w-full bg-slate-800 border border-slate-600 text-white px-3 py-2 rounded text-sm hover:bg-slate-700 transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                &copy; 2025 Dean Callan & Company Property Management Services, Inc. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Dean Callan PM - Boulder County's trusted property management experts since 1963.
              </p>
            </div>
            <div className="text-slate-500 text-xs">
              Website designed & developed by{' '}
              <span className="text-slate-400">
                [Josue Ruchwarger]
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;