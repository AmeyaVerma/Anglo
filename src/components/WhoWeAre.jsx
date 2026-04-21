import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="who-we-are" id="about">
      <div className="who-inner">
        {/* Left Column: Text */}
        <div className="who-text">
          <span className="section-badge">Who We Are</span>
          <h2 className="section-title">Leading the Way in Global Logistics</h2>
          <p className="section-desc">
            Anglo Shipping is a premier logistics company specializing in
            comprehensive freight forwarding, warehousing, and supply chain
            management solutions. With over 25 years of industry experience, we
            have established ourselves as a trusted partner for businesses
            worldwide.
          </p>
          <p className="section-desc">
            Our mission is to provide seamless, efficient, and reliable logistics
            services that empower businesses to thrive in the global marketplace. We
            combine cutting-edge technology with industry expertise to deliver
            exceptional value to our clients.
          </p>

          {/* Thumbnails */}
          <div className="who-thumbs">
            <div className="who-thumb">
              <img src="/images/thumb-shipping.png" alt="Shipping port" />
            </div>
            <div className="who-thumb">
              <img src="/images/thumb-trucking.png" alt="Trucking fleet" />
            </div>
            <div className="who-thumb">
              <img src="/images/thumb-cargo.png" alt="Air cargo" />
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="who-image">
          <img src="/images/warehouse.png" alt="Modern warehouse interior" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
