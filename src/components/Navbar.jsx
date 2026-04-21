import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (e, name) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  const services = [
    { name: 'Sea Freight', id: 'sea-freight' },
    { name: 'Air Freight', id: 'air-freight' },
    { name: 'NVOCC Services', id: 'nvocc-services' },
    { name: 'Consolidation Services', id: 'consolidation-services' },
    { name: 'ODC & Project Cargo', id: 'odc-project-cargo' },
    { name: 'Shipping Agency', id: 'shipping-agency' },
    { name: 'Transport Solutions', id: 'transport-solutions' },
    { name: 'Value Added Services', id: 'value-added-services' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo" id="logo">
          <img src="/images/logo.png" alt="Anglo Shipping Logo" className="logo-img" />
        </Link>

        {/* Mobile toggle */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="menuToggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li className={`dropdown ${openDropdown === 'services' ? 'open' : ''}`}>
            <a href="#" onClick={(e) => toggleDropdown(e, 'services')}>
              Services <span className="dropdown-arrow">▾</span>
            </a>
            <div className="dropdown-menu">
              {services.map((svc) => (
                <Link key={svc.id} to={`/services/${svc.id}`}>{svc.name}</Link>
              ))}
            </div>
          </li>
          <li><a href="#global-reach">Networking</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="tel:971-58-974-7509" className="nav-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call for Inquiry
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
