# Case Studies Structure

```js
// @ts-check

/**
 * @typedef {Object} CaseStudy
 * @property {string} title
 * @property {string} client
 * @property {string} industry
 * @property {string} result
 * @property {string} featuredImage
 * @property {string} description
 * @property {string[]} services
 * @property {string[]} challenge
 * @property {string[]} solution
 * @property {string[]} implementation
 * @property {{metric: string, value: string}[]} results
 * @property {{quote: string, author: string, role: string}} [testimonial]
 */

/** @type {Record<string, CaseStudy>} */
const caseStudies = {
  "automating-assembly-line-case-study": {
    title: "Automotive Parts Assembly Line Automation",
    client: "Major Automotive Manufacturer",
    industry: "Automotive",
    result: "40% increase in production efficiency",
    featuredImage: "/case-studies/assembly-line.jpg",
    description: "Complete automation of assembly line operations with PLC-controlled stations, robotic systems, and machine vision quality inspection.",
    services: ["Industrial Automation", "System Integration", "Quality Control"],
    challenge: [
      "The client's existing assembly line relied heavily on manual processes, resulting in inconsistent product quality and high labor costs.",
      "Production throughput was limited to 500 units per hour, falling short of growing market demand.",
      "Quality inspection was performed manually at the end of the line, leading to a 3.5% defect rate and significant rework costs.",
      "The aging control systems were becoming difficult to maintain and lacked connectivity for modern monitoring and analytics."
    ],
    solution: [
      "Designed a comprehensive automation solution featuring 12 PLC-controlled assembly stations with precision servo motion control.",
      "Implemented collaborative robotic systems for pick-and-place operations, reducing manual handling by 80%.",
      "Deployed machine vision quality inspection at 4 critical points throughout the assembly process for real-time defect detection.",
      "Installed a plant-wide SCADA system for real-time monitoring, data collection, and predictive maintenance analytics."
    ],
    implementation: [
      "Phase 1 (Months 1-3): Detailed engineering, equipment procurement, and off-site integration testing.",
      "Phase 2 (Months 4-5): Installation of new control systems during planned shutdown, parallel operation with legacy systems.",
      "Phase 3 (Months 6-7): Deployment of robotic stations and vision inspection systems with operator training.",
      "Phase 4 (Month 8): Full system integration, SCADA deployment, and performance optimization."
    ],
    results: [
      { metric: "Production Efficiency", value: "+40%" },
      { metric: "Defect Rate Reduction", value: "-75%" },
      { metric: "Labor Cost Savings", value: "$1.2M/year" },
      { metric: "ROI Timeline", value: "18 months" },
    ],
    testimonial: {
      quote: "Zimtech Engineering delivered beyond our expectations. The automation solution has transformed our production capabilities and positioned us for future growth.",
      author: "James Mitchell",
      role: "VP of Manufacturing Operations"
    }
  },
  "pharmaceutical-packaging": {
    title: "Pharmaceutical Packaging System Upgrade",
    client: "Leading Pharmaceutical Company",
    industry: "Pharmaceutical",
    result: "99.9% packaging accuracy achieved",
    featuredImage: "/case-studies/pharma-packaging.jpg",
    description: "Modernization of legacy packaging lines with new PLCs, servo-driven systems, and comprehensive validation documentation.",
    services: ["Industrial Automation", "Electrical Engineering", "Compliance"],
    challenge: [
      "Legacy packaging equipment was approaching end-of-life with increasing maintenance costs and downtime.",
      "Regulatory compliance requirements demanded full traceability and electronic batch records.",
      "Packaging accuracy issues were causing product recalls and significant financial losses.",
      "The existing systems could not support new product formats required for market expansion."
    ],
    solution: [
      "Complete control system upgrade with redundant PLCs and servo-driven motion control for precise product handling.",
      "Implementation of 21 CFR Part 11 compliant electronic batch record system with full audit trail.",
      "Vision-based inspection systems for 100% verification of labels, codes, and package integrity.",
      "Modular packaging stations designed to accommodate multiple product formats with quick changeover."
    ],
    implementation: [
      "Phase 1: Detailed design qualification (DQ) and validation master plan development.",
      "Phase 2: Factory acceptance testing (FAT) at equipment vendor facilities.",
      "Phase 3: On-site installation during planned maintenance window with IQ/OQ protocols.",
      "Phase 4: Performance qualification (PQ) and operator training program."
    ],
    results: [
      { metric: "Packaging Accuracy", value: "99.9%" },
      { metric: "Changeover Time", value: "-60%" },
      { metric: "Regulatory Compliance", value: "100%" },
      { metric: "OEE Improvement", value: "+25%" },
    ],
    testimonial: {
      quote: "The new packaging system has eliminated our compliance concerns and dramatically improved our operational efficiency.",
      author: "Dr. Sarah Chen",
      role: "Director of Manufacturing"
    }
  },
  "food-processing-scada": {
    title: "Food Processing SCADA Implementation",
    client: "Regional Food Processor",
    industry: "Food & Beverage",
    result: "30% reduction in downtime",
    featuredImage: "/case-studies/food-scada.jpg",
    description: "Design and implementation of plant-wide SCADA system for real-time monitoring, data collection, and predictive maintenance.",
    services: ["SCADA Systems", "Data Acquisition", "System Integration"],
    challenge: [
      "Multiple disconnected control systems made it difficult to get a unified view of plant operations.",
      "Unplanned downtime was costing the facility an estimated $50,000 per hour in lost production.",
      "Manual data collection for quality and regulatory reporting was time-consuming and error-prone.",
      "Energy costs were rising with no visibility into consumption patterns or optimization opportunities."
    ],
    solution: [
      "Deployed a modern SCADA platform integrating all existing PLCs and controllers across the facility.",
      "Implemented real-time OEE monitoring with automatic downtime tracking and root cause analysis.",
      "Integrated quality data collection with automatic report generation for regulatory compliance.",
      "Deployed energy monitoring and analytics for identification of efficiency opportunities."
    ],
    implementation: [
      "Phase 1: Network infrastructure upgrade and communication protocol standardization.",
      "Phase 2: SCADA server deployment and historian configuration.",
      "Phase 3: HMI development and operator interface deployment across facility.",
      "Phase 4: Advanced analytics, reporting, and mobile access implementation."
    ],
    results: [
      { metric: "Downtime Reduction", value: "-30%" },
      { metric: "Energy Savings", value: "15%" },
      { metric: "Reporting Time", value: "-80%" },
      { metric: "Annual Savings", value: "$800K" },
    ]
  },
  "warehouse-automation": {
    title: "Warehouse Automation & Conveyor System",
    client: "E-commerce Fulfillment Center",
    industry: "Logistics",
    result: "3x increase in throughput",
    featuredImage: "/case-studies/warehouse.jpg",
    description: "Complete warehouse automation solution including conveyor systems, sortation, and warehouse management system integration.",
    services: ["Industrial Automation", "Mechanical Design", "WMS Integration"],
    challenge: [
      "Manual picking and packing processes could not keep up with rapid e-commerce growth.",
      "Order fulfillment accuracy was below industry standards at 97.5%.",
      "Peak season demand required expensive temporary labor that was difficult to train.",
      "Limited warehouse space required maximizing vertical storage and minimizing aisle space."
    ],
    solution: [
      "Designed and installed 2.5km of conveyor systems with automated sortation for 50+ shipping lanes.",
      "Implemented goods-to-person picking stations with automated storage and retrieval system (AS/RS).",
      "Integrated warehouse management system (WMS) with real-time inventory visibility and order optimization.",
      "Deployed voice-directed picking for remaining manual stations with 99.9% accuracy."
    ],
    implementation: [
      "Phase 1: Detailed warehouse flow analysis and system design.",
      "Phase 2: AS/RS installation during facility expansion.",
      "Phase 3: Conveyor system installation with phased cutover by zone.",
      "Phase 4: WMS integration and workflow optimization."
    ],
    results: [
      { metric: "Throughput Increase", value: "3x" },
      { metric: "Order Accuracy", value: "99.97%" },
      { metric: "Labor Reduction", value: "-45%" },
      { metric: "Space Utilization", value: "+60%" },
    ],
    testimonial: {
      quote: "This automation investment was essential for our growth. We've more than tripled our capacity in the same footprint.",
      author: "Michael Torres",
      role: "VP of Operations"
    }
  },
  "water-treatment-upgrade": {
    title: "Water Treatment Plant Modernization",
    client: "Municipal Water Authority",
    industry: "Utilities",
    result: "25% energy savings",
    featuredImage: "/case-studies/water-treatment.jpg",
    description: "Control system upgrade with new PLCs, VFDs, and SCADA for improved process control and energy optimization.",
    services: ["Industrial Automation", "SCADA Systems", "Energy Optimization"],
    challenge: [
      "Aging control systems were obsolete with no available spare parts or vendor support.",
      "Energy costs represented 40% of the plant's operating budget with no optimization capabilities.",
      "Operators relied on manual rounds and local gauges with no centralized visibility.",
      "Regulatory reporting required extensive manual data compilation."
    ],
    solution: [
      "Complete PLC replacement program with standardized modern controllers and redundant architecture.",
      "Variable frequency drives (VFDs) on all major pumps and blowers with automatic optimization.",
      "New SCADA system with real-time process visualization, alarming, and historian.",
      "Automated regulatory reporting with direct integration to state environmental database."
    ],
    implementation: [
      "Phase 1: Pilot installation on single treatment train to validate approach.",
      "Phase 2: Phased PLC replacements during planned maintenance windows.",
      "Phase 3: VFD installations with temporary bypass provisions.",
      "Phase 4: SCADA deployment and operator training program."
    ],
    results: [
      { metric: "Energy Reduction", value: "-25%" },
      { metric: "Operator Efficiency", value: "+35%" },
      { metric: "Reporting Time", value: "-90%" },
      { metric: "Annual Savings", value: "$450K" },
    ]
  },
  "mining-remote-monitoring": {
    title: "Remote Monitoring for Mining Operations",
    client: "Mining Corporation",
    industry: "Mining",
    result: "24/7 remote visibility achieved",
    featuredImage: "/case-studies/mining.jpg",
    description: "Implementation of IoT-based remote monitoring system for equipment health, production metrics, and safety compliance.",
    services: ["IoT Solutions", "Remote Monitoring", "Safety Systems"],
    challenge: [
      "Remote mine sites had limited connectivity and no real-time visibility from headquarters.",
      "Equipment failures resulted in expensive emergency repairs and production delays.",
      "Safety monitoring required dedicated personnel at each site around the clock.",
      "Production reporting was manual and typically delayed by 24-48 hours."
    ],
    solution: [
      "Deployed ruggedized IoT gateways with satellite connectivity for reliable data transmission.",
      "Installed vibration, temperature, and performance sensors on critical equipment.",
      "Implemented centralized monitoring center with real-time dashboards and automated alerts.",
      "Developed predictive maintenance algorithms using machine learning on historical data."
    ],
    implementation: [
      "Phase 1: Pilot deployment at single mine site to validate technology and connectivity.",
      "Phase 2: Rollout to remaining sites with standardized sensor packages.",
      "Phase 3: Central monitoring center establishment and staffing.",
      "Phase 4: Predictive analytics development and refinement."
    ],
    results: [
      { metric: "Equipment Uptime", value: "+20%" },
      { metric: "Emergency Repairs", value: "-60%" },
      { metric: "Real-time Visibility", value: "24/7" },
      { metric: "Safety Incidents", value: "-40%" },
    ],
    testimonial: {
      quote: "Having real-time visibility across all our sites has fundamentally changed how we operate and make decisions.",
      author: "Robert Anderson",
      role: "Chief Operating Officer"
    }
  }
};

const caseStudySlugs = Object.keys(caseStudies);

module.exports = { caseStudies, caseStudySlugs };

```