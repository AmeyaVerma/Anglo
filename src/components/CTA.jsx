import React from 'react';

const CTA = () => {
  return (
    <section className="cta-banner" id="cta-banner">
      <div className="cta-inner">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Ship with Confidence?</h2>
          <p className="cta-desc">Get a personalized quote for your logistics needs today.</p>
        </div>
        <a href="#contact" className="btn btn-white">
          Request a Quote
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;
