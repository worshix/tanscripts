/**
 * Centralized contact information for Zimtech Engineering
 * Update this file to change contact details across the entire website
 */

export const contactConfig = {
  // Company Info
  companyName: "Zimtech Engineering",
  tagline: "Engineering Excellence",
  
  // Address
  address: {
    street: "P. O. Box BE 277, Belvedere, Harare",
    city: "Harare",
    country: "Zimbabwe",
    full: "P. O. Box BE 277, Belvedere, Harare, Zimbabwe",
  },
  
  // Phone Numbers
  phone: {
    primary: "+263 71 366 4345",
    secondary: "+263 78 432 3921",
    whatsapp: "+263713664345", // Without spaces for WhatsApp link
    whatsappDisplay: "+263 71 366 4345", // Display format
  },
  
  // Email Addresses
  email: {
    info: "info@zimtechengineering.co.zw",
    sales: "sales@zimtechengineering.co.zw",
    training: "training@zimtechengineering.co.zw",
  },
  
  // Business Hours
  hours: {
    weekdays: "Mon - Fri: 8:00 AM - 5:00 PM",
    saturday: "Sat: 9:00 AM - 1:00 PM",
    sunday: "Sun: Closed",
    full: "Mon - Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 1:00 PM",
  },
  
  // Social Media Links
  social: {
    twitter: "https://twitter.com/zimtecheng",
    linkedin: "https://linkedin.com/company/zimtech-engineering",
    instagram: "https://www.instagram.com/zimtech_eng/",
    github: "https://github.com/zimtech-engineering",
    facebook: "https://www.facebook.com/profile.php?id=61571170637688",
  },
  
  // WhatsApp Configuration
  whatsapp: {
    number: "263713664345", // Country code without +
    defaultMessage: "Hello! I'm interested in learning more about Zimtech Engineering's services.",
    getLink: (message?: string) => {
      const msg = encodeURIComponent(message || contactConfig.whatsapp.defaultMessage);
      return `https://wa.me/${contactConfig.whatsapp.number}?text=${msg}`;
    },
  },
  
  // Map Configuration (for Google Maps embed)
  map: {
    latitude: -17.8292,
    longitude: 31.0522,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.8!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1234567890",
  },
};

// Helper function to format phone for tel: links
export const formatPhoneLink = (phone: string) => {
  return phone.replace(/[\s()-]/g, "");
};

// Helper function to format email for mailto: links
export const formatEmailLink = (email: string, subject?: string) => {
  if (subject) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${email}`;
};

export default contactConfig;
