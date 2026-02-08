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
  "bridging-the-gap-zimbabwe-education": {
    title: "Bridging the Gap: Why Zimbabwe Needs Practical Learning Tools",
    category: "Research",
    date: "February 8, 2026",
    readTime: "10 min read",
    author: "Zimtech Research Team",
    featuredImage: "/blog/zimbabwe-education.jpg",
    content: [
      "The Zimbabwean education system has long been recognized for producing students with strong theoretical foundations. However, a growing concern among educators, industry professionals, and students themselves is the significant gap between theoretical knowledge and practical application.",
      "The Theory-Heavy Curriculum: Zimbabwe's education system, particularly in technical and engineering fields, places heavy emphasis on theoretical learning. Students spend countless hours memorizing formulas, understanding concepts, and passing written examinations. While this builds a solid foundation, it often leaves graduates unprepared for the hands-on demands of the modern workplace.",
      "The Challenge for Technical Students: In fields like electronics, automation, and embedded systems, the gap between theory and practice is especially pronounced. Students can explain circuit theory perfectly on paper but struggle when faced with actual components and real-world troubleshooting scenarios. This disconnect affects their confidence and employability.",
      "Industry Feedback: Employers consistently report that while Zimbabwean graduates demonstrate excellent theoretical understanding, they require extensive on-the-job training before becoming productive. This represents a significant investment for companies and a frustrating transition period for new graduates.",
      "Our Solution: The Digital Book: Recognizing this challenge, we are developing an interactive digital learning platform designed specifically for Zimbabwean students. This digital book goes beyond traditional textbooks by incorporating practical simulations, virtual labs, and hands-on exercises that complement theoretical learning.",
      "How It Works: The digital book presents concepts in a learn-by-doing format. After understanding a theoretical concept, students immediately apply it through interactive simulations. They can experiment with virtual circuits, program simulated controllers, and see the real-world implications of their theoretical knowledge.",
      "Bridging Theory and Practice: Each module in the digital book is structured to connect classroom learning with practical application. Students don't just learn what a PLC does—they program one. They don't just memorize sensor specifications—they integrate them into working systems.",
      "Accessible Learning: Understanding the infrastructure challenges in Zimbabwe, the digital book is designed to work offline once downloaded. It requires minimal hardware and can run on basic computers and tablets, making it accessible to students across the country.",
      "The Path Forward: By equipping Zimbabwean students with practical skills alongside their theoretical knowledge, we aim to produce graduates who are job-ready from day one. This is our contribution to strengthening Zimbabwe's technical workforce and supporting the nation's industrial development.",
      "Stay tuned for the launch of our digital learning platform. Together, we can bridge the gap between knowledge and capability.",
    ],
  },
};

const blogSlugs = Object.keys(posts);

module.exports = { posts, blogSlugs };
