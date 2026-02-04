"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/solar-installation", label: "Solar" },
  { href: "/training", label: "Training" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50">
              <Zap className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full shadow-sm shadow-primary" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-neon relative px-6 py-3 rounded-xl font-semibold text-white text-sm tracking-wide overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/30"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-primary/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-xl font-medium transition-all hover:pl-6 border border-transparent hover:border-primary/20"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-neon block px-6 py-3 rounded-xl font-semibold text-white text-center text-sm"
              >
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
