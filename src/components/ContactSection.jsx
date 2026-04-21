import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:gm.anglo@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          
          {/* Left Column: Request a Quote Form */}
          <div className="contact-form-container">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title contact-title">Request a Quote</h2>
            <p className="contact-desc">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Request
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
