import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="footer-col col-info">
            <Link to="/" className="logo logo-footer">
              <img src="/images/logo.png" alt="Anglo Shipping Logo" className="logo-img" />
            </Link>
            <p className="footer-bio">
              Your trusted partner in global logistics solutions with over 25 years of excellence in freight forwarding, shipping agency, and supply chain management.
            </p>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/sea-freight">Sea Freight</Link></li>
              <li><Link to="/services/air-freight">Air Freight</Link></li>
              <li><Link to="/services/nvocc-services">NVOCC Services</Link></li>
              <li><Link to="/services/consolidation-services">Consolidation Services</Link></li>
              <li><Link to="/services/odc-project-cargo">ODC & Project Cargo</Link></li>
              <li><Link to="/services/shipping-agency">Shipping Agency</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#global-reach">Networking</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-col col-contact">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-line">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>+971-58-974-7509</span>
              </div>
              <div className="contact-line">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>gm.anglo@yahoo.com</span>
              </div>
              <div className="contact-line">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Business Center, Sharjah Publishing City Free Zone,<br/>Sharjah, United Arab Emirates</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Anglo Shipping. All rights reserved.</p>
          <p>Built with excellence in logistics</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
