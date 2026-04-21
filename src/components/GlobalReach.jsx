import React from 'react';

const GlobalReach = () => {
  return (
    <section className="global-reach" id="global-reach">
      <div className="global-inner">
        <div className="global-header">
          <span className="section-badge">Global Reach</span>
          <h2 className="section-title global-title">Connected Across Continents</h2>
          <p className="global-desc">
            Our extensive global network spans major ports and trade routes worldwide,
            ensuring seamless connectivity for your cargo wherever it needs to go.
          </p>
        </div>

        <div className="global-stats-grid">
          {/* Partner Ports */}
          <div className="global-stat-card">
            <div className="global-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="5" r="3"/>
                <line x1="12" y1="22" x2="12" y2="8"/>
                <path d="M5 12H2a10 10 0 0020 0h-3"/>
              </svg>
            </div>
            <h3 className="global-stat-number">200+</h3>
            <p className="global-stat-label">Partner Ports</p>
          </div>

          {/* Countries Served */}
          <div className="global-stat-card">
            <div className="global-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
              </svg>
            </div>
            <h3 className="global-stat-number">50+</h3>
            <p className="global-stat-label">Countries Served</p>
          </div>

          {/* Global Agents */}
          <div className="global-stat-card">
            <div className="global-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="global-stat-number">100+</h3>
            <p className="global-stat-label">Global Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
