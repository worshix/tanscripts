import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { BarChart3, ArrowRight, TrendingUp, Award, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Zimtech Engineering",
  description:
    "Explore our successful projects and see how Zimtech Engineering delivers results for clients across various industries.",
};

const caseStudies = [
  {
    slug: "automating-assembly-line-case-study",
    title: "Automotive Parts Assembly Line Automation",
    client: "Major Automotive Manufacturer",
    industry: "Automotive",
    result: "40% increase in production efficiency",
    description:
      "Complete automation of assembly line operations with PLC-controlled stations, robotic systems, and machine vision quality inspection.",
    services: ["Industrial Automation", "System Integration", "Quality Control"],
  },
  {
    slug: "pharmaceutical-packaging",
    title: "Pharmaceutical Packaging System Upgrade",
    client: "Leading Pharmaceutical Company",
    industry: "Pharmaceutical",
    result: "99.9% packaging accuracy achieved",
    description:
      "Modernization of legacy packaging lines with new PLCs, servo-driven systems, and comprehensive validation documentation.",
    services: ["Industrial Automation", "Electrical Engineering", "Compliance"],
  },
  {
    slug: "food-processing-scada",
    title: "Food Processing SCADA Implementation",
    client: "Regional Food Processor",
    industry: "Food & Beverage",
    result: "30% reduction in downtime",
    description:
      "Design and implementation of plant-wide SCADA system for real-time monitoring, data collection, and predictive maintenance.",
    services: ["SCADA Systems", "Data Acquisition", "System Integration"],
  },
  {
    slug: "warehouse-automation",
    title: "Warehouse Automation & Conveyor System",
    client: "E-commerce Fulfillment Center",
    industry: "Logistics",
    result: "3x increase in throughput",
    description:
      "Complete warehouse automation solution including conveyor systems, sortation, and warehouse management system integration.",
    services: ["Industrial Automation", "Mechanical Design", "WMS Integration"],
  },
  {
    slug: "water-treatment-upgrade",
    title: "Water Treatment Plant Modernization",
    client: "Municipal Water Authority",
    industry: "Utilities",
    result: "25% energy savings",
    description:
      "Control system upgrade with new PLCs, VFDs, and SCADA for improved process control and energy optimization.",
    services: ["Industrial Automation", "SCADA Systems", "Energy Optimization"],
  },
  {
    slug: "mining-remote-monitoring",
    title: "Remote Monitoring for Mining Operations",
    client: "Mining Corporation",
    industry: "Mining",
    result: "24/7 remote visibility achieved",
    description:
      "Implementation of IoT-based remote monitoring system for equipment health, production metrics, and safety compliance.",
    services: ["IoT Solutions", "Remote Monitoring", "Safety Systems"],
  },
];

export default function CaseStudiesPage() {
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
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore how we have helped organizations across various industries
            achieve their automation and engineering goals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="glass-card rounded-2xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center relative">
                  <span className="absolute top-4 left-4 bg-secondary/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-secondary">
                    {study.industry}
                  </span>
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-10 h-10 text-primary-light" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-foreground-muted mb-2">{study.client}</div>
                  <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-foreground-muted mb-5 leading-relaxed">{study.description}</p>
                  <div className="glass-card rounded-xl p-4 mb-5 border-secondary/30">
                    <div className="text-sm text-foreground-muted mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      Key Result
                    </div>
                    <div className="text-lg font-bold text-gradient">
                      {study.result}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="bg-primary/10 text-foreground/80 text-xs px-3 py-1.5 rounded-lg border border-primary/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center link-neon font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Track Record"
            subtitle="Numbers that demonstrate our commitment to delivering results."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed", Icon: Zap },
              { value: "98%", label: "Client Satisfaction", Icon: Award },
              { value: "35%", label: "Avg. Efficiency Gain", Icon: TrendingUp },
              { value: "15+", label: "Industries Served", Icon: Users },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:neon-box transition-all">
                  <stat.Icon className="w-8 h-8 text-primary-light" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-[family-name:var(--font-orbitron)]">
                  {stat.value}
                </div>
                <div className="text-foreground-muted">{stat.label}</div>
              </div>
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
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]"
            data-aos="zoom-in"
          >
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            Contact us today to discuss your project and discover how Zimtech
            Engineering can help you achieve exceptional results.
          </p>
          <Button href="/contact" variant="secondary" size="lg" data-aos="fade-up" data-aos-delay="200">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
