"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Clock, ArrowRight, Sparkles, BookOpen, Newspaper, Wrench } from "lucide-react";

const posts = [
  {
    slug: "automating-assembly-line-case-study",
    title: "Automating Assembly Line for Major Manufacturer",
    excerpt:
      "How we helped a leading manufacturer increase production efficiency by 40% through smart automation solutions.",
    category: "Case Study",
    date: "January 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "introducing-the-nexgen-controller",
    title: "Introducing the NexGen Controller v2.0",
    excerpt:
      "Discover the new features and improvements in our flagship industrial controller platform.",
    category: "Product Update",
    date: "January 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "trends-in-industrial-automation-2026",
    title: "Trends in Industrial Automation for 2026",
    excerpt:
      "Explore the emerging trends shaping the future of industrial automation and smart manufacturing.",
    category: "Industry News",
    date: "January 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "plc-programming-best-practices",
    title: "PLC Programming Best Practices for Modern Automation",
    excerpt:
      "Learn the essential best practices for developing maintainable and efficient PLC programs.",
    category: "Technical",
    date: "January 10, 2026",
    readTime: "10 min read",
  },
  {
    slug: "iot-integration-manufacturing",
    title: "IoT Integration in Manufacturing: A Complete Guide",
    excerpt:
      "A comprehensive guide to implementing IoT solutions in manufacturing environments.",
    category: "Technical",
    date: "January 5, 2026",
    readTime: "12 min read",
  },
  {
    slug: "energy-efficiency-automation",
    title: "Achieving Energy Efficiency Through Automation",
    excerpt:
      "How smart automation systems can significantly reduce energy consumption in industrial facilities.",
    category: "Industry News",
    date: "December 28, 2025",
    readTime: "7 min read",
  },
];

const categories = ["All", "Case Study", "Product Update", "Industry News", "Technical"];

// Get icon based on category
function getCategoryIcon(category: string) {
  switch (category) {
    case "Case Study": return BookOpen;
    case "Product Update": return Sparkles;
    case "Technical": return Wrench;
    case "Industry News": return Newspaper;
    default: return FileText;
  }
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-background-secondary border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  category === activeCategory
                    ? "btn-neon text-white"
                    : "glass-card text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 text-foreground-muted">
            Showing <span className="text-foreground font-semibold">{filteredPosts.length}</span> 
            {filteredPosts.length === 1 ? " article" : " articles"}
            {activeCategory !== "All" && (
              <span> in <span className="text-primary-light font-semibold">{activeCategory}</span></span>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <article
                  key={post.slug}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all neon-box">
                      <CategoryIcon className="w-8 h-8 text-primary-light" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                          post.category === "Case Study"
                            ? "bg-secondary/20 text-secondary border-secondary/30"
                            : post.category === "Product Update"
                            ? "bg-primary/20 text-primary-light border-primary/30"
                            : post.category === "Technical"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                            : "bg-foreground/10 text-foreground-muted border-foreground/20"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-foreground-muted text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-foreground-muted mb-5 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                      <span className="text-foreground-muted text-sm">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="link-neon font-medium inline-flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-foreground-muted mb-6">No articles match the selected category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="btn-neon px-6 py-2 rounded-xl text-white"
              >
                View All Articles
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-16">
              <nav className="flex items-center gap-2">
                <button className="px-5 py-2.5 rounded-xl border border-primary/20 text-foreground-muted cursor-not-allowed">
                  Previous
                </button>
                <button className="px-5 py-2.5 rounded-xl btn-neon text-white">1</button>
                <button className="px-5 py-2.5 rounded-xl border border-primary/20 text-foreground hover:border-primary/50 transition-colors">
                  2
                </button>
                <button className="px-5 py-2.5 rounded-xl border border-primary/20 text-foreground hover:border-primary/50 transition-colors">
                  3
                </button>
                <button className="px-5 py-2.5 rounded-xl border border-primary/20 text-foreground hover:border-primary/50 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
