export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featuredImage: string;
  content: string[];
}

export declare const posts: Record<string, BlogPost>;
export declare const blogSlugs: string[];
