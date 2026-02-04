'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProductShowcaseProps {
  productName: string;
  productTagline: string;
  productDescription: string;
  features: string[];
  images: string[];
  productLink: string;
  badge?: string;
}

const ProductShowcase = ({
  productName,
  productTagline,
  productDescription,
  features,
  images,
  productLink,
  badge = "New Release"
}: ProductShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Main timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate the badge
    tl.fromTo('.showcase-badge',
      { opacity: 0, y: -20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    );

    // Animate heading
    tl.fromTo('.showcase-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    // Animate tagline
    tl.fromTo('.showcase-tagline',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // Animate image container with 3D effect
    tl.fromTo('.showcase-image-container',
      { opacity: 0, x: -100, rotationY: -15 },
      { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power3.out" },
      "-=0.4"
    );

    // Animate text content
    tl.fromTo('.showcase-text',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Animate features with stagger
    tl.fromTo('.showcase-feature',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

    // Animate CTA button
    tl.fromTo('.showcase-cta',
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
      "-=0.2"
    );

    // Floating animation for the main image
    gsap.to('.showcase-main-image', {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Glow pulse animation
    gsap.to('.showcase-glow', {
      opacity: 0.8,
      scale: 1.1,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

  }, { scope: containerRef });

  const handleImageChange = (index: number) => {
    if (index === activeImage) return;
    
    const direction = index > activeImage ? 1 : -1;
    
    // Animate out current image
    gsap.to('.showcase-main-image', {
      opacity: 0,
      x: -50 * direction,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActiveImage(index);
        // Animate in new image
        gsap.fromTo('.showcase-main-image',
          { opacity: 0, x: 50 * direction, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  };

  const nextImage = () => {
    handleImageChange((activeImage + 1) % images.length);
  };

  const prevImage = () => {
    handleImageChange((activeImage - 1 + images.length) % images.length);
  };

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      <div className="showcase-glow absolute top-1/2 left-1/4 w-96 h-96 bg-neon-500/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="showcase-badge inline-flex items-center gap-2 px-4 py-2 bg-neon-500/20 border border-neon-500/50 rounded-full text-neon-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="showcase-heading text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white">
          Introducing <span className="text-gradient">{productName}</span>
        </h2>
        
        <p className="showcase-tagline text-xl md:text-2xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          {productTagline}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Gallery */}
          <div ref={imageContainerRef} className="showcase-image-container relative">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-900">
                <Image
                  src={images[activeImage]}
                  alt={`${productName} view ${activeImage + 1}`}
                  fill
                  className="showcase-main-image object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                title="Previous image"
                aria-label="Previous image"
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-900/80 border border-neon-500/30 flex items-center justify-center text-white hover:bg-neon-500/20 hover:border-neon-500 transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={nextImage}
                title="Next image"
                aria-label="Next image"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-900/80 border border-neon-500/30 flex items-center justify-center text-white hover:bg-neon-500/20 hover:border-neon-500 transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-500/50 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-500/50 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-500/50 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-500/50 rounded-br-xl" />
            </div>

            {/* Thumbnail navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  title={`View image ${index + 1}`}
                  aria-label={`View image ${index + 1}`}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index 
                      ? 'border-neon-500 scale-110 shadow-lg shadow-neon-500/30' 
                      : 'border-gray-700 hover:border-gray-500 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="showcase-text">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {productDescription}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="showcase-feature flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-gray-800 hover:border-neon-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-500/20 flex items-center justify-center group-hover:bg-neon-500/30 transition-colors">
                    {index === 0 && <Zap className="w-5 h-5 text-neon-400" />}
                    {index === 1 && <Shield className="w-5 h-5 text-neon-400" />}
                    {index === 2 && <Sparkles className="w-5 h-5 text-neon-400" />}
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href={productLink}
              className="showcase-cta inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-500 to-neon-600 rounded-xl text-dark-950 font-bold text-lg hover:shadow-lg hover:shadow-neon-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              Explore {productName}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
