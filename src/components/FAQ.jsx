import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What logistics services do you offer?",
      answer: "We provide a complete range of logistics solutions including sea freight, air freight, NVOCC services, ODC & project cargo, shipping agency services, transport solutions, and value-added services—ensuring end-to-end cargo movement across global markets."
    },
    {
      question: "Do you handle both import and export shipments?",
      answer: "Yes, we manage both import and export logistics with full support for documentation, customs coordination, and delivery. Our global network ensures smooth cargo handling from origin to destination."
    },
    {
      question: "Can you handle time-sensitive or urgent shipments?",
      answer: "Absolutely. Our air freight services are specifically designed for urgent and high-priority shipments, offering fast transit times, priority handling, and real-time tracking."
    },
    {
      question: "Do you provide tracking and shipment visibility?",
      answer: "Yes, we offer proactive updates at every stage of the journey with complete transparency."
    },
    {
      question: "How do you ensure the safety of cargo?",
      answer: "We follow strict operational standards, work with trusted partners, and use secure handling practices to ensure your cargo is transported safely, efficiently, and without damage or delays."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title faq-title">Common Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndices.includes(index) ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
