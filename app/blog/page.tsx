import { Metadata } from "next";
import { Mail, Sparkles } from "lucide-react";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Zimtech Engineering",
  description:
    "Explore our latest articles, case studies, product updates, and industry insights.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="fade-down"
          >
            Blog & <span className="text-gradient">Articles</span>
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay updated with our latest case studies, product updates, and
            industry insights.
          </p>
        </div>
      </section>

      {/* Blog Content with Filters */}
      <BlogContent />

      {/* Newsletter */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20"
            data-aos="fade-down"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">Stay Updated</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="200">
            Get the latest articles, case studies, and product updates delivered
            to your inbox.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary backdrop-blur-sm"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
