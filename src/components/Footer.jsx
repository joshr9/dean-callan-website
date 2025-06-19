import React from 'react';
import { Phone, Mail, MapPin, CreditCard, Users, Building2 } from 'lucide-react';

const Footer = () => {
  // General contact function
  const handleContactClick = () => {
    window.location.href = 'mailto:gcalley@deancallan.com?subject=General Inquiry&body=Hello, I would like to inquire about your property management services.';
  };

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
                  <p className="text-sm text-slate-400">Monday - Thursday, 9AM - 5PM</p>
                </div>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Mail size={18} className="mr-3 text-slate-400" />
                <div>
                  <a 
                    href="mailto:gcalley@deancallan.com?subject=General Inquiry"
                    className="font-medium hover:text-brand-400 transition-colors"
                    style={{textDecoration: 'none'}}
                  >
                    gcalley@deancallan.com
                  </a>
                  <p className="text-sm text-slate-400">General inquiries & contact</p>
                </div>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Mail size={18} className="mr-3 text-slate-400" />
                <div>
                  <a 
                    href="mailto:dccpm@deancallan.com?subject=Maintenance Request&body=Please describe your maintenance issue and include your property address."
                    className="font-medium hover:text-brand-400 transition-colors"
                    style={{textDecoration: 'none'}}
                  >
                    dccpm@deancallan.com
                  </a>
                  <p className="text-sm text-slate-400">Maintenance requests only</p>
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
          
          {/* Quick Actions - Simplified */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Actions</h4>
            <div className="space-y-4">
              {/* Primary Action - Pay Rent */}
              <a
                href="https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-brand-600 text-white px-4 py-3 rounded-lg hover:bg-brand-700 transition-colors font-semibold"
                style={{textDecoration: 'none'}}
              >
                <CreditCard className="mr-2" size={18} />
                Pay Rent Online
              </a>
              
              {/* Portal Access Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 hover:bg-slate-700 transition-colors">
                  <div className="flex items-center mb-2">
                    <Users size={16} className="mr-1 text-slate-400" />
                    <span className="text-xs font-medium text-slate-300">TENANTS</span>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="https://deancallanco.appfolio.com/connect/users/sign_in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-slate-700 text-white px-2 py-1.5 rounded text-xs hover:bg-slate-600 transition-colors"
                      style={{textDecoration: 'none'}}
                    >
                      Login
                    </a>
                    <a
                      href="https://deancallanco.appfolio.com/connect/users/request_access?a=cw&utm_source=apmsites_v3&utm_campaign=tportal_self_signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-slate-600 border border-slate-500 text-white px-2 py-1.5 rounded text-xs hover:bg-slate-500 transition-colors"
                      style={{textDecoration: 'none'}}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 hover:bg-slate-700 transition-colors">
                  <div className="flex items-center mb-2">
                    <Building2 size={16} className="mr-1 text-slate-400" />
                    <span className="text-xs font-medium text-slate-300">OWNERS</span>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="https://deancallanco.appfolio.com/oportal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-slate-700 text-white px-2 py-1.5 rounded text-xs hover:bg-slate-600 transition-colors"
                      style={{textDecoration: 'none'}}
                    >
                      Login
                    </a>
                    <button
                      onClick={handleContactClick}
                      className="w-full bg-slate-600 border border-slate-500 text-white px-2 py-1.5 rounded text-xs hover:bg-slate-500 transition-colors"
                    >
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleContactClick}
                className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
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
              <a 
                href="https://www.linkedin.com/in/joshruchwarger/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors"
                style={{textDecoration: 'none'}}
              >
                Josue Ruchwarger
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;