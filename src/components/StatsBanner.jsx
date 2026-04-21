import React from 'react';

const StatsBanner = () => {
  return (
    <section className="stats-banner" id="stats-banner">
      <div className="stats-banner-inner">
        {/* Projects Completed */}
        <div className="banner-stat">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
          <h3 className="banner-number">10,000+</h3>
          <p className="banner-label">Projects Completed</p>
        </div>

        {/* Fleet Vehicles */}
        <div className="banner-stat">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h3 className="banner-number">1200+</h3>
          <p className="banner-label">Fleet Vehicles</p>
        </div>

        {/* Years Experience */}
        <div className="banner-stat">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
          </div>
          <h3 className="banner-number">25+</h3>
          <p className="banner-label">Years Experience</p>
        </div>

        {/* Happy Clients */}
        <div className="banner-stat">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <h3 className="banner-number">500+</h3>
          <p className="banner-label">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
