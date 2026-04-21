import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-header">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-desc">Subscribe to our newsletter for the latest industry insights and company updates.</p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">
              Subscribe
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
