import React, { useState, useEffect } from 'react';

// Import all components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

// Import utilities
import { handlePayRentClick, handleMaintenanceClick, handleContactClick } from './utils/emailHandlers';
import { seoConfig, schemaMarkup } from './utils/seoData';

function App() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="geo.region" content={seoConfig.geo.region} />
      <meta name="geo.placename" content={seoConfig.geo.placename} />
      <meta name="geo.position" content={seoConfig.geo.position} />
      <meta name="ICBM" content={seoConfig.geo.icbm} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Schema Markup for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="min-h-screen bg-white">
        {/* Header/Navigation */}
        <Header 
          scrollY={scrollY}
          handlePayRentClick={handlePayRentClick}
        />

        {/* Hero Section */}
        <HeroSection 
          handlePayRentClick={handlePayRentClick}
          handleMaintenanceClick={handleMaintenanceClick}
        />

        {/* Quick Contact Bar */}
        <ContactBar handleContactClick={handleContactClick} />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact CTA */}
        <ContactCTA 
          handleMaintenanceClick={handleMaintenanceClick}
          handleContactClick={handleContactClick}
        />

        {/* Footer */}
        <Footer 
          handlePayRentClick={handlePayRentClick}
          handleContactClick={handleContactClick}
        />
      </div>
    </>
  );
}

export default App;