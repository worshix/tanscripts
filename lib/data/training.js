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
 * @property {{name: string, description: string, address: string}} [partner]
 * @property {string[]} [addOns]
 */

/** @type {Record<string, Course>} */
const courses = {
  plc: {
    title: "PLC Certification Training",
    duration: "10 Days",
    level: "Beginner to Intermediate",
    price: "450",
    description:
      "Comprehensive PLC programming course (ZPLC 1101) covering ladder logic, hardware and panel wiring, HMI design, SCADA integration, industrial networking, and VFD control with PLC.",
    overview:
      "This intensive 10-day course (Course Code ZPLC 1101 - Programmable Logic Controllers in Industrial Automation, Level 1) provides a comprehensive introduction to Programmable Logic Controllers (PLCs) and their applications in industrial automation. Participants gain hands-on experience with real PLC training kits, wiring and panel building, ladder logic programming, HMI/SCADA integration, industrial networking, and VFD (Variable Frequency Drive) control with PLC, culminating in a capstone build-and-test project.",
    objectives: [
      "Explain PLC concepts, architectures, I/O types, and industrial use cases",
      "Interpret datasheets and wiring diagrams to design PLC hardware layouts",
      "Implement PLC programs using ladder logic (contacts, coils, timers, counters, comparators)",
      "Design HMI screens, tags, alarms, and trends integrated with a PLC",
      "Configure industrial networking, remote access, and SCADA interfaces",
      "Control motor speed using VFDs integrated with PLC logic",
      "Perform commissioning, diagnostics, and fault-handling on live systems",
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
          "Introduction to PLCs: evolution, use cases, advantages vs. relays/microcontrollers/DCS",
          "PLC architecture (CPU, I/O, backplane, comms, power)",
          "PLC selection criteria",
          "Safety basics (LOTO, isolation, earthing)",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Reading datasheets and wiring practices, protection, grounding",
          "I/O pin configuration (DI/DO/AI/AO), sourcing/sinking",
          "Sensors and actuators",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Panel layout and supporting utilities (PSUs, relays, contactors, terminals, fuses)",
          "Hands-on panel building and hardware check-offs",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "IEC 61131-3 overview",
          "Ladder logic core instructions (NO/NC, coils, set/reset)",
          "Timers, counters, edge detection",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Numbering, scaling, and debouncing",
          "Good programming practices (tagging, comments, modularity)",
          "Intermediate ladder logic exercises",
        ],
      },
      {
        day: "Day 6",
        topics: [
          "Sequencers, interlocks, and state machines",
          "Analog handling (scaling, alarms)",
          "VFD (Variable Frequency Drive) control with PLC",
        ],
      },
      {
        day: "Day 7",
        topics: [
          "HMI design (screens, tags, alarms, trends)",
          "Alarm philosophy and basic operator UX",
          "PLC-HMI communication setup",
        ],
      },
      {
        day: "Day 8",
        topics: [
          "Industrial networking (Ethernet/IP, PROFINET, Modbus TCP)",
          "VPN and secure remote access utilities",
          "Web services, REST/MQTT basics",
          "SCADA architecture, tags, historians, basic scripting",
        ],
      },
      {
        day: "Day 9",
        topics: [
          "Site surveys, I/O lists, FAT/SAT checklists",
          "Commissioning workflow",
          "Diagnostics with status bits and trend traces",
          "Error handling, fail-safes, watchdogs, documentation",
        ],
      },
      {
        day: "Day 10",
        topics: [
          "Capstone integration: hardware wiring, ladder program, HMI, and SCADA tag exposure",
          "Presentation, peer review, and viva",
        ],
      },
    ],
    includes: [
      "Course materials and workbook",
      "Hands-on lab sessions with PLC training kits (Mitsubishi, Delta, Siemens or equivalent)",
      "VFD control with PLC module",
      "Zimtech Engineering Certificate of Competence - PLC and Industrial Automation",
      "Post-course support",
    ],
    addOns: [
      "VFD integration",
      "Motion control",
      "Safety PLCs",
      "Advanced SCADA scripting",
    ],
    partner: {
      name: "Speciss College",
      description:
        "This course is delivered in partnership with Speciss College. All training sessions take place at their facilities, giving participants access to well-equipped labs in a professional learning environment.",
      address: "Corner Herbert Chitepo Street & 3rd Street, Harare, Zimbabwe",
    },
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
