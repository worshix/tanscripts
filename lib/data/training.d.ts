export interface Course {
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  overview: string;
  objectives: string[];
  prerequisites: string[];
  outline: { day: string; topics: string[] }[];
  includes: string[];
}

export declare const courses: Record<string, Course>;
export declare const courseSlugs: string[];
