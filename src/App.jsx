import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Wrench, CreditCard, Users, Building2, Home, Shield, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle Pay Rent clicks
  const handlePayRentClick = () => {
    window.open('https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button', '_blank');
  };

  // Function to handle Maintenance Request clicks
  const handleMaintenanceClick = () => {
    window.location.href = 'mailto:dccpm@deancallan.com?subject=Maintenance Request&body=Please describe your maintenance issue and include your property address.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/dclogo.png" 
                alt="Dean Callan & Company Logo" 
                className="h-10 w-auto mr-4"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800 leading-tight">Dean Callan & Company</h1>
                <p className="text-sm text-slate-600 leading-tight">Property Management</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1">Home</a>
              <a href="#about" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1">About Us</a>
              <a href="#services" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1">What We Do</a>
              <a href="#team" className="text-slate-700 hover:text-brand-600 transition-colors font-medium py-2 px-1">Our Team</a>
              <button
                onClick={handlePayRentClick}
                className="bg-brand-600 text-white px-6 py-2.5 rounded-lg hover:bg-brand-700 transition-colors font-semibold shadow-sm cursor-pointer"
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
              <a href="#services" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">What We Do</a>
              <a href="#team" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md font-medium transition-colors">Our Team</a>
              <div className="pt-2">
                <button
                  onClick={handlePayRentClick}
                  className="w-full bg-brand-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-brand-700 transition-colors cursor-pointer"
                  type="button"
                >
                  Pay Rent
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Property Image */}
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
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed">
            Professional Property
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400 pb-2">
              Management
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Serving Boulder and Boulder County with comprehensive property management services
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a 
              href="https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-4 rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center font-semibold no-underline"
              style={{textDecoration: 'none'}}
            >
              <CreditCard className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              Pay Rent Online
            </a>
            <button 
              onClick={handleMaintenanceClick}
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold flex items-center justify-center cursor-pointer"
            >
              <Wrench className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              Request Maintenance
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-6 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span className="font-medium">303-908-9551</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span className="font-medium">info@deancallanpm.com</span>
              </div>
            </div>
            <button className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg hover:bg-white/30 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About Dean Callan & Company</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are a trusted property management company serving Boulder and Boulder County with 
                professional, reliable services that maximize property value and tenant satisfaction.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our experienced team handles everything from day-to-day operations to emergency 
                maintenance, ensuring your property investment is in expert hands.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-600 mb-2">15+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-600 mb-2">500+</div>
                  <div className="text-slate-600">Properties Managed</div>
                </div>
              </div>
            </div>
            
            {/* Company Photo Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Building2 size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Company Photo</p>
                  <p className="text-sm">Professional team photo goes here</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">Boulder County</div>
                  <div className="text-slate-600">Locally Owned & Operated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Core Values */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our core values guide everything we do, ensuring exceptional service and results for every property and tenant we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <div className="bg-gradient-to-br from-brand-500 to-brand-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">We Play as a Team</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Collaboration and unity drive our success in every project we undertake together.
              </p>
            </div>
            
            <div className="card group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">We Live by Our Word</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Integrity and reliability form the foundation of our client relationships.
              </p>
            </div>
            
            <div className="card group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Whatever It Takes</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                We go above and beyond to ensure your property management needs are met.
              </p>
            </div>
            
            <div className="card group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">This Is Our House</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                We treat every property with the care and attention we'd give our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional property management services in Boulder County.
            </p>
          </div>
          
          {/* Hero Team Image */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-96 flex items-center justify-center overflow-hidden">
              <div className="text-center text-slate-500">
                <Users size={80} className="mx-auto mb-4 opacity-50" />
                <p className="text-2xl font-bold mb-2">Our Professional Team</p>
                <p className="text-lg">Hero team photo showcasing our Boulder County experts</p>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-lg font-bold text-slate-800">Boulder County Experts</div>
                <div className="text-slate-600">Local Knowledge, Professional Service</div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="text-3xl font-bold text-brand-600 mb-2">24/7</div>
              <div className="text-slate-800 font-semibold mb-2">Emergency Response</div>
              <div className="text-slate-600">Always available for urgent maintenance issues</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="text-3xl font-bold text-brand-600 mb-2">Local</div>
              <div className="text-slate-800 font-semibold mb-2">Boulder Expertise</div>
              <div className="text-slate-600">Deep knowledge of Boulder County market</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div className="text-3xl font-bold text-brand-600 mb-2">Full</div>
              <div className="text-slate-800 font-semibold mb-2">Service Management</div>
              <div className="text-slate-600">Complete property management solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help with Your Property?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Whether you need to pay rent, request maintenance, or have questions about your property, we're here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-brand-600 to-brand-700 text-white p-6 rounded-2xl hover:from-brand-700 hover:to-brand-800 transition-all hover:scale-105 shadow-xl text-center block"
              style={{textDecoration: 'none'}}
            >
              <CreditCard className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div className="font-semibold mb-2">Pay Rent</div>
              <div className="text-brand-100 text-sm">Quick and secure online payments</div>
            </a>
            
            <button 
              onClick={handleMaintenanceClick}
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-105 font-semibold cursor-pointer"
            >
              <Wrench className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div className="font-semibold mb-2">Maintenance Request</div>
              <div className="text-slate-300 text-sm">Report issues quickly and easily</div>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-105 font-semibold">
              <Phone className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div className="font-semibold mb-2">Contact Us</div>
              <div className="text-slate-300 text-sm">Get in touch with our team</div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/dclogo.png" 
                  alt="Dean Callan & Company Logo" 
                  className="h-8 w-auto mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold">Dean Callan & Company</h3>
                  <p className="text-slate-400 text-sm">Property Management</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  <span>303-908-9551</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@deancallanpm.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Boulder County, CO</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <button
                onClick={handlePayRentClick}
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-3 rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg font-semibold cursor-pointer"
                type="button"
              >
                Pay Rent Online
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Dean Callan & Company Property Management Services, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;