import { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { Settings, Cpu, Cog, Zap, Database, FileText, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { siteConfig, getCanonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zimtech Engineering's comprehensive services: industrial automation, PLC programming, SCADA systems, embedded systems, mechanical design, and professional training in Zimbabwe.",
  keywords: [
    "industrial automation services",
    "PLC programming Zimbabwe",
    "SCADA system design",
    "embedded systems development",
    "mechanical design services",
    "engineering consulting Harare",
    "process control optimization",
  ],
  alternates: {
    canonical: getCanonicalUrl("/services"),
  },
  openGraph: {
    title: "Engineering Services | Zimtech Engineering",
    description:
      "Industrial automation, embedded systems, mechanical design, and professional training services in Zimbabwe.",
    url: `${siteConfig.url}/services`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

const services = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "Complete automation solutions for manufacturing and production lines.",
    details: [
      "PLC Programming & Integration",
      "SCADA System Design & Implementation",
      "Process Control & Optimization",
      "HMI Development",
      "Motion Control Systems",
      "Robotics Integration",
    ],
    icon: <Settings className="w-10 h-10" />,
    image:"/images/industrial-automation.jpg"
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    description:
      "Custom embedded solutions from microcontroller programming to complex IoT systems.",
    details: [
      "Microcontroller Programming",
      "Firmware Development",
      "IoT Device Development",
      "Hardware-Software Integration",
      "Real-Time Operating Systems",
      "Wireless Communication Protocols",
    ],
    icon: <Cpu className="w-10 h-10" />,
    image:"/images/embedded-systems.jpg"
  },
  {
    id:"solar-installation",
    title:"Solar Installation",
    description:"Professional solar installation services in Zimbabwe. Solar panels, inverters, batteries, and complete packages from 1.5kVA to commercial scale. Free quotes and expert installation by Zimtech Engineering.",
    details:[
      "Residential Solar Systems",
      "Commercial Solar Solutions",
      "Off-Grid & Hybrid Systems",
      "Solar Panel Installation",
      "Inverter & Battery Setup",
      "Maintenance & Support"
    ],
    icon: <Sparkles className="w-10 h-10" />,
    image:"/images/solar.png"
  },
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    description:
      "Expert mechanical engineering for industrial applications.",
    details: [
      "3D CAD Design & Modeling",
      "Prototyping & Testing",
      "Finite Element Analysis (FEA)",
      "Manufacturing Support",
      "Product Development",
      "Custom Machinery Design",
    ],
    icon: <Cog className="w-10 h-10" />,
    image:"/images/mechanical-design.jpg"
  },
  {
    id: "electrical-engineering",
    title: "Electrical Engineering",
    description:
      "Comprehensive electrical solutions for industrial and commercial applications.",
    details: [
      "Control Panel Design & Fabrication",
      "Power Distribution Systems",
      "Electrical Installation",
      "Motor Control Centers",
      "Instrumentation & Calibration",
      "Safety System Design",
    ],
    icon: <Zap className="w-10 h-10" />,
    image:"/images/electrical-engineering.jpg"
  },
  {
    id: "system-integration",
    title: "System Integration",
    description:
      "Seamless integration of automation systems with existing infrastructure.",
    details: [
      "Legacy System Modernization",
      "Enterprise System Integration",
      "Data Acquisition & Monitoring",
      "Cloud Connectivity",
      "Multi-Vendor Integration",
      "Industry 4.0 Implementation",
    ],
    icon: <Database className="w-10 h-10" />,
    image:"/images/system-integration.jpg"
  },
  {
    id: "consulting",
    title: "Engineering Consulting",
    description:
      "Expert consulting services to optimize your operations.",
    details: [
      "Process Optimization",
      "Feasibility Studies",
      "Technology Assessment",
      "Project Management",
      "Compliance & Standards",
      "Energy Audits",
    ],
    icon: <FileText className="w-10 h-10" />,
    image:"/images/engineering-consultancy.jpg"
  },
];

export default function ServicesPage() {
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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive engineering solutions tailored to meet your industrial
            automation and design needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white mb-6 neon-box">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                    {service.title}
                  </h2>
                  <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/40 transition-colors">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-2xl" />
                    <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="rounded-2xl object-cover relative z-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Process"
            subtitle="A systematic approach to delivering exceptional engineering solutions."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", description: "We listen to understand your needs and challenges." },
              { step: "02", title: "Planning", description: "We develop a comprehensive solution strategy." },
              { step: "03", title: "Implementation", description: "Our team executes the project with precision." },
              { step: "04", title: "Support", description: "We provide ongoing maintenance and optimization." },
            ].map((item, index) => (
              <div key={item.step} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-10" />
                )}
                <div className="glass-card rounded-2xl p-6 h-full group-hover:neon-border transition-all duration-300">
                  <div className="text-5xl font-bold text-gradient mb-4 font-[family-name:var(--font-orbitron)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)]">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted">{item.description}</p>
                </div>
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
            Ready to Get Started?
          </h2>
          <p 
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today to discuss your project requirements and get a
            customized solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button href="/contact" variant="secondary" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
