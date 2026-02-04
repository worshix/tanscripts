export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  result: string;
  featuredImage: string;
  description: string;
  services: string[];
  challenge: string[];
  solution: string[];
  implementation: string[];
  results: { metric: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
}

export declare const caseStudies: Record<string, CaseStudy>;
export declare const caseStudySlugs: string[];
