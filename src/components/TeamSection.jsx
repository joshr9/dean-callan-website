import React from 'react';
import { Users, Clock, MapPin, Star } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      image: "/GC 3.jpg",
      name: "Team Member",
      role: "Property Manager",
      description: "Dedicated to exceptional service and client satisfaction in Boulder County"
    },
    {
      image: "/IM_5245.jpg",
      name: "Team Member",
      role: "Maintenance Coordinator",
      description: "Expert in Boulder property maintenance and tenant relations"
    },
    {
      image: "/IMG_4831.jpg",
      name: "Team Member",
      role: "Client Relations",
      description: "Committed to building lasting Boulder County client relationships"
    },
    {
      image: "/IMG_5009.jpg",
      name: "Team Member",
      role: "Operations Manager",
      description: "Ensuring smooth operations and quality service throughout Boulder County"
    },
    {
      image: "/IMG_5059.jpg",
      name: "Team Member",
      role: "Financial Specialist",
      description: "Managing finances and ensuring transparency for Boulder properties"
    },
    {
      image: "/IMG_5133.jpg",
      name: "Team Member",
      role: "Property Inspector",
      description: "Maintaining Boulder County property standards and compliance"
    },
    {
      image: "/IMG_5289.jpg",
      name: "Team Member",
      role: "Customer Service",
      description: "Providing exceptional support and communication to Boulder County clients"
    }
  ];

  const stats = [
    {
      icon: Clock,
      number: "24/7",
      title: "Emergency Response",
      description: "Always available for urgent Boulder property maintenance issues"
    },
    {
      icon: MapPin,
      number: "Local",
      title: "Boulder Expertise",
      description: "Deep knowledge of Boulder County property market and regulations"
    },
    {
      icon: Star,
      number: "Full",
      title: "Service Management",
      description: "Complete Boulder property management solutions from A to Z"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-32 left-20 w-20 h-20 bg-brand-100/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-32 w-32 h-32 bg-cyan-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-brand-100/70 text-brand-800 rounded-full text-sm font-medium mb-6">
            <Users className="mr-2" size={16} />
            Dean Callan PM - Boulder County Property Management Team
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Meet Our Dean Callan Property Management Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced Dean Callan PM professionals are dedicated to providing exceptional property management services throughout Boulder County.
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={`Boulder Property Management Team Member - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-brand-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-brand-600 mb-2">{stat.number}</div>
                <div className="text-slate-800 font-semibold mb-2">{stat.title}</div>
                <div className="text-slate-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;