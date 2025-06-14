import React from 'react';
import { Award, Building2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-slate-50/50 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-brand-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-100/30 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium mb-6">
              <Award className="mr-2" size={16} />
              Dean Callan PM - Boulder County's Trusted Choice Since 1963
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              About Dean Callan Property Management
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Dean Callan PM has been Boulder County's trusted property management choice since 1963. Owning commercial property comes with high standards, tight regulations, and constant demands—and that's where Dean Callan property management services come in. We offer hands-on Boulder property management solutions that can be customized to your needs—whether you're looking for help with a single piece or full-service management.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From routine maintenance and vendor coordination to inspections, budgeting, and tenant communication, Dean Callan PM keeps your Boulder County properties running smoothly, compliant, and protected from costly oversights. Our Dean Callan property management team is responsive, detail-oriented, and committed to preserving your investment while giving you peace of mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl font-bold text-brand-600 mb-2 group-hover:scale-110 transition-transform">1963</div>
                <div className="text-slate-600 font-medium">Established In Boulder</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl font-bold text-brand-600 mb-2 group-hover:scale-110 transition-transform">300+</div>
                <div className="text-slate-600 font-medium">Properties Managed</div>
              </div>
            </div>
          </div>
          
          {/* Property Portfolio Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl border border-slate-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Our Boulder County Portfolio</h3>
                <p className="text-slate-600 text-lg">Professional property management across Boulder</p>
              </div>
              
              {/* Property Grid - Larger Layout */}
              <div className="grid grid-cols-1 gap-6 mb-6">
                {/* 1615 Pearl Street - Featured */}
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/1615PearlStreet.jpg" 
                    alt="1615 Pearl Street - Boulder Property Management by Dean Callan PM" 
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-bold mb-1">1615 Pearl Street</p>
                    <p className="text-sm opacity-90">Premier Boulder Commercial Property</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Commercial
                  </div>
                </div>

                {/* Bottom Two Properties */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Koko Plaza */}
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img 
                      src="/kokoPlaza.jpg" 
                      alt="Koko Plaza - Boulder Property Management by Dean Callan PM" 
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-bold mb-1">Koko Plaza</p>
                      <p className="text-sm opacity-90">Boulder, CO</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Mixed Use
                    </div>
                  </div>

                  {/* 1711 Pearl */}
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img 
                      src="/1711Pearl.jpeg" 
                      alt="1711 Pearl Street - Boulder Property Management by Dean Callan PM" 
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-bold mb-1">1711 Pearl Street</p>
                      <p className="text-sm opacity-90">Boulder, CO</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Retail
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-700 font-semibold text-lg mb-2">Trusted Management of Premium Boulder County Properties</p>
                <p className="text-slate-600">Over 60 years of local expertise in commercial and residential property management</p>
              </div>
            </div>
            
            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">Boulder County</div>
                <div className="text-slate-600">Locally Owned & Operated</div>
              </div>
            </div>
             */}
            {/* Floating Elements - Removed problematic blue circle */}
            <div className="absolute top-1/3 -right-2 w-4 h-4 bg-cyan-300 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;