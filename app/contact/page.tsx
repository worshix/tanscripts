"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { contactConfig, formatPhoneLink } from "@/config/contact";

const contactInfo = [
  {
    title: "Address",
    content: contactConfig.address.full,
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Phone",
    content: `${contactConfig.phone.primary}\n${contactConfig.phone.secondary}`,
    icon: <Phone className="w-6 h-6" />,
    href: `tel:${formatPhoneLink(contactConfig.phone.primary)}`,
  },
  {
    title: "Hours",
    content: `${contactConfig.hours.weekdays}\n${contactConfig.hours.saturday}`,
    icon: <Clock className="w-6 h-6" />,
  },
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including manufacturing, automotive, pharmaceutical, food & beverage, mining, utilities, and logistics.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote by messaging us on WhatsApp or calling our office directly — it's the fastest way to reach us.",
  },
  {
    question: "Do you offer on-site services?",
    answer:
      "Yes, we provide on-site services including installation, commissioning, training, and maintenance support throughout Zimbabwe and the region.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. After initial consultation, we provide a detailed project plan with estimated milestones and completion dates.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a question or need a quote? Get in touch with our team and
            we&apos;ll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* WhatsApp CTA */}
            <div className="lg:col-span-2">
              <div
                className="glass-card rounded-2xl p-8 md:p-12 flex flex-col items-center text-center"
                data-aos="fade-right"
              >
                <div className="w-20 h-20 rounded-2xl bg-green-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                  Chat With Us on <span className="text-gradient">WhatsApp</span>
                </h2>
                <p className="text-foreground-muted max-w-md mb-8">
                  We respond fastest on WhatsApp. Message us directly for quotes,
                  inquiries, or support and we&apos;ll get right back to you.
                </p>
                <a
                  href={contactConfig.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 px-8 py-4 text-base tracking-wider bg-green-500 hover:bg-green-600 text-white hover:shadow-lg hover:shadow-green-500/50 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="glass-card rounded-2xl p-8" data-aos="fade-left" data-aos-delay="100">
                <h2 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-orbitron)]">
                  Contact Info
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0 group-hover:neon-box transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground-muted whitespace-pre-line text-sm">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card rounded-2xl p-6" data-aos="fade-left" data-aos-delay="200">
                <h3 className="font-semibold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">Our Location</h3>
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <div className="text-center text-foreground-muted">
                    <MapPin className="w-10 h-10 mx-auto mb-2 text-primary" />
                    <p className="text-sm">Map View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-background-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-orbitron)]"
            data-aos="fade-up"
          >
            <span className="text-gradient">Frequently Asked</span> Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="glass-card rounded-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground-muted flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-foreground-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
