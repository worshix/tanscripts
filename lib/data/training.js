// @ts-check

/**
 * @typedef {Object} Course
 * @property {string} title
 * @property {string} duration
 * @property {string} level
 * @property {string} price
 * @property {string} description
 * @property {string} overview
 * @property {string[]} objectives
 * @property {string[]} prerequisites
 * @property {{day: string, topics: string[]}[]} outline
 * @property {string[]} includes
 */

/** @type {Record<string, Course>} */
const courses = {
  plc: {
    title: "PLC Training",
    duration: "5 Days",
    level: "Beginner to Advanced",
    price: "Contact for pricing",
    description:
      "Comprehensive PLC programming course covering ladder logic, structured text, and industrial communication protocols.",
    overview:
      "This intensive 5-day course provides a comprehensive introduction to Programmable Logic Controllers (PLCs) and their applications in industrial automation. Participants will gain hands-on experience with real PLCs and learn to design, program, and troubleshoot automation systems.",
    objectives: [
      "Understand PLC architecture and components",
      "Program PLCs using ladder logic and structured text",
      "Design and implement control systems",
      "Configure HMI interfaces",
      "Troubleshoot common PLC issues",
      "Work with industrial communication protocols",
    ],
    prerequisites: [
      "Basic understanding of electrical circuits",
      "Familiarity with computer operations",
      "No prior programming experience required",
    ],
    outline: [
      {
        day: "Day 1",
        topics: [
          "Introduction to PLCs and automation",
          "PLC hardware components",
          "I/O configuration",
          "Basic ladder logic concepts",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Advanced ladder logic programming",
          "Timers and counters",
          "Data manipulation",
          "Hands-on exercises",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Structured text programming",
          "Function blocks",
          "Program organization",
          "Practical projects",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "HMI design and integration",
          "Communication protocols (Modbus, Ethernet/IP)",
          "Network configuration",
          "System integration",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Troubleshooting techniques",
          "Maintenance best practices",
          "Final project",
          "Certification exam",
        ],
      },
    ],
    includes: [
      "Course materials and workbook",
      "Hands-on lab sessions",
      "Certificate of completion",
      "Lunch and refreshments",
      "Post-course support",
    ],
  },
  "embedded-systems": {
    title: "Embedded Systems Training",
    duration: "10 Days",
    level: "Intermediate",
    price: "Contact for pricing",
    description:
      "In-depth training on embedded system design, microcontroller programming, and IoT device development.",
    overview:
      "This comprehensive 10-day course covers all aspects of embedded systems development, from microcontroller programming to IoT connectivity. Participants will work with real hardware and develop practical projects throughout the course.",
    objectives: [
      "Understand embedded system architecture",
      "Program microcontrollers in C/C++",
      "Work with RTOS concepts",
      "Integrate sensors and actuators",
      "Implement communication protocols",
      "Develop IoT-connected devices",
    ],
    prerequisites: [
      "Basic programming knowledge (C preferred)",
      "Understanding of electronics fundamentals",
      "Familiarity with digital logic",
    ],
    outline: [
      {
        day: "Days 1-2",
        topics: [
          "Embedded systems fundamentals",
          "Microcontroller architecture",
          "Development environment setup",
          "Basic I/O programming",
        ],
      },
      {
        day: "Days 3-4",
        topics: [
          "Advanced C programming for embedded",
          "Interrupts and timers",
          "Memory management",
          "Debugging techniques",
        ],
      },
      {
        day: "Days 5-6",
        topics: [
          "Communication protocols (I2C, SPI, UART)",
          "Sensor integration",
          "ADC/DAC operations",
          "Motor control",
        ],
      },
      {
        day: "Days 7-8",
        topics: [
          "RTOS concepts",
          "Task management",
          "Inter-task communication",
          "Real-time applications",
        ],
      },
      {
        day: "Days 9-10",
        topics: [
          "IoT connectivity (WiFi, Bluetooth)",
          "Cloud integration",
          "Final project development",
          "Certification exam",
        ],
      },
    ],
    includes: [
      "Development kit to keep",
      "Course materials and code samples",
      "Hands-on lab sessions",
      "Certificate of completion",
      "Lunch and refreshments",
    ],
  },
  "mechanical-design-automation": {
    title: "Mechanical Design for Industrial Automation",
    duration: "5 Days",
    level: "Intermediate",
    price: "Contact for pricing",
    description:
      "Learn mechanical design principles for automation systems, including CAD tools and manufacturing considerations.",
    overview:
      "This 5-day course provides essential mechanical design skills for industrial automation applications. Participants will learn to use professional CAD software and understand design considerations for manufacturing and assembly.",
    objectives: [
      "Master CAD software fundamentals",
      "Design machine components",
      "Understand material selection",
      "Apply design for manufacturing principles",
      "Create assembly drawings",
      "Integrate mechanical and automation systems",
    ],
    prerequisites: [
      "Basic understanding of mechanical concepts",
      "Computer literacy",
      "No prior CAD experience required",
    ],
    outline: [
      {
        day: "Day 1",
        topics: [
          "Introduction to CAD software",
          "2D sketching fundamentals",
          "Basic 3D modeling",
          "Part design workflow",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Advanced 3D modeling",
          "Feature-based design",
          "Parametric modeling",
          "Design intent",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Assembly design",
          "Constraints and mates",
          "Motion analysis",
          "Interference detection",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "Engineering drawings",
          "GD&T basics",
          "Bill of materials",
          "Design for manufacturing",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Automation-specific design",
          "Actuator integration",
          "Sensor mounting",
          "Final project",
        ],
      },
    ],
    includes: [
      "CAD software license (student version)",
      "Course materials and templates",
      "Hands-on lab sessions",
      "Certificate of completion",
      "Lunch and refreshments",
    ],
  },
};

const courseSlugs = Object.keys(courses);

module.exports = { courses, courseSlugs };
