import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

/**
 * JSON-LD Structured Data Components
 * For SEO and rich snippets in search results
 */

// Organization Schema
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactConfig.address.city,
      addressCountry: contactConfig.address.country,
      streetAddress: contactConfig.address.street,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactConfig.phone.primary,
      contactType: "customer service",
      email: contactConfig.email.info,
      availableLanguage: ["English"],
    },
    sameAs: [
      contactConfig.social.facebook,
      contactConfig.social.twitter,
      contactConfig.social.linkedin,
      contactConfig.social.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactConfig.address.city,
      addressCountry: contactConfig.address.country,
      streetAddress: contactConfig.address.street,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.8292,
      longitude: 31.0522,
    },
    telephone: contactConfig.phone.primary,
    email: contactConfig.email.info,
    priceRange: siteConfig.business.priceRange,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    serviceType: [
      "Industrial Automation",
      "Embedded Systems",
      "Solar Installation",
      "Engineering Training",
      "Mechanical Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema (for blog posts)
interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  author,
  image,
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    image: image || `${siteConfig.url}${siteConfig.ogImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema
interface ProductJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: number;
  currency?: string;
  category?: string;
}

export function ProductJsonLd({
  name,
  description,
  url,
  image,
  price,
  currency = "USD",
  category,
}: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image || `${siteConfig.url}${siteConfig.ogImage}`,
    category,
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency: currency,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Course Schema (for training)
interface CourseJsonLdProps {
  name: string;
  description: string;
  url: string;
  duration?: string;
  price?: number;
  currency?: string;
}

export function CourseJsonLd({
  name,
  description,
  url,
  duration,
  price,
  currency = "USD",
}: CourseJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      duration,
      instructor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency: currency,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
