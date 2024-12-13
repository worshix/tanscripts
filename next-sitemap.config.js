/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.zimtechengineering.co.zw', // Replace with your site's URL
    generateRobotsTxt: true, // Generate robots.txt file
    exclude: ['/api/*', '/slice-simulator'], // Exclude certain paths if needed
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/api', '/slice-simulator'] },
      ],
    },
  };
  