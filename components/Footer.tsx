import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contactConfig, formatPhoneLink, formatEmailLink } from "@/config/contact";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "All Services" },
    { href: "/products", label: "Products" },
    { href: "/training", label: "Training" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-primary/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50">
                <Image src="/zimtech_new_logo.svg" alt="Zimtech Logo" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-gradient font-[family-name:var(--font-orbitron)]">
                  ZIMTECH
                </span>
                <span className="text-xs text-foreground-muted tracking-widest uppercase">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-md">
              Engineering excellence and innovation. Delivering cutting-edge
              solutions for industrial automation, embedded systems, and
              mechanical design.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground-muted">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{contactConfig.address.full}</span>
              </div>
              <a href={formatEmailLink(contactConfig.email.info)} className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>{contactConfig.email.info}</span>
              </a>
              <a href={`tel:${formatPhoneLink(contactConfig.phone.primary)}`} className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>{contactConfig.phone.primary}</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5 font-[family-name:var(--font-orbitron)]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary-light transition-colors text-sm link-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5 font-[family-name:var(--font-orbitron)]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary-light transition-colors text-sm link-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5 font-[family-name:var(--font-orbitron)]">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary-light transition-colors text-sm link-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Zimtech Engineering. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={contactConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-primary/20 flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary hover:bg-primary/10"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={contactConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-primary/20 flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary hover:bg-primary/10"
              aria-label="Follow us on GitHub"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-foreground text-sm">
            Created with <span className="text-red-500">❤️</span> by{" "}
            <a
              href="https://www.pixelcrafte.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary font-medium"
            >
              Pixel Crafte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
