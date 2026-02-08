"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SolarGallery from "@/components/solar/SolarGallery";
import ProductCard from "@/components/solar/ProductCard";
import PackageCard from "@/components/solar/PackageCard";
import SolarContactForm from "@/components/solar/SolarContactForm";
import { contactConfig } from "@/config/contact";
import {
  solarProducts,
  solarInstallations,
  solarPackages,
  getCategories,
  Product,
  ProductCategory,
} from "@/lib/solar/data";
import {
  Sun,
  Zap,
  Shield,
  Banknote,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  FileCheck,
  Wrench,
  Clock,
  Leaf,
} from "lucide-react";

// SEO Metadata - handled in layout.tsx
const siteUrl = "https://zimtechengineering.com";
const pageDescription = `Professional solar installation services in Zimbabwe. Inverters, panels, batteries & complete packages from 1.5kVA to commercial scale. Free quotes & expert installation by ${contactConfig.companyName}.`;

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/solar-installation`,
  name: contactConfig.companyName,
  description: pageDescription,
  url: `${siteUrl}/solar-installation`,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/images/solar/hero-solar.jpg`,
  telephone: contactConfig.phone.primary,
  email: contactConfig.email.sales,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactConfig.address.street,
    addressLocality: contactConfig.address.city,
    addressCountry: contactConfig.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "Zimbabwe",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Solar Installation",
          description: "Complete solar solutions for homes from 1.5kVA to 20kVA",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Solar Installation",
          description: "Industrial and commercial solar systems with custom design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Products Sales",
          description: "Inverters, panels, batteries, and accessories",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

const benefits = [
  { icon: <Zap className="w-5 h-5" />, text: "Reliable Power 24/7" },
  { icon: <Shield className="w-5 h-5" />, text: "5-25 Year Warranties" },
  { icon: <Banknote className="w-5 h-5" />, text: "Flexible Financing" },
  { icon: <Leaf className="w-5 h-5" />, text: "Eco-Friendly Energy" },
];

const guarantees = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "5-25 Year Warranty",
    description: "All components come with manufacturer warranties, backed by our local support.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Certified Installers",
    description: "Our technicians are trained and certified for safe, professional installations.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Permits Handled",
    description: "We manage all necessary permits and compliance documentation for your project.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "After-Sales Support",
    description: "Ongoing maintenance, monitoring, and support to keep your system optimal.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick Turnaround",
    description: "Most residential installations completed within 5-10 working days.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Workmanship Guarantee",
    description: "2-year guarantee on all installation work performed by our team.",
  },
];

export default function SolarInstallationPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedPackageName, setSelectedPackageName] = useState<string | null>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const categories = getCategories();
  const allCategories: (ProductCategory | "All")[] = ["All", ...categories];

  const filteredProducts =
    activeCategory === "All"
      ? solarProducts
      : solarProducts.filter((p) => p.category === activeCategory);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRequestPackage = (packageId: string, packageName: string) => {
    setSelectedPackageId(packageId);
    setSelectedPackageName(packageName);
    scrollToContactForm();
  };

  const handleAddToQuote = (product: Product) => {
    setSelectedPackageId(null);
    setSelectedPackageName(product.name);
    scrollToContactForm();
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="solar-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solar/hero-solar.jpg"
            alt="Solar panels installation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-[1]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary-light text-sm backdrop-blur-sm"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Sun className="w-4 h-4" />
              <span>Solar Energy Solutions</span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-[family-name:var(--font-orbitron)]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-foreground">Power Your Life with</span>
              <br />
              <span className="text-gradient">Solar Energy</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Professional solar installation services in Zimbabwe. From residential to commercial,
              we design and install complete solar solutions tailored to your needs.
            </p>

            {/* Benefits */}
            <div
              className="flex flex-wrap gap-4 justify-center pt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/60 border border-primary/20 backdrop-blur-sm"
                >
                  <span className="text-secondary">{benefit.icon}</span>
                  <span className="text-sm text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 pt-6 justify-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button variant="secondary" size="lg" onClick={scrollToContactForm}>
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#packages" variant="outline" size="lg">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Install Section */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)]">
                What We <span className="text-gradient">Install</span>
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed">
                We provide end-to-end solar solutions, from initial consultation and system design
                to professional installation and ongoing maintenance. Our team works with
                industry-leading brands to deliver reliable, efficient solar systems.
              </p>
              <ul className="space-y-4">
                {[
                  "Hybrid & Off-Grid Solar Systems",
                  "Battery Backup Solutions",
                  "Grid-Tie Solar Installations",
                  "Solar Water Heating (Geysers)",
                  "Commercial & Industrial Solar",
                  "Solar Borehole Pumping Systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-colors">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" onClick={scrollToContactForm}>
                Request Site Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl h-80 flex flex-col items-center justify-center overflow-hidden">
                <Image
                  src="/images/solar.png"
                  alt="Solar installation process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-foreground font-semibold">Professional Installation</p>
                  <p className="text-foreground-muted text-sm">Certified technicians & quality workmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Installations Gallery */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Installations"
            subtitle="Browse our portfolio of successful solar installations across Zimbabwe."
          />
          <SolarGallery installations={solarInstallations} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Products Section */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Products We Sell"
            subtitle="Quality solar products from trusted brands. All components come with manufacturer warranties."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12" data-aos="fade-up">
            {allCategories.map((category) => (
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

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={handleAddToQuote}
                aosDelay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative py-24 bg-background-secondary scroll-mt-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Some of Our Solar Packages"
            subtitle="Pre-configured solar systems for every need. All packages include professional installation."
          />

          {/* Packages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarPackages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onRequestPackage={handleRequestPackage}
                aosDelay={index * 100}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Why Choose Us / Guarantees */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We're committed to delivering exceptional solar solutions with lasting value."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-5 group-hover:bg-secondary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-secondary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={contactFormRef}
        id="contact-form"
        className="relative py-24 bg-background-secondary scroll-mt-20"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]"
              data-aos="fade-up"
            >
              <span className="text-gradient">Get Your Free Quote</span>
            </h2>
            <p className="text-lg text-foreground-muted" data-aos="fade-up" data-aos-delay="100">
              Ready to make the switch to solar? Fill out the form below and our team will
              contact you within 24 hours.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <SolarContactForm
              selectedPackageId={selectedPackageId}
              selectedPackageName={selectedPackageName}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-90" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="zoom-in"
          >
            Start Your Solar Journey Today
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            Join hundreds of satisfied customers who have made the switch to clean, reliable solar
            energy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToContactForm}
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href={`tel:${contactConfig.phone.primary.replace(/[\s()-]/g, "")}`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
