import { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { Award, Lightbulb, Shield, Users, Target, Eye, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Zimtech Engineering",
  description:
    "Learn about Zimtech Engineering's mission, vision, values, and the expert team behind our engineering solutions.",
};

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering solutions that exceed expectations.",
    icon: <Award className="w-8 h-8" />,
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and continuously evolve to meet industry demands.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and ethical practices.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their needs and deliver tailored solutions.",
    icon: <Users className="w-8 h-8" />,
  },
];

const team = [
  {
    name: "Eng. Tanaka Dzapasi",
    role: "Managing Director",
    description: "5+ years in industrial automation and engineering leadership.",
  },
  {
    name: "Worship L Mugomeza",
    role: "Lead Software Engineer",
    description: "Expert in control systems, PLC programming, and IoT solutions.",
  },
  {
    name: "Pascal Chokuda",
    role: "Head of Engineering Design",
    description: "Specializes in mechanical design and manufacturing processes.",
  },
  {
    name: "Tinarwo Mutwira",
    role: "Lead Embeded Systems Engineer",
    description: "Skilled in embedded systems, microcontroller programming, and hardware integration.",
  },
];

export default function AboutPage() {
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
            About <span className="text-gradient">Zimtech</span> Engineering
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Building the future of industrial automation through innovation,
            expertise, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)]">
                <span className="text-gradient">Our Story</span>
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  Founded in 2021, Zimtech Engineering began with a simple mission:
                  to provide world-class engineering solutions that help businesses
                  achieve operational excellence. What started as a small team of
                  passionate engineers has grown into a leading force in industrial
                  automation and engineering services.
                </p>
                <p>
                  Over the years, we have successfully completed hundreds of projects
                  across various industries, from manufacturing and pharmaceuticals
                  to food processing and energy. Our commitment to quality and
                  innovation has earned us the trust of clients worldwide.
                </p>
                <p>
                  Today, Zimtech Engineering continues to push the boundaries of
                  what&apos;s possible in automation and engineering, helping
                  businesses embrace the future of Industry 4.0.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative glass-card rounded-3xl h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-6xl font-bold text-gradient font-[family-name:var(--font-orbitron)] mb-4">
                    2021
                  </div>
                  <p className="text-foreground-muted">Year Founded</p>
                  <div className="mt-8 grid grid-cols-2 gap-6 w-full">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-light font-[family-name:var(--font-orbitron)]">100+</div>
                      <p className="text-sm text-foreground-muted">Projects</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary font-[family-name:var(--font-orbitron)]">10+</div>
                      <p className="text-sm text-foreground-muted">Engineers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 group" data-aos="fade-right">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white mb-6 group-hover:neon-box transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">Our Mission</h3>
              <p className="text-foreground-muted leading-relaxed">
                To empower industries with innovative engineering solutions that
                enhance efficiency, productivity, and sustainability. We are
                dedicated to delivering excellence through cutting-edge technology,
                expert knowledge, and exceptional service.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 group" data-aos="fade-left" data-aos-delay="100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center text-white mb-6 group-hover:neon-box-orange transition-all duration-300">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">Our Vision</h3>
              <p className="text-foreground-muted leading-relaxed">
                To be the global leader in industrial automation and engineering
                services, recognized for our innovation, quality, and the
                transformative impact we create for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Zimtech Engineering."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white mx-auto mb-5 group-hover:neon-box transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)]">
                  {value.title}
                </h3>
                <p className="text-foreground-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experts driving innovation at Zimtech Engineering."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-card rounded-2xl p-6 text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-5 flex items-center justify-center group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-300">
                  <User className="w-12 h-12 text-foreground-muted" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-orbitron)]">{member.name}</h3>
                <p className="text-primary-light font-medium text-sm mb-3">{member.role}</p>
                <p className="text-foreground-muted text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
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
            Want to Learn More?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            Get in touch with our team to discuss how Zimtech Engineering can
            help transform your operations.
          </p>
          <Button href="/contact" variant="secondary" size="lg" data-aos="fade-up" data-aos-delay="200">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
