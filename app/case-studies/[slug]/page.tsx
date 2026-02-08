import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import { caseStudies } from "@/lib/data/case-studies.js";
import { siteConfig } from "@/config/site";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  TrendingUp, 
  Building2, 
  Tag, 
  Twitter, 
  Linkedin,
  Factory,
  Pill,
  UtensilsCrossed,
  Truck,
  Droplets,
  Mountain
} from "lucide-react";

// Industry icons mapping
const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Automotive": Factory,
  "Pharmaceutical": Pill,
  "Food & Beverage": UtensilsCrossed,
  "Logistics": Truck,
  "Utilities": Droplets,
  "Mining": Mountain,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  
  const url = `${siteConfig.url}/case-studies/${slug}`;
  
  return {
    title: study.title,
    description: study.description,
    keywords: [study.industry, study.client, "case study Zimbabwe", "engineering project"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${study.title} | Case Study | Zimtech Engineering`,
      description: study.description,
      url,
      type: "article",
      tags: study.services,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  const IndustryIcon = industryIcons[study.industry] || Factory;

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-background-secondary border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/case-studies" className="text-foreground-muted hover:text-primary-light transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Case Studies
            </Link>
            <span className="text-foreground-muted">/</span>
            <span className="text-foreground">{study.industry}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 gradient-hero grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-secondary/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-secondary">
              {study.industry}
            </span>
            <span className="text-foreground-muted flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {study.client}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-[family-name:var(--font-orbitron)]">
            {study.title}
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed mb-8">
            {study.description}
          </p>
          
          {/* Key Result Highlight */}
          <div className="inline-flex items-center gap-3 glass-card rounded-xl px-6 py-4">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <div>
              <p className="text-sm text-foreground-muted">Key Result</p>
              <p className="text-xl font-bold text-gradient">{study.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden glass-card">
            {/* Image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center neon-box">
                  <IndustryIcon className="w-12 h-12 text-white" />
                </div>
                <p className="text-foreground-muted text-sm">{study.industry} Case Study</p>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-secondary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-secondary backdrop-blur-sm">
                Case Study
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tags */}
      <section className="py-8 bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-foreground-muted flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Services:
            </span>
            {study.services.map((service) => (
              <span
                key={service}
                className="bg-primary/10 text-primary-light px-4 py-1.5 rounded-lg text-sm border border-primary/20"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* The Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 font-bold">1</span>
              </span>
              The Challenge
            </h2>
            <div className="space-y-4">
              {study.challenge.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary-light font-bold">2</span>
              </span>
              Our Solution
            </h2>
            <div className="space-y-4">
              {study.solution.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed text-lg">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold">3</span>
              </span>
              Implementation
            </h2>
            <div className="space-y-4">
              {study.implementation.map((phase, index) => (
                <div key={index} className="glass-card rounded-xl p-4 border-l-4 border-primary">
                  <p className="text-foreground/80 leading-relaxed">{phase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">4</span>
              </span>
              Results
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {study.results.map((result) => (
                <div key={result.metric} className="glass-card rounded-xl p-6 text-center group hover:border-secondary/50 transition-all">
                  <p className="text-3xl font-bold text-gradient mb-2 font-[family-name:var(--font-orbitron)]">
                    {result.value}
                  </p>
                  <p className="text-foreground-muted">{result.metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {study.testimonial && (
            <div className="glass-card rounded-2xl p-8 border-l-4 border-secondary">
              <blockquote className="text-xl text-foreground italic mb-6 leading-relaxed">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold">{study.testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                  <p className="text-foreground-muted text-sm">{study.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Share */}
      <section className="py-8 bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-foreground-muted">Share this case study:</span>
            <button className="p-3 glass-card rounded-xl hover:border-primary/50 transition-all" aria-label="Share on Twitter">
              <Twitter className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-3 glass-card rounded-xl hover:border-primary/50 transition-all" aria-label="Share on LinkedIn">
              <Linkedin className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-orbitron)]">
            Related Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(caseStudies)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedStudy]) => (
                <Link
                  key={key}
                  href={`/case-studies/${key}`}
                  className="glass-card rounded-2xl p-6 group"
                >
                  <span className="text-sm text-secondary font-medium">
                    {relatedStudy.industry}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary-light transition-colors font-[family-name:var(--font-orbitron)]">
                    {relatedStudy.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mt-3">
                    {relatedStudy.client}
                  </p>
                  <div className="mt-4 flex items-center text-primary-light text-sm font-medium">
                    Read Case Study
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
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Contact us to discuss how Zimtech Engineering can help you achieve
            similar results for your organization.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
