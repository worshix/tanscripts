/**
 * Site-wide SEO and metadata configuration
 * Central source of truth for all SEO-related settings
 */

export const siteConfig = {
  // Basic site info
  name: "Zimtech Engineering",
  shortName: "Zimtech",
  tagline: "Engineering Excellence",
  description:
    "Zimtech Engineering delivers cutting-edge solutions for industrial automation, embedded systems, mechanical design, solar installations, and professional training services in Zimbabwe.",
  
  // URLs
  url: "https://zimtechengineering.co.zw",
  ogImage: "/images/og-image.jpg",
  twitterImage: "/images/twitter-image.jpg",
  logo: "/images/logo.png",
  
  // Location
  locale: "en_ZW",
  language: "en",
  country: "Zimbabwe",
  
  // Company contact (duplicated from contact.ts for SEO)
  contact: {
    email: "info@zimtechengineering.co.zw",
    phone: "+263 71 366 4345",
    address: "P. O. Box BE 277, Belvedere, Harare, Zimbabwe",
  },
  
  // Social handles
  social: {
    twitter: "@zimtecheng",
    facebook: "zimtechengineering",
    linkedin: "zimtech-engineering",
    instagram: "zimtechengineering",
  },
  
  // Keywords by category
  keywords: {
    general: [
      "Zimtech Engineering",
      "engineering solutions Zimbabwe",
      "industrial automation Harare",
      "embedded systems Zimbabwe",
      "mechanical design services",
      "PLC programming Zimbabwe",
      "SCADA systems Africa",
    ],
    solar: [
      "solar installation Zimbabwe",
      "solar panels Harare",
      "solar inverters Zimbabwe",
      "battery storage systems",
      "renewable energy Zimbabwe",
      "DEYE inverters",
      "solar power solutions",
    ],
    training: [
      "PLC training Zimbabwe",
      "industrial automation training",
      "embedded systems courses",
      "engineering training Harare",
      "technical skills development",
    ],
    products: [
      "LoRA monitoring systems",
      "IoT solutions Zimbabwe",
      "industrial products",
      "automation equipment",
    ],
  },
  
  // Founders / key people for structured data
  founders: [
    {
      name: "Zimtech Engineering Team",
      role: "Engineering Experts",
    },
  ],
  
  // Business info for structured data
  business: {
    type: "ProfessionalService",
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    priceRange: "$$",
  },
};

// Helper to generate full page title
export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.name;
  return `${pageTitle} | ${siteConfig.name}`;
}

// Helper to get keywords for a page
export function getKeywords(categories: (keyof typeof siteConfig.keywords)[]): string[] {
  return categories.flatMap((cat) => siteConfig.keywords[cat] || []);
}

// Helper to get canonical URL
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
