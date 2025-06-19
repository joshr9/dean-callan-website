import React from 'react';
import { Target, Users, Shield, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "We Play as a Team",
      description: "Collaboration and unity drive our success in every project we undertake together.",
      gradient: "from-brand-500 to-brand-600"
    },
    {
      icon: Shield,
      title: "We Live by Our Word",
      description: "Integrity and reliability form the foundation of all our client relationships.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Whatever It Takes",
      description: "We go above and beyond to ensure your needs are met with excellence.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "This Is Our House",
      description: "We treat every property with the care and attention we'd give our own home.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-600 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-brand-600 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-brand-600 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm text-brand-800 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Target className="mr-2" size={16} />
            Dean Callan PM - Professional Property Management Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental values guide everything we do, ensuring exceptional service and results for every property and tenant we serve throughout the Denver Metro area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-4 text-center leading-tight whitespace-nowrap">{service.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;