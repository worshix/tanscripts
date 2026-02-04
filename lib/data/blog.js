// @ts-check

/**
 * @typedef {Object} BlogPost
 * @property {string} title
 * @property {string} category
 * @property {string} date
 * @property {string} readTime
 * @property {string} author
 * @property {string} featuredImage
 * @property {string[]} content
 */

/** @type {Record<string, BlogPost>} */
const posts = {
  "automating-assembly-line-case-study": {
    title: "Automating Assembly Line for Major Manufacturer",
    category: "Case Study",
    date: "January 28, 2026",
    readTime: "8 min read",
    author: "Engineering Team",
    featuredImage: "/blog/assembly-line-automation.jpg",
    content: [
      "In this case study, we explore how Zimtech Engineering helped a leading automotive parts manufacturer transform their assembly line operations through smart automation solutions.",
      "The Challenge: Our client was facing significant challenges with their existing assembly line. Manual processes led to inconsistent quality, high labor costs, and limited throughput. They needed a solution that could increase production capacity by at least 30% while maintaining strict quality standards.",
      "Our Approach: After conducting a thorough assessment of their operations, our team designed a comprehensive automation solution that included PLC-controlled assembly stations, robotic pick-and-place systems, and an integrated quality inspection system using machine vision.",
      "The Implementation: The project was executed in phases to minimize disruption to ongoing operations. Phase 1 focused on automating the most labor-intensive stations, while Phase 2 integrated the quality inspection system. The final phase connected all systems to a central SCADA system for real-time monitoring and control.",
      "The Results: The automation solution delivered impressive results. Production efficiency increased by 40%, exceeding the initial target. Defect rates dropped by 75% thanks to the automated quality inspection system. The client achieved ROI within 18 months of full implementation.",
      "This project demonstrates our commitment to delivering automation solutions that create real, measurable value for our clients. Contact us to learn how we can help transform your operations.",
    ],
  },
  "introducing-the-nexgen-controller": {
    title: "Introducing the NexGen Controller v2.0",
    category: "Product Update",
    date: "January 20, 2026",
    readTime: "5 min read",
    author: "Product Team",
    featuredImage: "/blog/nexgen-controller-v2.jpg",
    content: [
      "We are excited to announce the release of the NexGen Controller v2.0, the latest evolution of our flagship industrial controller platform. This major update brings significant improvements in performance, connectivity, and ease of use.",
      "Enhanced Processing Power: The NexGen Controller v2.0 features a new quad-core processor that delivers 3x faster execution speeds compared to the previous version. This enables more complex control algorithms and faster response times for demanding applications.",
      "Expanded I/O Capabilities: We have doubled the I/O capacity with support for up to 256 digital I/O points and 64 analog channels. The modular design allows easy expansion as your needs grow.",
      "Advanced Connectivity: Built-in support for Ethernet/IP, Modbus TCP, MQTT, and OPC UA enables seamless integration with enterprise systems and cloud platforms. The new built-in WiFi and Bluetooth modules provide flexible wireless connectivity options.",
      "Improved User Experience: The redesigned web-based configuration interface makes setup and maintenance easier than ever. Real-time diagnostics and predictive maintenance alerts help minimize downtime.",
      "The NexGen Controller v2.0 is available now. Contact our sales team to learn more about upgrade options and volume pricing.",
    ],
  },
  "trends-in-industrial-automation-2026": {
    title: "Trends in Industrial Automation for 2026",
    category: "Industry News",
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Industry Insights Team",
    featuredImage: "/blog/automation-trends-2026.jpg",
    content: [
      "As we move further into 2026, several key trends are shaping the future of industrial automation. Understanding these trends is essential for manufacturers looking to maintain a competitive edge.",
      "AI-Powered Predictive Maintenance: Artificial intelligence is revolutionizing equipment maintenance. AI algorithms can now predict failures before they occur with unprecedented accuracy, reducing unplanned downtime by up to 50%.",
      "Edge Computing: Processing data at the edge, closer to where it is generated, is becoming essential for real-time decision-making. Edge computing reduces latency, enhances security, and enables autonomous operations even when cloud connectivity is limited.",
      "Collaborative Robots (Cobots): The cobot market continues to grow as these robots become more sophisticated and affordable. Cobots are enabling new automation possibilities in environments where traditional industrial robots are not practical.",
      "Digital Twins: Creating virtual replicas of physical assets and processes allows for simulation, optimization, and predictive analytics. Digital twins are becoming a standard tool for planning and optimizing automation systems.",
      "Sustainability and Energy Efficiency: Environmental concerns are driving demand for automation solutions that reduce energy consumption and waste. Smart energy management and sustainable manufacturing practices are no longer optional.",
      "Stay ahead of these trends by partnering with Zimtech Engineering. Our team can help you implement cutting-edge automation solutions that position your operations for success.",
    ],
  },
};

const blogSlugs = Object.keys(posts);

module.exports = { posts, blogSlugs };
