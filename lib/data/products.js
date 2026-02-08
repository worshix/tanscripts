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
  "lora-based-monitoring": {
    id: "lora-based-monitoring",
    name: "LoRA Based Monitoring System",
    category: "Controllers",
    tagline: "Advanced LoRA Technology for Industrial Monitoring",
    description: "The LoRA Based Monitoring System is a cutting-edge solution designed to provide reliable and long-range wireless communication for industrial monitoring applications.",
    longDescription: [
      "The LoRA Based Monitoring System represents the pinnacle of industrial monitoring technology. Utilizing LoRA technology, this system enables seamless data transmission over distances of up to 15 kilometers in rural areas and 5 kilometers in urban environments.",
      "Designed for Industry 4.0 applications, it seamlessly integrates with IoT ecosystems while maintaining the reliability demanded by mission-critical operations. The system is ideal for remote monitoring of assets and processes.",
      "With built-in cybersecurity features and encrypted communications, your automation infrastructure remains protected against modern threats. The intuitive web-based interface simplifies configuration and monitoring, reducing deployment time and training costs."
    ],
    features: [
      "Real-time data processing with sub-millisecond latency",
      "Long-range LoRA connectivity (up to 15km)",
      "Remote monitoring and diagnostics",
      "Low power consumption for extended battery life",
      "Built-in cybersecurity features",
      "Web-based configuration interface",
      "Redundant power input support",
      "Industrial temperature range (-40°C to +70°C)"
    ],
    specifications: [
      { label: "Processor", value: "Quad-core ARM Cortex-A72 @ 1.8GHz" },
      { label: "Memory", value: "4GB DDR4 RAM, 32GB eMMC Storage" },
      { label: "LoRA Range", value: "Up to 15km (rural), 5km (urban)" },
      { label: "Frequency", value: "868MHz / 915MHz (region dependent)" },
      { label: "Communication", value: "LoRA, Ethernet, RS-485, WiFi" },
      { label: "Power Supply", value: "24VDC (18-32VDC range)" },
      { label: "Dimensions", value: "180 x 120 x 65 mm" },
      { label: "Weight", value: "850g" },
      { label: "Certifications", value: "CE, UL, IEC 61131-2" }
    ],
    price: { base: "1,200", currency: "USD", note: "Volume discounts available" },
    images: { 
      main: "/images/gateway.png",
      gallery: ["/images/endnode.png", "/images/gateway.png", "/images/endnode_pcb.png"]
    },
    downloads: {
      datasheet: "/downloads/lora-monitoring-datasheet.pdf",
      stepFile: "/downloads/lora-monitoring.step",
      manual: "/downloads/lora-monitoring-manual.pdf"
    },
    view3D: "/3d-viewer/lora-based-monitoring",
    isNew: true,
    inStock: true,
    warranty: "3 Years",
    leadTime: "2-3 weeks"
  }
};

const productIds = Object.keys(products);

module.exports = { products, productIds };
