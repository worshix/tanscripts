import { Metadata } from "next";
import Button from "@/components/Button";
import { CheckCircle, ArrowRight, Cog } from "lucide-react";
import ProductsContent from "./ProductsContent";
import { siteConfig, getCanonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Zimtech Engineering's range of high-quality engineering products including LoRA monitoring systems, IoT solutions, controllers, and automation equipment in Zimbabwe.",
  keywords: [
    "engineering products Zimbabwe",
    "LoRA monitoring systems",
    "IoT solutions Harare",
    "industrial automation products",
    "sensor solutions",
    "controllers Zimbabwe",
  ],
  alternates: {
    canonical: getCanonicalUrl("/products"),
  },
  openGraph: {
    title: "Engineering Products | Zimtech Engineering",
    description:
      "High-quality LoRA monitoring systems, IoT solutions, and industrial automation products in Zimbabwe.",
    url: `${siteConfig.url}/products`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function ProductsPage() {
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
            Our <span className="text-gradient">Products</span>
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            High-quality engineering products designed and manufactured to the
            highest standards for industrial applications.
          </p>
        </div>
      </section>

      {/* Products Content with Filters */}
      <ProductsContent />

      {/* Custom Solutions */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)]">
                Need a <span className="text-gradient">Custom</span> Solution?
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Can&apos;t find exactly what you need? Our engineering team
                specializes in developing custom products tailored to your
                specific requirements. From concept to production, we work
                closely with you to deliver the perfect solution.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom hardware design",
                  "Firmware development",
                  "Prototype manufacturing",
                  "Volume production support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-colors">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl h-80 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mb-6 neon-box">
                  <Cog className="w-12 h-12 text-white" />
                </div>
                <p className="text-foreground-muted">Custom Solutions</p>
              </div>
            </div>
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
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="zoom-in"
          >
            Ready to Upgrade Your Operations?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            Contact our sales team to discuss your requirements and get a quote.
          </p>
          <Button href="/contact" variant="secondary" size="lg" data-aos="fade-up" data-aos-delay="200">
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
