import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/* ─── Sea Freight – rich content sections ─── */
const seaFreightSections = {
  intro: {
    heading: 'Comprehensive ocean freight solutions for global cargo movement.',
    paragraphs: [
      'Our Sea Freight services are designed to deliver cost-effective, reliable, and scalable ocean transportation solutions across global trade lanes. Backed by strong partnerships with leading carriers and a well-established international network, we ensure smooth cargo movement with consistent schedules and competitive pricing.',
      'Whether you are shipping full container loads or smaller consignments, we provide tailored solutions to meet your business requirements with efficiency and precision.',
    ],
  },
  capabilities: {
    icon: '🌐',
    heading: 'Our Capabilities',
    items: [
      { title: 'FCL (Full Container Load)', text: 'Dedicated container solutions for large shipments with maximum security and faster transit.' },
      { title: 'LCL (Less than Container Load)', text: 'Cost-effective consolidation services for smaller cargo volumes.' },
      { title: 'Global Trade Lane Coverage', text: 'Strong presence across Middle East, Far East, Europe, and the Indian Subcontinent.' },
      { title: 'Carrier Partnerships', text: 'Access to major mainline operators ensuring space availability and schedule reliability.' },
      { title: 'Flexible Routing Options', text: 'Optimized transit plans to balance cost and delivery timelines.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'End-to-End Solutions',
    items: [
      'Shipment planning and booking',
      'Documentation and compliance support',
      'Customs coordination and clearance assistance',
      'Cargo tracking with real-time updates',
      'Door-to-door delivery options',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Our Sea Freight',
    items: [
      'Competitive and transparent pricing',
      'Reliable transit schedules',
      'Strong global agent network',
      'Efficient cargo handling and coordination',
      'Customer-focused approach with dedicated support',
    ],
  },
  closing: {
    icon: '📦',
    heading: 'What You Can Expect',
    text: 'From origin to destination, we ensure your cargo is handled with care, efficiency, and complete visibility. Our goal is to simplify ocean logistics while delivering consistent performance you can depend on.',
  },
};

/* ─── Air Freight – rich content sections ─── */
const airFreightSections = {
  intro: {
    heading: 'Fast and reliable air cargo services for time-sensitive shipments.',
    paragraphs: [
      'Our Air Freight services are built for speed, reliability, and precision, ensuring your time-sensitive shipments reach their destination without delays. With access to a strong global airline network and priority cargo handling, we provide fast and secure transportation across major international airports.',
      'Whether it\'s urgent shipments, high-value goods, or critical supply chain requirements, we deliver tailored air freight solutions with complete control and visibility.',
    ],
  },
  capabilities: {
    icon: '🌐',
    heading: 'Our Capabilities',
    items: [
      { title: 'Express & Priority Shipments', text: 'Fastest transit options for urgent cargo.' },
      { title: 'Standard Air Freight', text: 'Cost-effective solutions with reliable schedules.' },
      { title: 'Airport-to-Airport & Door-to-Door', text: 'Flexible service modes to match your logistics needs.' },
      { title: 'Global Coverage', text: 'Connectivity across key international hubs.' },
      { title: 'Flexible Capacity Options', text: 'Solutions for small parcels to large consignments.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'End-to-End Solutions',
    items: [
      'Cargo booking and flight planning',
      'Documentation and customs support',
      'Export/import handling and compliance',
      'Real-time tracking and proactive updates',
      'Last-mile delivery coordination',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Our Air Freight',
    items: [
      'Fast and dependable transit times',
      'Strong airline partnerships and space assurance',
      'Secure handling for high-value and sensitive cargo',
      'Transparent communication at every stage',
      'Dedicated customer support',
    ],
  },
  closing: {
    icon: '📦',
    heading: 'What You Can Expect',
    text: 'We ensure your cargo moves with speed, safety, and efficiency, minimizing transit time while maintaining the highest standards of handling and coordination.',
  },
};

/* ─── NVOCC Services – rich content sections ─── */
const nvoccSections = {
  intro: {
    heading: 'Connecting global trade with reliable, efficient, and customer-focused NVOCC solutions.',
    paragraphs: [
      'Anglo Shipping LLC is a dynamic NVOCC operator, offering reliable and efficient container solutions across key global trade lanes. With a strong international network and customer-centric approach, we provide seamless logistics support backed by operational excellence, transparency, and timely execution.',
      'Our focus is on delivering flexible, cost-effective, and dependable shipping solutions to partners, agents, and customers worldwide.',
    ],
  },
  capabilities: {
    icon: '📥',
    heading: 'Import Solutions',
    description: 'Anglo Shipping LLC ensures smooth handling of import cargo across global destinations, supported by a strong network of agents and partners.',
    items: [
      { title: 'Agent & Port Coordination', text: 'Efficient coordination with destination agents and port authorities.' },
      { title: 'Documentation & Compliance', text: 'Complete support for documentation and customs compliance.' },
      { title: 'Container Management', text: 'Strong control over container movement, storage, and inventory.' },
      { title: 'Real-Time Tracking', text: 'Shipment tracking and status visibility at every stage.' },
      { title: 'Reliable Local Networks', text: 'Dependable delivery through well-established local partnerships.' },
    ],
  },
  solutions: {
    icon: '📤',
    heading: 'Export Solutions',
    description: 'Anglo Shipping LLC offers comprehensive export services, connecting key origins to major international destinations with reliability and competitive pricing.',
    items: [
      'Coverage across Middle East, Far East, Indian Subcontinent, and global trade lanes',
      'Flexible FCL & LCL solutions tailored to customer needs',
      'Strong partnerships with feeder operators and mainline carriers',
      'Assured space availability and timely vessel connections',
      'Competitive freight rates with consistent service quality',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Anglo Shipping LLC',
    items: [
      'Strong global NVOCC network',
      'Reliable agent partnerships worldwide',
      'Competitive pricing with high service standards',
      'Transparent communication and reporting',
      'Customer-focused and solution-driven approach',
    ],
  },
  closing: {
    icon: '🌍',
    heading: 'Seamless Cargo Movement, Globally',
    text: 'We ensure your cargo reaches its destination safely, efficiently, and without delays. We enable smooth cargo movement with speed, reliability, and global reach.',
  },
};

/* ─── Consolidation Services – rich content sections ─── */
const consolidationSections = {
  intro: {
    heading: 'Reduce costs, accelerate delivery, and enhance your overall supply chain performance.',
    paragraphs: [
      'Our consolidation solutions are designed to optimize your logistics operations by combining multiple smaller shipments into a single, cohesive consignment. This strategic approach minimizes freight expenses while maximizing efficiency across trade lanes.',
      'We manage the entire process from origin collection to final distribution, offering a seamless experience that benefits both your operational bottom line and your end customers.',
    ],
  },
  capabilities: {
    icon: '📦',
    heading: 'Benefits of Our Consolidation Services',
    items: [
      { title: 'Optimized Freight Costs', text: 'Reduce your logistics expenses by combining multiple shipments into a single consignment. Pay a single, cost-effective freight charge instead of multiple individual shipments.' },
      { title: 'Faster Transit & Delivery', text: 'By consolidating cargo efficiently, we ensure quicker movement of goods, helping you benefit from improved transit times and timely deliveries.' },
      { title: 'Enhanced Customer Experience', text: 'Offer your customers greater reliability with faster deliveries and a wider range of products, improving overall satisfaction and service quality.' },
      { title: 'Improved Operational Efficiency', text: 'Streamline your supply chain by reducing inventory pressure and optimizing shipment handling, leading to higher efficiency and better resource utilization.' },
      { title: 'Complete Visibility', text: 'Maintain full control with comprehensive tracking from the moment cargo is collected until it reaches its final destination.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'How It Works',
    items: [
      'Supplier coordination and cargo collection at origin',
      'Professional packing, sorting, and container stuffing',
      'Unified customs clearance documentation',
      'Efficient ocean or air freight transportation',
      'De-consolidation and last-mile delivery at destination',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Consolidate With Us',
    items: [
      'Significant reduction in overall shipping costs',
      'Lower risk of damage with expert handling',
      'Flexible departure schedules tailored to your needs',
      'Dedicated logistics experts managing your freight',
      'Scalable solutions for growing businesses',
    ],
  },
  closing: {
    icon: '🔗',
    heading: 'Smarter Supply Chain Solutions',
    text: 'Leverage our consolidation expertise to streamline your logistics. We focus on efficiency so you can focus on growing your business.',
  },
};

/* ─── ODC & Project Cargo – rich content sections ─── */
const odcSections = {
  intro: {
    heading: 'Handling large, heavy, and complex shipments with specialized expertise.',
    paragraphs: [
      'Our ODC (Over Dimensional Cargo) and Project Cargo services are designed to handle large, heavy, and complex shipments that require specialized expertise, planning, and execution. From industrial equipment to infrastructure components, we ensure safe and efficient transportation of cargo that exceeds standard dimensions or weight limits.',
      'With a strong network, technical know-how, and precise coordination, we deliver end-to-end solutions for even the most challenging logistics projects.',
    ],
  },
  capabilities: {
    icon: '🏗️',
    heading: 'Our Capabilities',
    items: [
      { title: 'Overweight & Oversized Cargo', text: 'Specialized handling of cargo that exceeds standard limits.' },
      { title: 'Industrial Transportation', text: 'Transportation of industrial machinery, turbines, and heavy equipment.' },
      { title: 'Multi-Modal Logistics', text: 'Integrated solutions utilizing sea, air, and road transport.' },
      { title: 'Feasibility Analysis', text: 'Comprehensive route surveys and feasibility analysis.' },
      { title: 'Specialized Equipment', text: 'Access to hydraulic trailers, cranes, flat racks, and more.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'End-to-End Project Management',
    items: [
      'Detailed project planning and execution',
      'Route mapping and risk assessment',
      'Port handling and heavy-lift coordination',
      'Customs clearance and regulatory compliance',
      'On-site supervision and cargo monitoring',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Our ODC & Project Cargo',
    items: [
      'Expertise in handling complex and high-value shipments',
      'Strong coordination with ports, carriers, and authorities',
      'Access to specialized equipment and transport solutions',
      'Focus on safety, precision, and timely delivery',
      'Dedicated project management team',
    ],
  },
  closing: {
    icon: '📦',
    heading: 'Maximum Safety, Accuracy, and Efficiency',
    text: 'We ensure your cargo is moved with maximum safety, accuracy, and efficiency, regardless of size or complexity. From planning to final delivery, every stage is handled with complete control and attention to detail.',
  },
};

/* ─── Shipping Agency – rich content sections ─── */
const agencySections = {
  intro: {
    heading: 'Smooth, efficient, and compliant vessel operations at every port of call.',
    paragraphs: [
      'Our Shipping Agency services ensure smooth, efficient, and compliant vessel operations at every port of call. Acting as a trusted representative for ship owners, charterers, and operators, we manage all port-related activities with precision and professionalism.',
      'With deep industry experience and strong coordination with port authorities, we ensure quick vessel turnaround, cost control, and seamless execution of all operational requirements.',
    ],
  },
  capabilities: {
    icon: '⚓',
    heading: 'Our Capabilities',
    items: [
      { title: 'Vessel Berthing & Sailing', text: 'End-to-end coordination for safe berthing and timely departure.' },
      { title: 'Port Clearance & Compliance', text: 'Handling of all regulatory clearances and local compliance.' },
      { title: 'Port Authority Liaison', text: 'Direct coordination with port authorities and terminal operators.' },
      { title: 'Crew Handling & Support', text: 'Documentation, sign-on/off, and welfare support for crew.' },
      { title: 'Cargo Operations', text: 'Supervision of loading and discharging operations.' },
      { title: 'Husbandry Services', text: 'Managing onboard requirements, supplies, and maintenance.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'End-to-End Vessel Support',
    items: [
      'Pre-arrival planning and documentation',
      'Port call management and operational coordination',
      'Real-time updates on vessel status',
      'Handling of port formalities and approvals',
      'Coordination for bunkering, supplies, and repairs',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Our Shipping Agency',
    items: [
      'Strong relationships with port authorities and terminals',
      'Efficient handling of vessel operations',
      'Transparent communication and reporting',
      'Quick turnaround and reduced port time',
      'Dedicated team ensuring smooth coordination',
    ],
  },
  closing: {
    icon: '🚢',
    heading: 'Optimized Performance at Every Port',
    text: 'From arrival to departure, we ensure your vessel operations are handled with efficiency, compliance, and complete reliability, minimizing delays and optimizing performance at every port.',
  },
};

/* ─── Transport Solutions – rich content sections ─── */
const transportSections = {
  intro: {
    heading: 'Reliable, flexible, and efficient inland cargo movement.',
    paragraphs: [
      'Our Transport Solutions provide reliable, flexible, and efficient inland cargo movement, ensuring seamless connectivity between ports, warehouses, and final destinations. Backed by a strong fleet network and experienced operations team, we deliver cargo safely and on time across diverse geographies.',
      'From first-mile pickup to last-mile delivery, we offer customized transportation services designed to meet your operational and timeline requirements.',
    ],
  },
  capabilities: {
    icon: '🚚',
    heading: 'Our Capabilities',
    items: [
      { title: 'FTL & PTL Services', text: 'Full Truck Load and Part Load options for varying cargo sizes.' },
      { title: 'Containerized Transport', text: 'Secure movement with robust containerized transport solutions.' },
      { title: 'First & Last-Mile Delivery', text: 'Comprehensive start-to-finish delivery management.' },
      { title: 'Multi-Modal Connectivity', text: 'Integration of port, rail, and road transportation networks.' },
      { title: 'Pan-Regional Coverage', text: 'Scalable fleet availability across diverse geographical regions.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'End-to-End Transport Management',
    items: [
      'Route planning and optimization',
      'Pickup and delivery scheduling',
      'Real-time vehicle tracking and updates',
      'Coordination with ports, warehouses, and customers',
      'Safe handling and transit monitoring',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'Why Choose Our Transport Solutions',
    items: [
      'Strong fleet network ensuring availability and flexibility',
      'Timely deliveries with optimized routing',
      'Secure and reliable cargo handling',
      'Transparent communication and live tracking',
      'Cost-effective solutions tailored to your needs',
    ],
  },
  closing: {
    icon: '🛣️',
    heading: 'Bridging the Gap with Speed and Visibility',
    text: 'We ensure your cargo moves with speed, safety, and efficiency, bridging the gap between sea, air, and final delivery with complete operational control and visibility.',
  },
};

/* ─── Value Added Services – rich content sections ─── */
const valueAddedSections = {
  intro: {
    heading: 'Streamlining your supply chain with customized logistics support.',
    paragraphs: [
      'Beyond simple transportation, we offer a comprehensive suite of value-added services specifically designed to optimize your supply chain, reduce overheads, and improve overall operational efficiency. Every business has unique demands, and our customizable solutions ensure your cargo is handled precisely according to your requirements.',
      'From professional warehousing to strategic compliance advisory, our dedicated teams work directly along your supply chain to ensure everything moves smoothly.',
    ],
  },
  capabilities: {
    icon: '🛠️',
    heading: 'Core Services',
    items: [
      { title: 'Labeling & Packaging', text: 'Value-added warehouse services to ensure cargo is shipment-ready and compliant.' },
      { title: 'Warehousing & Inventory', text: 'Short-term and long-term storage solutions with complete inventory visibility.' },
      { title: 'Buyer\'s Consolidation', text: 'Coordinating shipments from multiple vendors into a single optimized shipment.' },
    ],
  },
  solutions: {
    icon: '⚙️',
    heading: 'Strategic Optimization',
    items: [
      'Cargo Consolidation & Optimization for efficiency',
      'Documentation Accuracy & Audit Support',
      'Regulatory & Compliance Advisory services',
    ],
  },
  whyChoose: {
    icon: '💡',
    heading: 'The Anglo Advantage',
    items: [
      'Real-Time Shipment Visibility with proactive updates',
      'Customized Reporting & MIS for decision-making',
      'Dedicated Account Management as your single point of contact',
    ],
  },
  closing: {
    icon: '⭐',
    heading: 'Excellence Beyond Delivery',
    text: 'We go the extra mile to ensure your cargo meets all requirements before reaching the end customer. Focus on your business while we add value to your logistics loop.',
  },
};

/* ─── All service data ─── */
const serviceData = {
  'sea-freight': {
    title: 'Sea Freight',
    image: '/images/services/sea-freight.png',
    richContent: seaFreightSections,
  },
  'air-freight': {
    title: 'Air Freight',
    image: '/images/services/air-freight.png',
    richContent: airFreightSections,
  },
  'nvocc-services': {
    title: 'NVOCC Services',
    image: '/images/services/nvocc.png',
    richContent: nvoccSections,
  },
  'consolidation-services': {
    title: 'Consolidation Services',
    image: '/images/services/consolidation.png',
    richContent: consolidationSections,
  },
  'odc-project-cargo': {
    title: 'ODC & Project Cargo',
    image: '/images/services/odc.png',
    richContent: odcSections,
  },
  'shipping-agency': {
    title: 'Shipping Agency',
    image: '/images/services/agency.png',
    richContent: agencySections,
  },
  'transport-solutions': {
    title: 'Transport Solutions',
    image: '/images/services/transport.png',
    richContent: transportSections,
  },
  'value-added-services': {
    title: 'Value Added Services',
    image: '/images/services/value-added.png',
    richContent: valueAddedSections,
  },
};

/* ─────────── Rich layout (Sea Freight style) ─────────── */
const RichServiceLayout = ({ service }) => {
  const { intro, capabilities, solutions, whyChoose, closing } = service.richContent;

  return (
    <>
      {/* Introduction */}
      <section className="svc-intro">
        <div className="svc-container">
          <h2 className="svc-intro-heading">{intro.heading}</h2>
          <div className="svc-intro-divider"></div>
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="svc-intro-text">{p}</p>
          ))}
        </div>
      </section>

      {/* Capabilities – card grid */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-section-header">
            <span className="svc-section-icon">{capabilities.icon}</span>
            <h2 className="svc-section-title">{capabilities.heading}</h2>
          </div>
          <div className="svc-cap-grid">
            {capabilities.items.map((item, i) => (
              <div key={i} className="svc-cap-card">
                <span className="svc-cap-number">0{i + 1}</span>
                <h3 className="svc-cap-title">{item.title}</h3>
                <p className="svc-cap-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions + Why Choose – two-column */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-two-col">
            {/* Solutions */}
            <div className="svc-list-block">
              <div className="svc-section-header svc-section-header--left">
                <span className="svc-section-icon">{solutions.icon}</span>
                <h2 className="svc-section-title">{solutions.heading}</h2>
              </div>
              <ul className="svc-checklist">
                {solutions.items.map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose */}
            <div className="svc-list-block">
              <div className="svc-section-header svc-section-header--left">
                <span className="svc-section-icon">{whyChoose.icon}</span>
                <h2 className="svc-section-title">{whyChoose.heading}</h2>
              </div>
              <ul className="svc-checklist">
                {whyChoose.items.map((item, i) => (
                  <li key={i} className="svc-check-item">
                    <span className="svc-check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="svc-closing">
        <div className="svc-container">
          <span className="svc-closing-icon">{closing.icon}</span>
          <h2 className="svc-closing-title">{closing.heading}</h2>
          <p className="svc-closing-text">{closing.text}</p>
          <Link to="/#contact" className="btn btn-primary svc-closing-btn">
            Request a Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

/* ─────────── Simple layout (other services) ─────────── */
const SimpleServiceLayout = ({ service }) => (
  <section className="service-content-section">
    <div className="service-content-inner">
      <div className="service-text-block">
        <h2 className="service-subtitle">{service.desc}</h2>
        <div className="service-divider"></div>
        <p className="service-main-text">{service.content}</p>
        <div className="service-features">
          {['Global Reach & Connectivity', 'Real-Time Tracking & Visibility', 'Expert Documentation Support', '24/7 Professional Support'].map((f, i) => (
            <div key={i} className="feature-item">
              <span className="feature-check">✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="service-cta-sidebar">
        <div className="cta-card">
          <h3>Need a Custom Solution?</h3>
          <p>Contact our experts today for a tailored logistics plan that fits your business goals.</p>
          <Link to="/#contact" className="btn btn-primary btn-block">Get a Quote</Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────── Page Shell ─────────── */
const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="error-page" style={{ padding: '150px 24px', textAlign: 'center', color: '#fff' }}>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const isRich = Boolean(service.richContent);

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <span className="section-badge">Our Services</span>
          <h1 className="service-title">{service.title}</h1>
        </div>
      </section>

      {/* Feature Image */}
      <section className="service-image-section">
        <div className="service-image-container">
          <img src={service.image} alt={service.title} className="service-feature-image" />
        </div>
      </section>

      {/* Content – rich or simple */}
      {isRich ? <RichServiceLayout service={service} /> : <SimpleServiceLayout service={service} />}
    </div>
  );
};

export default ServicePage;
