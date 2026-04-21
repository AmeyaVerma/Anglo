import React from 'react';

const StatsBar = () => {
  return (
    <section className="stats-bar" id="stats-bar">
      <div className="stats-bar-inner">
        <div className="stat-item" id="stat-experience">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/>
              <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
            </svg>
          </div>
          <span className="stat-text">25+ Years Experience</span>
        </div>

        <div className="stat-item" id="stat-network">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
            </svg>
          </div>
          <span className="stat-text">Global Network</span>
        </div>

        <div className="stat-item" id="stat-projects">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
          </div>
          <span className="stat-text">10,000+ Projects</span>
        </div>

        <div className="stat-item" id="stat-fleet">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <span className="stat-text">1200+ Fleet</span>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
