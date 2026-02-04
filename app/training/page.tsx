import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { Cpu, Settings, Cog, CheckCircle, ArrowRight, Award, Users, GraduationCap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Training | Zimtech Engineering",
  description:
    "Professional training programs in PLC programming, embedded systems, and mechanical design for industrial automation.",
};

const courses = [
  {
    id: "plc",
    title: "PLC Training",
    duration: "5 Days",
    level: "Beginner to Advanced",
    description:
      "Comprehensive PLC programming course covering ladder logic, structured text, and industrial communication protocols.",
    topics: [
      "PLC fundamentals and architecture",
      "Ladder logic programming",
      "Structured text programming",
      "HMI integration",
      "Industrial communication protocols",
      "Troubleshooting and diagnostics",
    ],
    Icon: Cpu,
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Training",
    duration: "10 Days",
    level: "Intermediate",
    description:
      "In-depth training on embedded system design, microcontroller programming, and IoT device development.",
    topics: [
      "Microcontroller architecture",
      "C/C++ for embedded systems",
      "RTOS fundamentals",
      "Sensor integration",
      "Communication protocols (I2C, SPI, UART)",
      "IoT connectivity",
    ],
    Icon: Settings,
  },
  {
    id: "mechanical-design-automation",
    title: "Mechanical Design for Industrial Automation",
    duration: "5 Days",
    level: "Intermediate",
    description:
      "Learn mechanical design principles for automation systems, including CAD tools and manufacturing considerations.",
    topics: [
      "CAD fundamentals (SolidWorks/AutoCAD)",
      "Design for manufacturing",
      "Material selection",
      "Motion system design",
      "Pneumatics and hydraulics",
      "Assembly and integration",
    ],
    Icon: Cog,
  },
];

const benefits = [
  {
    title: "Hands-On Learning",
    description: "Practice with real industrial equipment and software.",
    Icon: BookOpen,
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced industry professionals.",
    Icon: Users,
  },
  {
    title: "Certificate",
    description: "Receive a recognized certificate upon completion.",
    Icon: Award,
  },
  {
    title: "Small Class Sizes",
    description: "Personalized attention with limited class sizes.",
    Icon: GraduationCap,
  },
];

export default function TrainingPage() {
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
            Professional <span className="text-gradient">Training</span> Programs
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Enhance your skills with our comprehensive training courses in
            industrial automation, embedded systems, and mechanical design.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background-secondary border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start space-x-4 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-secondary/30 group-hover:neon-box transition-all">
                  <benefit.Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-orbitron)]">{benefit.title}</h3>
                  <p className="text-sm text-foreground-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Available Courses"
            subtitle="Choose from our range of professional training programs designed for industry professionals."
          />
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="glass-card rounded-2xl overflow-hidden group"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="grid lg:grid-cols-3">
                  <div className="relative bg-gradient-to-br from-primary/20 to-secondary/10 p-8 flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className="relative w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4 neon-box group-hover:scale-110 transition-transform">
                      <course.Icon className="w-10 h-10" />
                    </div>
                    <h3 className="relative text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)]">
                      {course.title}
                    </h3>
                    <div className="relative flex flex-wrap gap-2 justify-center">
                      <span className="bg-primary/20 text-primary-light text-sm font-medium px-4 py-1.5 rounded-full border border-primary/30">
                        {course.duration}
                      </span>
                      <span className="bg-secondary/20 text-secondary text-sm font-medium px-4 py-1.5 rounded-full border border-secondary/30">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <p className="text-foreground-muted mb-6 leading-relaxed">{course.description}</p>
                    <h4 className="font-semibold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                      Topics Covered:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 mb-6">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-sm text-foreground/80 group/item">
                          <ArrowRight className="w-4 h-4 text-secondary mr-2 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/training/${course.id}`}
                      className="inline-flex items-center link-neon font-medium"
                    >
                      View Course Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)]">
                Corporate <span className="text-gradient">Training</span> Solutions
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed">
                We offer customized training programs for organizations looking
                to upskill their workforce. Our corporate training solutions are
                tailored to meet your specific needs and can be delivered
                on-site or at our training facilities.
              </p>
              <ul className="space-y-4">
                {[
                  "Customized curriculum based on your needs",
                  "Flexible scheduling options",
                  "On-site or remote training",
                  "Group discounts available",
                  "Post-training support",
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
                Request Corporate Training
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl h-80 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mb-6 neon-box">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <p className="text-foreground-muted">Corporate Training</p>
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
            Ready to Enhance Your Skills?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-aos="fade-up" data-aos-delay="100">
            Enroll in one of our training programs today and take your career to
            the next level.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
