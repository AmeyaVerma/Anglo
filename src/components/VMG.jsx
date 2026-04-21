import React from 'react';

const VMG = () => {
  return (
    <section className="vmg" id="vmg">
      <div className="vmg-inner">
        <div className="vmg-header">
          <span className="section-badge">Our Purpose</span>
          <h2 className="section-title vmg-title">Vision, Mission & Goal</h2>
        </div>

        <div className="vmg-grid">
          {/* Vision */}
          <div className="vmg-card" id="vmg-vision">
            <div className="vmg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 className="vmg-card-title">Vision</h3>
            <div className="vmg-card-divider"></div>
            <p className="vmg-card-desc">To redefine global logistics by setting new standards in trust, efficiency, and customer experience, becoming a preferred logistics partner across international markets.</p>
          </div>

          {/* Mission */}
          <div className="vmg-card" id="vmg-mission">
            <div className="vmg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 className="vmg-card-title">Mission</h3>
            <div className="vmg-card-divider"></div>
            <p className="vmg-card-desc">To deliver reliable, efficient, and cost-effective logistics solutions through strong global networks, advanced systems, and a customer-first approach—ensuring seamless cargo movement from origin to destination.</p>
          </div>

          {/* Goal */}
          <div className="vmg-card" id="vmg-goal">
            <div className="vmg-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/>
                <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
              </svg>
            </div>
            <h3 className="vmg-card-title">Goal</h3>
            <div className="vmg-card-divider"></div>
            <p className="vmg-card-desc">To continuously expand our global presence, strengthen strategic partnerships, and enhance service quality—while maintaining operational excellence, transparency, and long-term customer relationships.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VMG;
