"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ProductImageGalleryProps {
  images: {
    main: string;
    gallery: string[];
  };
  productName: string;
}

export default function ProductImageGallery({ 
  images, 
  productName 
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  
  // Combine main image with gallery images
  const allImages = [images.main, ...images.gallery];
  
  // Initial animation on mount
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(containerRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Animate thumbnails with stagger
    tl.fromTo(".thumbnail-item",
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, { scope: containerRef });
  
  // Image transition animation
  useEffect(() => {
    if (imageRef.current) {
      const xOffset = direction === "next" ? 100 : -100;
      
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0, 
          x: xOffset, 
          scale: 0.9,
          rotationY: direction === "next" ? 15 : -15
        },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          rotationY: 0,
          duration: 0.6, 
          ease: "power3.out"
        }
      );
    }
  }, [activeIndex, direction]);
  
  // Fullscreen animation
  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      gsap.fromTo(fullscreenRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isFullscreen]);
  
  const nextImage = () => {
    setDirection("next");
    // Animate out current image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        x: -100,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex((prev) => (prev + 1) % allImages.length);
        }
      });
    } else {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
    }
  };
  
  const prevImage = () => {
    setDirection("prev");
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
        }
      });
    } else {
      setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };
  
  const goToImage = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? "next" : "prev");
    
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex(index);
        }
      });
    } else {
      setActiveIndex(index);
    }
  };

  const imageLabels = ["Main Product View", "Front Panel View", "Rear Connections", "Installation View"];

  return (
    <>
      {/* Main Gallery */}
      <div ref={containerRef} className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-3xl" />
        <div className="relative glass-card rounded-3xl overflow-hidden">
          {/* Main Image Display */}
          <div className="relative aspect-square flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5 overflow-hidden">
            <div 
              ref={imageRef}
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              <Image
                src={allImages[activeIndex]}
                alt={`${productName} - ${imageLabels[activeIndex] || `View ${activeIndex + 1}`}`}
                fill
                className="object-contain p-8"
                priority={activeIndex === 0}
              />
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/50 rounded-full animate-ping" />
              <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-neon-cyan/40 rounded-full animate-pulse" />
            </div>
            
            {/* Image indicator overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <span className="text-sm text-foreground">
                View {activeIndex + 1} of {allImages.length}
              </span>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-light transition-colors" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all group"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-light transition-colors" />
            </button>
            
            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-4 p-3 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all group"
              aria-label="View fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-foreground group-hover:text-primary-light transition-colors" />
            </button>
          </div>
          
          {/* Thumbnail strip */}
          <div ref={thumbnailsRef} className="p-4 bg-background/50 border-t border-primary/10">
            <div className="flex gap-3 justify-center">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`thumbnail-item relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === activeIndex
                      ? "ring-2 ring-primary neon-box scale-110"
                      : "opacity-60 hover:opacity-100 border border-primary/20 hover:border-primary/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image labels */}
        <div className="mt-4 text-center">
          <p className="text-foreground-muted text-sm">
            {imageLabels[activeIndex] || `View ${activeIndex + 1}`}
          </p>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          ref={fullscreenRef}
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-lg flex items-center justify-center p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            title="Close fullscreen"
            aria-label="Close fullscreen"
            className="absolute top-6 right-6 p-3 glass-card rounded-xl hover:border-secondary/50 hover:bg-secondary/10 transition-all group z-10"
          >
            <X className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-square">
            <Image
              src={allImages[activeIndex]}
              alt={`${productName} - Fullscreen`}
              fill
              className="object-contain"
              priority
            />
            
            {/* Navigation in fullscreen */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              title="Previous image"
              aria-label="Previous image"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-4 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all group"
            >
              <ChevronLeft className="w-8 h-8 text-foreground group-hover:text-primary-light transition-colors" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              title="Next image"
              aria-label="Next image"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-4 glass-card rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all group"
            >
              <ChevronRight className="w-8 h-8 text-foreground group-hover:text-primary-light transition-colors" />
            </button>
          </div>
          
          {/* Progress dots in fullscreen */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); goToImage(index); }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-10"
                    : "bg-foreground/30 hover:bg-foreground/50 w-3"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Image label in fullscreen */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <p className="text-foreground text-lg font-medium">
              {imageLabels[activeIndex] || `View ${activeIndex + 1}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
