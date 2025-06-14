import React from 'react';
import { CreditCard, Wrench, Calendar, Building2, MapPin } from 'lucide-react';

const HeroSection = ({ handlePayRentClick, handleMaintenanceClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/deancallan.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed">
          Dean Callan PM
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400 pb-2">
            Boulder Property Management
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Dean Callan property management services - serving Boulder and surrounding areas with comprehensive solutions since 1963
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-slate-300">
          <div className="flex items-center">
            <Calendar className="mr-2" size={20} />
            <span className="text-sm font-medium">Since 1963</span>
          </div>
          <div className="flex items-center">
            <Building2 className="mr-2" size={20} />
            <span className="text-sm font-medium">300+ Properties</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" size={20} />
            <span className="text-sm font-medium">Boulder County</span>
          </div>
        </div>
        
        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <a 
            href="https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center font-semibold no-underline"
            style={{textDecoration: 'none'}}
          >
            <CreditCard className="mr-3 group-hover:scale-110 transition-transform" size={24} />
            Pay Rent Online
          </a>
          <button 
            onClick={handleMaintenanceClick}
            className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center cursor-pointer hover:scale-105"
          >
            <Wrench className="mr-3 group-hover:scale-110 transition-transform" size={24} />
            Request Maintenance
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;