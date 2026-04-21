import React from 'react';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import StatsBar from '../components/StatsBar';
import VMG from '../components/VMG';
import WhoWeAre from '../components/WhoWeAre';
import ServicesSection from '../components/ServicesSection';
import GlobalReach from '../components/GlobalReach';
import StatsBanner from '../components/StatsBanner';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import CTA from '../components/CTA';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TrustBanner />
      <StatsBar />
      <VMG />
      <WhoWeAre />
      <ServicesSection />
      <GlobalReach />
      <StatsBanner />
      <FAQ />
      <ContactSection />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;
