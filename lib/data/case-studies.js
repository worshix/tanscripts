// @ts-check

/**
 * @typedef {Object} CaseStudy
 * @property {string} title
 * @property {string} client
 * @property {string} industry
 * @property {string} result
 * @property {string} featuredImage
 * @property {string} description
 * @property {string[]} services
 * @property {string[]} challenge
 * @property {string[]} solution
 * @property {string[]} implementation
 * @property {{metric: string, value: string}[]} results
 * @property {{quote: string, author: string, role: string}} [testimonial]
 */

/** @type {Record<string, CaseStudy>} */
const caseStudies = {};

const caseStudySlugs = Object.keys(caseStudies);

module.exports = { caseStudies, caseStudySlugs };
