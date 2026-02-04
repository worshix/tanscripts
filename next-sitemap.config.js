/** @type {import('next-sitemap').IConfig} */

// Import slugs directly from data files - these are the same data used by the pages
// When you add a new product/case-study/blog/training, it's automatically included in the sitemap
const { productIds } = require('./lib/data/products.js');
const { caseStudySlugs } = require('./lib/data/case-studies.js');
const { blogSlugs } = require('./lib/data/blog.js');
const { courseSlugs } = require('./lib/data/training.js');

module.exports = {
  siteUrl: 'https://www.zimtechengineering.co.zw',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [
      'https://www.zimtechengineering.co.zw/sitemap.xml',
    ],
  },
  // Define additional paths for dynamic routes
  additionalPaths: async (config) => {
    const result = [];

    // Product detail pages
    for (const id of productIds) {
      result.push({
        loc: `/products/${id}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    // Case study pages
    for (const slug of caseStudySlugs) {
      result.push({
        loc: `/case-studies/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    // Blog post pages
    for (const slug of blogSlugs) {
      result.push({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    }

    // Training course pages
    for (const slug of courseSlugs) {
      result.push({
        loc: `/training/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return result;
  },
  // Exclude API routes and internal pages
  exclude: ['/api/*', '/_not-found'],
};
