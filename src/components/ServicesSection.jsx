import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'sea-freight',
      name: 'Sea Freight',
      desc: 'Comprehensive ocean freight solutions for global cargo movement.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20l.8-2.7A2 2 0 014.7 16h14.6a2 2 0 011.9 1.3L22 20"/>
          <path d="M2 20h20"/>
          <path d="M6 16V8a2 2 0 012-2h8a2 2 0 012 2v8"/>
          <path d="M12 6V2"/>
          <path d="M8 10h8"/>
        </svg>
      )
    },
    {
      id: 'air-freight',
      name: 'Air Freight',
      desc: 'Fast and reliable air cargo services for time-sensitive shipments.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
        </svg>
      )
    },
    {
      id: 'nvocc-services',
      name: 'NVOCC Services',
      desc: 'Expert Non-Vessel Operating Common Carrier solutions for flexible shipping.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      )
    },
    {
      id: 'consolidation-services',
      name: 'Consolidation Services',
      desc: 'Efficient cargo consolidation to optimize your logistics costs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      id: 'odc-project-cargo',
      name: 'ODC & Project Cargo',
      desc: 'Specialized handling of oversized and heavy project shipments.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    },
    {
      id: 'shipping-agency',
      name: 'Shipping Agency',
      desc: 'Comprehensive port and vessel agency services worldwide.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
        </svg>
      )
    },
    {
      id: 'transport-solutions',
      name: 'Transport Solutions',
      desc: 'Reliable land transportation and last-mile delivery services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      )
    },
    {
      id: 'value-added-services',
      name: 'Value Added Services',
      desc: 'Tailored logistics support including packaging and labeling.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title services-title">Comprehensive Logistics Solutions</h2>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <Link key={svc.id} to={`/services/${svc.id}`} className="service-card" id={`svc-${svc.id}`}>
              <div className="service-icon">
                {svc.icon}
              </div>
              <h3 className="service-name">{svc.name}</h3>
              <p className="service-desc">{svc.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
