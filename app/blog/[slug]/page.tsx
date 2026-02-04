import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import { posts } from "@/lib/data/blog.js";
import { Clock, User, Calendar, ArrowRight, Twitter, Linkedin, Tag, FileText, Sparkles, Newspaper, Wrench, BookOpen } from "lucide-react";

// Get icon based on category
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Case Study": BookOpen,
  "Product Update": Sparkles,
  "Technical": Wrench,
  "Industry News": Newspaper,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return { title: "Article Not Found | Zimtech Engineering" };
  }
  return {
    title: `${post.title} | Blog | Zimtech Engineering`,
    description: post.content[0],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-sm font-semibold px-4 py-1.5 rounded-full border ${
                post.category === "Case Study"
                  ? "bg-secondary/20 text-secondary border-secondary/30"
                  : post.category === "Product Update"
                  ? "bg-primary/20 text-primary-light border-primary/30"
                  : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
              }`}
            >
              {post.category}
            </span>
            <span className="text-foreground-muted flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-[family-name:var(--font-orbitron)]">
            {post.title}
          </h1>
          <div className="flex items-center text-foreground-muted">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden glass-card">
            {/* Image placeholder - replace with Next/Image when you have real images */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center neon-box">
                  {(() => {
                    const CategoryIcon = categoryIcons[post.category] || FileText;
                    return <CategoryIcon className="w-12 h-12 text-white" />;
                  })()}
                </div>
                <p className="text-foreground-muted text-sm">Featured Image: {post.title}</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-sm ${
                post.category === "Case Study"
                  ? "bg-secondary/80 text-white border-secondary"
                  : post.category === "Product Update"
                  ? "bg-primary/80 text-white border-primary"
                  : "bg-cyan-500/80 text-white border-cyan-500"
              }`}>
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-foreground-muted flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tags:
              </span>
              <Link href="/blog" className="bg-primary/10 text-primary-light px-4 py-1.5 rounded-lg text-sm border border-primary/20 hover:border-primary/50 transition-colors">
                Automation
              </Link>
              <Link href="/blog" className="bg-primary/10 text-primary-light px-4 py-1.5 rounded-lg text-sm border border-primary/20 hover:border-primary/50 transition-colors">
                Engineering
              </Link>
              <Link href="/blog" className="bg-primary/10 text-primary-light px-4 py-1.5 rounded-lg text-sm border border-primary/20 hover:border-primary/50 transition-colors">
                Industry 4.0
              </Link>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-foreground-muted">Share:</span>
            <button className="p-3 glass-card rounded-xl hover:border-primary/50 transition-all" aria-label="Share on Twitter">
              <Twitter className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-3 glass-card rounded-xl hover:border-primary/50 transition-all" aria-label="Share on LinkedIn">
              <Linkedin className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-orbitron)]">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(posts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <Link
                  key={key}
                  href={`/blog/${key}`}
                  className="glass-card rounded-2xl p-6 group"
                >
                  <span className="text-sm text-primary-light font-medium">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary-light transition-colors font-[family-name:var(--font-orbitron)]">
                    {relatedPost.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mt-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {relatedPost.date}
                  </p>
                  <div className="mt-4 flex items-center text-primary-light text-sm font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Contact us to discuss how Zimtech Engineering can help you achieve
            your automation goals.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
