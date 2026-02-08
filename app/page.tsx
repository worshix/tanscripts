import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ProductShowcase from "@/components/ProductShowcase";
import { products } from "@/lib/data/products.js";
import { posts } from "@/lib/data/blog.js";
import { caseStudies } from "@/lib/data/case-studies.js";
import { siteConfig, getCanonicalUrl } from "@/config/site";
import { 
  Settings, 
  Cog, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  BarChart3,
  Users,
  Award,
  Clock,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Automation & Engineering Solutions Zimbabwe",
  description:
    "Zimtech Engineering delivers cutting-edge industrial automation, embedded systems, solar installations, and professional training services in Zimbabwe. Get expert engineering solutions today.",
  keywords: [
    "industrial automation Zimbabwe",
    "engineering solutions Harare",
    "PLC programming",
    "SCADA systems",
    "solar installation Zimbabwe",
    "embedded systems",
    "professional training",
  ],
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: `${siteConfig.name} | Industrial Automation & Engineering Solutions`,
    description:
      "Cutting-edge industrial automation, embedded systems, solar installations, and professional training services in Zimbabwe.",
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

const services = [
  {
    title: "Industrial Automation",
    description:
      "Complete automation solutions for manufacturing and production lines, including PLC programming, SCADA systems, and process control.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Embedded Systems",
    description:
      "Custom embedded solutions from microcontroller programming to complex IoT systems, firmware development, and hardware integration.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Mechanical Design",
    description:
      "Expert mechanical engineering for industrial applications, including CAD design, prototyping, and manufacturing support.",
    icon: <Cog className="w-6 h-6" />,
  },
  {
    title: "Professional Training",
    description:
      "Comprehensive training programs in PLC programming, embedded systems, and mechanical design for industrial automation.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Solar Installation",
    description:
    "Professional solar installation services in Zimbabwe. Solar panels, inverters, batteries, and complete packages from 1.5kVA to commercial scale. Free quotes and expert installation by Zimtech Engineering.",
    icon: <Sparkles className="w-6 h-6" />,
  }
];

const stats = [
  { value: "25+", label: "Projects Completed", icon: <BarChart3 className="w-6 h-6" /> },
  { value: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
  { value: "200+", label: "Clients Served", icon: <Users className="w-6 h-6" /> },
  { value: "12+", label: "Expert Engineers", icon: <Award className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/videos/hero-poster.jpg"
          >
            <source src="/hero-vid.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-background/40" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-background/50 via-transparent to-background" />
        </div>
        
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl z-1" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl z-1" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm backdrop-blur-sm"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Sparkles className="w-4 h-4" />
              <span>Engineering the Future</span>
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-[family-name:var(--font-orbitron)]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-foreground">Engineering</span>
              <br />
              <span className="text-gradient">Excellence</span>
              <br />
              <span className="text-foreground">for </span>
              <span className="text-secondary neon-text-orange">Tomorrow</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Zimtech Engineering delivers cutting-edge solutions in industrial
              automation, embedded systems, and mechanical design. Partner with
              us to transform your operations.
            </p>
            <div 
              className="flex flex-wrap gap-4 pt-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Button href="/services" variant="primary" size="lg">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-foreground-muted uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-foreground-muted/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-background-secondary">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 group-hover:neon-box transition-all duration-300">
                  <span className="text-primary-light">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-[family-name:var(--font-orbitron)]">
                  {stat.value}
                </div>
                <div className="text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Showcase */}
      <ProductShowcase
        productName="Digital Book"
        productTagline="The future of Learning"
        productDescription="Experience unprecedented control and efficiency with our flagship Digital Book. Built with cutting-edge technology and designed for the demands of modern education, it delivers interactive content, seamless integration, and personalized learning experiences."
        features={[
          "Interactive content with multimedia support",
          "Seamless integration with learning management systems",
          "Personalized learning paths powered by AI"
        ]}
        images={[
          "/images/digital_book_1.jpg",
          "/images/digital_book_2.jpg",
        ]}
        productLink="/images/digital-book.png"
        badge="Coming Soon"
      />

      {/* Services Section */}
      <section className="relative py-24 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive engineering solutions tailored to meet your industrial automation and design needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href="/services"
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button href="/services" variant="primary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Products"
            subtitle="High-quality engineering products designed and manufactured to the highest standards."
          />
          <div className={`grid gap-8 ${Object.keys(products).length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : Object.keys(products).length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'}`}>
            {Object.values(products).slice(0, 3).map((product, index) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.images.main}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 right-4 bg-secondary/90 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-secondary z-10">
                      <Sparkles className="w-3 h-3" />
                      New
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-primary/30">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-foreground-muted mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold">${product.price.base}</span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-primary-light hover:text-secondary transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button href="/products" variant="primary">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)] leading-tight"
                data-aos="fade-right"
              >
                Why Choose{" "}
                <span className="text-gradient">Zimtech</span>{" "}
                <span className="text-secondary">Engineering?</span>
              </h2>
              <p 
                className="text-foreground-muted text-lg leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                With over 5 years of experience in industrial automation and
                engineering, we bring unmatched expertise and dedication to every
                project. Our team of certified engineers is committed to
                delivering solutions that drive efficiency and innovation.
              </p>
              <ul className="space-y-4" data-aos="fade-right" data-aos-delay="200">
                {[
                  "Industry-leading expertise in automation technologies",
                  "Custom solutions tailored to your specific needs",
                  "24/7 technical support and maintenance",
                  "Comprehensive training programs",
                  "ISO-certified quality management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button href="/about" variant="primary">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                
                {/* Main card */}
                <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mb-8 neon-box">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                    5+ Years
                  </h3>
                  <p className="text-foreground-muted">
                    Of engineering excellence and innovation, serving clients across industries worldwide.
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary pulse-glow" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-secondary pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog / Case Study */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Insights"
            subtitle="Stay updated with our latest case studies, industry news, and engineering insights."
          />
          {(() => {
            // Combine blog posts and case studies into a single array
            const blogItems = Object.entries(posts).map(([slug, post]) => ({
              type: 'blog' as const,
              slug,
              tag: post.category,
              tagColor: post.category === "Case Study" 
                ? "bg-secondary/20 text-secondary border-secondary/30"
                : post.category === "Product Update"
                ? "bg-primary/20 text-primary-light border-primary/30"
                : post.category === "Research"
                ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                : "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
              title: post.title,
              description: post.content[0].substring(0, 150) + "...",
              date: new Date(post.date),
            }));
            
            const caseStudyItems = Object.entries(caseStudies).map(([slug, study]) => ({
              type: 'case-study' as const,
              slug,
              tag: "Case Study",
              tagColor: "bg-secondary/20 text-secondary border-secondary/30",
              title: study.title,
              description: study.description,
              date: new Date(), // Case studies don't have dates, use current
            }));
            
            // Combine and get latest 3
            const allItems = [...blogItems, ...caseStudyItems]
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .slice(0, 3);
            
            if (allItems.length === 0) {
              return (
                <div className="text-center py-16" data-aos="fade-up">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center neon-box">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-4 font-[family-name:var(--font-orbitron)]">Coming Soon</h3>
                  <p className="text-foreground-muted max-w-md mx-auto">
                    Check back soon for the latest insights, case studies, and industry news.
                  </p>
                </div>
              );
            }
            
            return (
              <div className={`grid gap-8 ${allItems.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : allItems.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {allItems.map((item, index) => (
                  <div key={item.slug} className="glass-card rounded-2xl p-6 group" data-aos="fade-up" data-aos-delay={index * 100}>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-light transition-colors font-[family-name:var(--font-orbitron)]">
                      {item.title}
                    </h3>
                    <p className="text-foreground-muted mb-6 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <Link 
                      href={item.type === 'blog' ? `/blog/${item.slug}` : `/case-studies/${item.slug}`}
                      className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            );
          })()}
          <div className="text-center mt-16">
            <Button href="/blog" variant="secondary">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="zoom-in"
          >
            Ready to Transform Your Operations?
          </h2>
          <p 
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today to discuss your engineering needs and discover how
            Zimtech Engineering can help drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-primary bg-white hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/20 inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all inline-flex items-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
