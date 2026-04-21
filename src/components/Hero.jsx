import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/hero-bg.png" alt="Cargo ship at sea" />
      </div>

      <div className="hero-content">
        <span className="hero-badge">Global Logistics Partner</span>
        <h1 className="hero-title">Premium Enterprise<br/>Logistics Solutions</h1>
        <p className="hero-desc">
          Delivering excellence in freight forwarding, shipping agency, warehousing, and
          supply chain management across the globe with 25+ years of industry expertise.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary" id="btn-quote">
            Request a Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#vmg" className="btn btn-outline" id="btn-learn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
