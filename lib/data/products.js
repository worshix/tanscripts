// @ts-check

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {string} tagline
 * @property {string} description
 * @property {string[]} longDescription
 * @property {string[]} features
 * @property {{label: string, value: string}[]} specifications
 * @property {{base: string, currency: string, note: string}} price
 * @property {{main: string, gallery: string[]}} images
 * @property {{datasheet: string, stepFile: string, manual: string}} downloads
 * @property {string} view3D
 * @property {boolean} isNew
 * @property {boolean} inStock
 * @property {string} warranty
 * @property {string} leadTime
 */

/** @type {Record<string, Product>} */
const products = {
  "nexgen-controller": {
    id: "nexgen-controller",
    name: "NexGen Controller",
    category: "Controllers",
    tagline: "Next-Generation Industrial Control",
    description: "Advanced industrial controller with IoT connectivity and real-time monitoring capabilities.",
    longDescription: [
      "The NexGen Controller represents the pinnacle of industrial control technology. Designed for Industry 4.0 applications, it seamlessly integrates with IoT ecosystems while maintaining the reliability demanded by mission-critical operations.",
      "Featuring a powerful quad-core processor and real-time operating system, the NexGen Controller handles complex control algorithms with exceptional speed and precision. The modular architecture allows for easy expansion and customization to meet your specific application requirements.",
      "With built-in cybersecurity features and encrypted communications, your automation infrastructure remains protected against modern threats. The intuitive web-based interface simplifies configuration and monitoring, reducing deployment time and training costs."
    ],
    features: [
      "Real-time data processing with sub-millisecond latency",
      "IoT connectivity (MQTT, OPC UA, REST API)",
      "Remote monitoring and diagnostics",
      "Modular I/O expansion up to 256 points",
      "Built-in cybersecurity features",
      "Web-based configuration interface",
      "Redundant power input support",
      "Industrial temperature range (-40°C to +70°C)"
    ],
    specifications: [
      { label: "Processor", value: "Quad-core ARM Cortex-A72 @ 1.8GHz" },
      { label: "Memory", value: "4GB DDR4 RAM, 32GB eMMC Storage" },
      { label: "Digital I/O", value: "32 inputs, 32 outputs (expandable)" },
      { label: "Analog I/O", value: "16 inputs, 8 outputs (16-bit)" },
      { label: "Communication", value: "Ethernet, RS-485, CAN, WiFi, Bluetooth" },
      { label: "Power Supply", value: "24VDC (18-32VDC range)" },
      { label: "Dimensions", value: "180 x 120 x 65 mm" },
      { label: "Weight", value: "850g" },
      { label: "Certifications", value: "CE, UL, IEC 61131-2" }
    ],
    price: { base: "2,450", currency: "USD", note: "Volume discounts available" },
    images: { 
      main: "/products/nexgen-controller-main.jpg",
      gallery: ["/products/nexgen-controller-1.jpg", "/products/nexgen-controller-2.jpg", "/products/nexgen-controller-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/nexgen-controller-datasheet.pdf",
      stepFile: "/downloads/nexgen-controller.step",
      manual: "/downloads/nexgen-controller-manual.pdf"
    },
    view3D: "/3d-viewer/nexgen-controller",
    isNew: true,
    inStock: true,
    warranty: "3 Years",
    leadTime: "2-3 weeks"
  },
  "autoplc-system": {
    id: "autoplc-system",
    name: "AutoPLC System",
    category: "Automation",
    tagline: "Modular PLC Excellence",
    description: "Modular PLC system for flexible automation configurations in manufacturing environments.",
    longDescription: [
      "The AutoPLC System delivers enterprise-grade programmable logic control in a flexible, modular package. Whether you're automating a single machine or an entire production line, AutoPLC scales to meet your needs.",
      "Built on industry-standard IEC 61131-3 programming, the AutoPLC supports Ladder Logic, Structured Text, Function Block Diagram, and more. The integrated development environment accelerates programming and debugging, while simulation capabilities let you test before deployment.",
      "With hot-swappable modules and online program changes, the AutoPLC minimizes downtime during maintenance and updates. The robust construction and extensive diagnostics ensure reliable operation in demanding industrial environments."
    ],
    features: [
      "Modular design with hot-swappable modules",
      "IEC 61131-3 compliant programming",
      "Integrated development environment",
      "Online program changes",
      "High-speed motion control option",
      "Safety PLC modules available",
      "EtherNet/IP, PROFINET support",
      "Built-in web server for diagnostics"
    ],
    specifications: [
      { label: "CPU Performance", value: "0.02ms/1K instructions" },
      { label: "Program Memory", value: "8MB user program space" },
      { label: "Max I/O Points", value: "4,096 (distributed)" },
      { label: "Backplane Slots", value: "Up to 16 local, 64 remote" },
      { label: "Communication", value: "EtherNet/IP, PROFINET, Modbus TCP" },
      { label: "Power Supply", value: "24VDC, 120/240VAC options" },
      { label: "Dimensions", value: "Varies by configuration" },
      { label: "Operating Temp", value: "0°C to 55°C" },
      { label: "Certifications", value: "CE, UL, TÜV SIL 3" }
    ],
    price: { base: "3,200", currency: "USD", note: "Base CPU unit, modules sold separately" },
    images: { 
      main: "/products/autoplc-main.jpg",
      gallery: ["/products/autoplc-1.jpg", "/products/autoplc-2.jpg", "/products/autoplc-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/autoplc-datasheet.pdf",
      stepFile: "/downloads/autoplc.step",
      manual: "/downloads/autoplc-manual.pdf"
    },
    view3D: "/3d-viewer/autoplc-system",
    isNew: false,
    inStock: true,
    warranty: "2 Years",
    leadTime: "1-2 weeks"
  },
  "sensorhub-pro": {
    id: "sensorhub-pro",
    name: "SensorHub Pro",
    category: "Sensors",
    tagline: "Unified Sensor Intelligence",
    description: "Multi-sensor integration hub for comprehensive industrial data collection and analysis.",
    longDescription: [
      "SensorHub Pro revolutionizes industrial sensing by providing a unified platform for connecting, managing, and analyzing data from hundreds of sensors. Bridge the gap between OT and IT with seamless data integration.",
      "Supporting over 50 sensor protocols including IO-Link, HART, Modbus, and analog signals, SensorHub Pro eliminates the complexity of multi-vendor sensor deployments. Edge computing capabilities enable real-time analytics and anomaly detection.",
      "The cloud-ready architecture supports major IIoT platforms while maintaining full functionality in air-gapped environments. Advanced visualization and trending tools transform raw sensor data into actionable insights."
    ],
    features: [
      "Multi-protocol support (50+ protocols)",
      "Edge computing with AI/ML capabilities",
      "Real-time data aggregation",
      "Cloud platform integration",
      "Built-in data historian",
      "Anomaly detection algorithms",
      "Secure MQTT/AMQP publishing",
      "RESTful API for custom integration"
    ],
    specifications: [
      { label: "Sensor Channels", value: "128 configurable channels" },
      { label: "Sampling Rate", value: "Up to 100kHz aggregate" },
      { label: "Protocols", value: "IO-Link, HART, Modbus, Analog, Digital" },
      { label: "Edge Processing", value: "ARM Cortex-A53 + FPGA" },
      { label: "Storage", value: "256GB local, expandable" },
      { label: "Connectivity", value: "Dual Gigabit Ethernet, 4G/5G option" },
      { label: "Dimensions", value: "220 x 180 x 80 mm" },
      { label: "Power", value: "24VDC, 45W typical" },
      { label: "Certifications", value: "CE, FCC, ATEX Zone 2" }
    ],
    price: { base: "4,850", currency: "USD", note: "Includes base software license" },
    images: { 
      main: "/products/sensorhub-main.jpg",
      gallery: ["/products/sensorhub-1.jpg", "/products/sensorhub-2.jpg", "/products/sensorhub-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/sensorhub-pro-datasheet.pdf",
      stepFile: "/downloads/sensorhub-pro.step",
      manual: "/downloads/sensorhub-pro-manual.pdf"
    },
    view3D: "/3d-viewer/sensorhub-pro",
    isNew: false,
    inStock: true,
    warranty: "2 Years",
    leadTime: "2-3 weeks"
  },
  "motion-master": {
    id: "motion-master",
    name: "Motion Master 3000",
    category: "Motion Control",
    tagline: "Precision in Motion",
    description: "Precision motion control system for high-speed manufacturing applications.",
    longDescription: [
      "The Motion Master 3000 delivers uncompromising precision for demanding motion control applications. From semiconductor manufacturing to precision machining, it provides the accuracy and speed required for next-generation manufacturing.",
      "Advanced servo algorithms with sub-micron positioning capabilities ensure consistent quality in high-precision applications. The multi-axis synchronization handles complex coordinated motion with ease, supporting up to 32 axes per controller.",
      "Integrated safety functions (STO, SS1, SLS) comply with SIL 3 requirements, protecting personnel and equipment. The Motion Master 3000 is the choice of industry leaders for applications where precision matters."
    ],
    features: [
      "Sub-micron positioning accuracy",
      "Multi-axis synchronization (up to 32 axes)",
      "EtherCAT-based servo communication",
      "Integrated functional safety (SIL 3)",
      "Cam and gear electronic profiling",
      "G-code and CAM file support",
      "High-speed registration inputs",
      "Touch probe interface"
    ],
    specifications: [
      { label: "Positioning Accuracy", value: "±0.1 µm" },
      { label: "Max Axes", value: "32 synchronized axes" },
      { label: "Servo Cycle", value: "62.5 µs" },
      { label: "Interpolation", value: "Linear, circular, spline, NURBS" },
      { label: "Communication", value: "EtherCAT, Ethernet, USB" },
      { label: "Safety", value: "STO, SS1, SS2, SLS, SBC" },
      { label: "Dimensions", value: "280 x 200 x 85 mm" },
      { label: "Power", value: "24VDC logic, 480VAC drives" },
      { label: "Certifications", value: "CE, UL, TÜV SIL 3, PLe" }
    ],
    price: { base: "8,900", currency: "USD", note: "Controller only, drives sold separately" },
    images: { 
      main: "/products/motion-master-main.jpg",
      gallery: ["/products/motion-master-1.jpg", "/products/motion-master-2.jpg", "/products/motion-master-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/motion-master-datasheet.pdf",
      stepFile: "/downloads/motion-master.step",
      manual: "/downloads/motion-master-manual.pdf"
    },
    view3D: "/3d-viewer/motion-master",
    isNew: true,
    inStock: true,
    warranty: "3 Years",
    leadTime: "3-4 weeks"
  },
  "power-guard": {
    id: "power-guard",
    name: "PowerGuard UPS",
    category: "Power Systems",
    tagline: "Uninterrupted Power Protection",
    description: "Industrial-grade uninterruptible power supply with intelligent monitoring.",
    longDescription: [
      "PowerGuard UPS provides mission-critical power protection for industrial automation systems. When power quality matters, PowerGuard delivers clean, uninterrupted power that keeps your operations running.",
      "True online double-conversion topology ensures zero transfer time during power events. The modular battery design with hot-swappable packs enables maintenance without shutting down protected equipment.",
      "Intelligent monitoring via SNMP, Modbus, and cloud platforms provides visibility into power quality and UPS health. Predictive analytics alert you to potential issues before they impact operations."
    ],
    features: [
      "True online double-conversion",
      "Zero transfer time",
      "Hot-swappable battery packs",
      "Intelligent power monitoring",
      "SNMP and Modbus interface",
      "Cloud-based management",
      "Surge and spike protection",
      "Frequency conversion capability"
    ],
    specifications: [
      { label: "Capacity", value: "10kVA / 9kW" },
      { label: "Topology", value: "Online double-conversion" },
      { label: "Input Voltage", value: "380-480VAC 3-phase" },
      { label: "Output Voltage", value: "380-480VAC ±1%" },
      { label: "Battery Runtime", value: "15 min standard, extendable" },
      { label: "Efficiency", value: "96% in double-conversion" },
      { label: "Dimensions", value: "600 x 800 x 1200 mm" },
      { label: "Weight", value: "185 kg with batteries" },
      { label: "Certifications", value: "CE, UL 1778, IEC 62040" }
    ],
    price: { base: "12,500", currency: "USD", note: "Includes standard battery pack" },
    images: { 
      main: "/products/powerguard-main.jpg",
      gallery: ["/products/powerguard-1.jpg", "/products/powerguard-2.jpg", "/products/powerguard-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/powerguard-datasheet.pdf",
      stepFile: "/downloads/powerguard.step",
      manual: "/downloads/powerguard-manual.pdf"
    },
    view3D: "/3d-viewer/power-guard",
    isNew: false,
    inStock: true,
    warranty: "5 Years (2 Years batteries)",
    leadTime: "1-2 weeks"
  },
  "data-logger": {
    id: "data-logger",
    name: "DataLogger X200",
    category: "Data Acquisition",
    tagline: "Capture Every Detail",
    description: "High-performance data acquisition system for industrial monitoring.",
    longDescription: [
      "The DataLogger X200 captures and records industrial process data with exceptional fidelity. From quality assurance to regulatory compliance, it provides the data foundation for informed decision-making.",
      "With support for over 100 input channels and sampling rates up to 1MHz, the DataLogger X200 handles everything from slow environmental monitoring to high-speed transient capture. Flexible triggering options ensure you capture exactly the data you need.",
      "Built-in analysis tools including FFT, statistical analysis, and custom calculations process data in real-time. Export data to standard formats or integrate directly with enterprise systems via the comprehensive API."
    ],
    features: [
      "100+ input channels",
      "Up to 1MHz sampling rate",
      "Multiple signal conditioning options",
      "Real-time analysis and FFT",
      "Flexible trigger configurations",
      "Local and networked storage",
      "Web-based data access",
      "Comprehensive API integration"
    ],
    specifications: [
      { label: "Channels", value: "Up to 128 analog, 64 digital" },
      { label: "Sampling Rate", value: "1MHz per channel aggregate" },
      { label: "Resolution", value: "24-bit ADC" },
      { label: "Accuracy", value: "±0.02% of reading" },
      { label: "Storage", value: "1TB SSD, NAS support" },
      { label: "Connectivity", value: "Gigabit Ethernet, USB 3.0" },
      { label: "Display", value: "7\" touchscreen" },
      { label: "Power", value: "100-240VAC, 50W" },
      { label: "Certifications", value: "CE, FCC, IEC 61010" }
    ],
    price: { base: "6,750", currency: "USD", note: "Base unit with 32 channels" },
    images: { 
      main: "/products/datalogger-main.jpg",
      gallery: ["/products/datalogger-1.jpg", "/products/datalogger-2.jpg", "/products/datalogger-3.jpg"]
    },
    downloads: {
      datasheet: "/downloads/datalogger-x200-datasheet.pdf",
      stepFile: "/downloads/datalogger-x200.step",
      manual: "/downloads/datalogger-x200-manual.pdf"
    },
    view3D: "/3d-viewer/data-logger",
    isNew: false,
    inStock: true,
    warranty: "2 Years",
    leadTime: "1-2 weeks"
  }
};

const productIds = Object.keys(products);

module.exports = { products, productIds };
