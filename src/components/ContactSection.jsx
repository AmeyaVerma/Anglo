import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          
          {/* Left Column: Request a Quote Form */}
          <div className="contact-form-container">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title contact-title">Request a Quote</h2>
            <p className="contact-desc">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Request
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className="contact-info-card">
            <h3 className="info-card-title">Direct Contact</h3>
            
            <div className="info-group">
              <span className="info-label">Phone</span>
              <p className="info-value">+971-58-974-7509</p>
            </div>
            
            <div className="info-group">
              <span className="info-label">Email</span>
              <p className="info-value">gm.anglo@yahoo.com</p>
            </div>
            
            <div className="info-group">
              <span className="info-label">Address</span>
              <p className="info-value">
                Business Center,<br/>
                Sharjah Publishing City Free Zone,<br/>
                Sharjah, United Arab Emirates
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
