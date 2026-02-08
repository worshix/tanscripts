import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { DollarSign, BookOpen, Heart, Clock, Building, Users, MapPin, ArrowRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Zimtech Engineering",
  description:
    "Join our team of engineering professionals. Explore career opportunities at Zimtech Engineering.",
};

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const openPositions: Position[] = [
  // {
  //   id: "senior-automation-engineer",
  //   title: "Senior Automation Engineer",
  //   department: "Engineering",
  //   location: "Harare, Zimbabwe",
  //   type: "Full-time",
  //   description:
  //     "We are looking for an experienced automation engineer to lead complex industrial automation projects.",
  //   requirements: [
  //     "5+ years experience in industrial automation",
  //     "Proficiency in PLC programming (Siemens, Allen-Bradley)",
  //     "Experience with SCADA systems",
  //     "Strong project management skills",
  //   ],
  // },
  // {
  //   id: "embedded-systems-developer",
  //   title: "Embedded Systems Developer",
  //   department: "Product Development",
  //   location: "Harare, Zimbabwe",
  //   type: "Full-time",
  //   description:
  //     "Join our product team to develop cutting-edge embedded systems and IoT solutions.",
  //   requirements: [
  //     "3+ years embedded C/C++ development",
  //     "Experience with ARM microcontrollers",
  //     "Knowledge of communication protocols (I2C, SPI, UART)",
  //     "RTOS experience preferred",
  //   ],
  // },
  // {
  //   id: "mechanical-design-engineer",
  //   title: "Mechanical Design Engineer",
  //   department: "Engineering",
  //   location: "Harare, Zimbabwe",
  //   type: "Full-time",
  //   description:
  //     "Design mechanical systems for industrial automation applications.",
  //   requirements: [
  //     "3+ years mechanical design experience",
  //     "Proficiency in SolidWorks or equivalent CAD",
  //     "Understanding of manufacturing processes",
  //     "Experience with pneumatics/hydraulics",
  //   ],
  // },
  // {
  //   id: "project-coordinator",
  //   title: "Project Coordinator",
  //   department: "Operations",
  //   location: "Harare, Zimbabwe",
  //   type: "Full-time",
  //   description:
  //     "Coordinate engineering projects and ensure timely delivery of client solutions.",
  //   requirements: [
  //     "2+ years project coordination experience",
  //     "Strong organizational skills",
  //     "Excellent communication abilities",
  //     "Technical background preferred",
  //   ],
  // },
  // {
  //   id: "sales-engineer",
  //   title: "Technical Sales Engineer",
  //   department: "Sales",
  //   location: "Harare, Zimbabwe",
  //   type: "Full-time",
  //   description:
  //     "Drive sales of our engineering solutions and products to industrial clients.",
  //   requirements: [
  //     "Engineering degree or equivalent",
  //     "2+ years technical sales experience",
  //     "Strong presentation skills",
  //     "Knowledge of industrial automation",
  //   ],
  // },
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer competitive compensation packages based on experience and skills.",
    Icon: DollarSign,
  },
  {
    title: "Professional Development",
    description: "Access to training programs, certifications, and continuous learning opportunities.",
    Icon: BookOpen,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and your family.",
    Icon: Heart,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous leave policies.",
    Icon: Clock,
  },
  {
    title: "Modern Workspace",
    description: "State-of-the-art facilities and equipment to do your best work.",
    Icon: Building,
  },
  {
    title: "Team Events",
    description: "Regular team building activities and company events.",
    Icon: Users,
  },
];

export default function CareersPage() {
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
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Build your career with Zimtech Engineering. We are always looking
            for talented individuals to join our growing team.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Join Zimtech Engineering?"
            subtitle="We offer a dynamic work environment where you can grow professionally and make a real impact."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl p-6 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center text-white mb-5 neon-box group-hover:scale-110 transition-transform">
                  <benefit.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Open Positions"
            subtitle="Explore our current job openings and find the right opportunity for you."
          />
          
          {openPositions.length > 0 ? (
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={position.id}
                  className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-primary/20 text-primary-light text-xs font-medium px-3 py-1.5 rounded-lg border border-primary/30">
                          {position.department}
                        </span>
                        <span className="bg-secondary/20 text-secondary text-xs font-medium px-3 py-1.5 rounded-lg border border-secondary/30 flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {position.type}
                        </span>
                        <span className="bg-foreground/10 text-foreground-muted text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-foreground-muted mb-4 leading-relaxed">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.slice(0, 3).map((req) => (
                          <span
                            key={req}
                            className="text-xs text-foreground/70 bg-background px-3 py-1.5 rounded-lg border border-primary/10"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex lg:flex-col gap-3">
                      <Link
                        href={`/contact?subject=careers&position=${position.id}`}
                        className="px-6 py-3 btn-neon rounded-xl font-semibold text-center text-white inline-flex items-center gap-2"
                      >
                        <span className="relative z-10">Apply Now</span>
                        <ArrowRight className="w-4 h-4 relative z-10" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div 
              className="glass-card rounded-2xl p-12 text-center"
              data-aos="fade-up"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary-light" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)]">
                No Open Positions
              </h3>
              <p className="text-foreground-muted max-w-md mx-auto mb-6">
                There are currently no open positions available. However, we&apos;re always interested in connecting with talented individuals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 btn-neon rounded-xl font-semibold text-white"
              >
                Send Your CV
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </section>

      {/* Application Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Hiring Process"
            subtitle="A straightforward process to help us find the best fit for both you and our team."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply", description: "Submit your application and CV through our website." },
              { step: "2", title: "Review", description: "Our HR team reviews your application and qualifications." },
              { step: "3", title: "Interview", description: "Selected candidates are invited for interviews." },
              { step: "4", title: "Offer", description: "Successful candidates receive an offer to join our team." },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 neon-box group-hover:scale-110 transition-transform font-[family-name:var(--font-orbitron)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)]">
                  {item.title}
                </h3>
                <p className="text-foreground-muted">{item.description}</p>
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
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            We are always interested in hearing from talented individuals. Send
            us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button href="/contact" variant="secondary" size="lg" data-aos="fade-up" data-aos-delay="200">
            Send Your CV
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
