import React from 'react';
import { Phone, CreditCard, Wrench } from 'lucide-react';

const ContactCTA = ({ handleMaintenanceClick, handleContactClick }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-brand-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-600/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
          <Phone className="mr-2" size={16} />
          Dean Callan PM - Boulder County Property Management Services
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Need Help with Your Boulder Property?
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether you need to pay rent, request maintenance, or have questions about your Boulder County property, Dean Callan property management is here to help.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <a 
            href="https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-brand-600 to-brand-700 text-white p-8 rounded-3xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 hover:scale-105 shadow-2xl text-center block border border-brand-500/20"
            style={{textDecoration: 'none'}}
          >
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="group-hover:scale-110 transition-transform" size={32} />
            </div>
            <div className="font-bold text-lg mb-2">Pay Rent Online</div>
            <div className="text-brand-100 text-sm">Quick and secure online payments for Boulder County properties</div>
          </a>
          
          <button 
            onClick={handleMaintenanceClick}
            className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold cursor-pointer"
          >
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="group-hover:scale-110 transition-transform" size={32} />
            </div>
            <div className="font-bold text-lg mb-2">Maintenance Request</div>
            <div className="text-slate-300 text-sm">Report Boulder property issues quickly and easily</div>
          </button>
          
          <button 
            className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold" 
            onClick={handleContactClick}
          >
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="group-hover:scale-110 transition-transform" size={32} />
            </div>
            <div className="font-bold text-lg mb-2">Contact Our Team</div>
            <div className="text-slate-300 text-sm">Get in touch with our Boulder County experts</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;