import { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { courses } from "@/lib/data/training.js";
import { siteConfig } from "@/config/site";
import { Clock, BarChart3, DollarSign, CheckCircle, ArrowRight, Info, HelpCircle, Handshake, MapPin, Zap } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) {
    return { title: "Course Not Found" };
  }
  
  const url = `${siteConfig.url}/training/${slug}`;
  
  return {
    title: course.title,
    description: course.description,
    keywords: [course.title, "training Zimbabwe", "engineering courses Harare", "professional development"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${course.title} | Training | Zimtech Engineering`,
      description: course.description,
      url,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses[slug];

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-[family-name:var(--font-orbitron)]">
              {course.title}
            </h1>
            <p className="text-xl text-foreground-muted mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="glass-card backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-foreground-muted text-sm">Duration:</span>{" "}
                <span className="font-semibold text-foreground">{course.duration}</span>
              </span>
              <span className="glass-card backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-secondary" />
                <span className="text-foreground-muted text-sm">Level:</span>{" "}
                <span className="font-semibold text-foreground">{course.level}</span>
              </span>
              <span className="glass-card backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                <span className="text-foreground-muted text-sm">Price:</span>{" "}
                <span className="font-semibold text-foreground">{course.price}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                  Course Overview
                </h2>
                <p className="text-foreground-muted leading-relaxed">{course.overview}</p>
              </div>

              {/* Training Partner */}
              {course.partner && (
                <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-5">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)]">
                      Delivered in Partnership with {course.partner.name}
                    </h3>
                    <p className="text-foreground-muted mb-3">{course.partner.description}</p>
                    <p className="flex items-center gap-2 text-sm text-foreground/80">
                      <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                      {course.partner.address}
                    </p>
                  </div>
                </div>
              )}

              {/* Objectives */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Learning Objectives
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {course.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground/80">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Outline */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Course Outline
                </h2>
                <div className="space-y-4">
                  {course.outline.map((section) => (
                    <div
                      key={section.day}
                      className="glass-card rounded-2xl p-6 group"
                    >
                      <h3 className="font-bold text-primary-light mb-4 font-[family-name:var(--font-orbitron)]">
                        {section.day}
                      </h3>
                      <ul className="space-y-3">
                        {section.topics.map((topic) => (
                          <li key={topic} className="flex items-center text-foreground/80 group/item">
                            <ArrowRight className="w-4 h-4 text-secondary mr-3 group-hover/item:translate-x-1 transition-transform" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Prerequisites
                </h2>
                <ul className="space-y-3">
                  {course.prerequisites.map((prereq) => (
                    <li key={prereq} className="flex items-center text-foreground/80">
                      <Info className="w-5 h-5 text-primary-light mr-3 flex-shrink-0" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional Add-Ons */}
              {course.addOns && course.addOns.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                    Optional Add-Ons
                  </h2>
                  <p className="text-foreground-muted mb-4">
                    The curriculum can be extended with the following modules on request:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {course.addOns.map((addOn) => (
                      <li key={addOn} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/40 transition-colors">
                          <Zap className="w-4 h-4 text-primary-light" />
                        </div>
                        <span className="text-foreground/80">{addOn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-5 font-[family-name:var(--font-orbitron)]">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4 mb-8">
                  {course.includes.map((item) => (
                    <li key={item} className="flex items-start text-foreground/80 group">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="primary" className="w-full mb-3">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
                <Button href="/contact" variant="outline" className="w-full">
                  Request More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
            <HelpCircle className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
            Have Questions About This Course?
          </h2>
          <p className="text-foreground-muted mb-10 text-lg">
            Our training team is here to help you choose the right course and
            answer any questions you may have.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </section>
    </>
  );
}
