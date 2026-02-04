"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Zap } from "lucide-react";
import { Installation } from "@/lib/solar/data";
import Lightbox from "./Lightbox";

interface SolarGalleryProps {
  installations: Installation[];
}

export default function SolarGallery({ installations }: SolarGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedInstallation, setSelectedInstallation] = useState<Installation | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (installation: Installation, imageIndex: number = 0) => {
    setSelectedInstallation(installation);
    setSelectedImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedInstallation(null);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {installations.map((installation, index) => (
          <div
            key={installation.id}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
              // Make some items span 2 columns/rows for bento effect
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            } ${index === 3 ? "sm:col-span-2 md:col-span-1" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            onClick={() => openLightbox(installation)}
          >
            <div
              className={`relative w-full ${
                index === 0 ? "h-80 md:h-full min-h-[320px]" : "h-48 sm:h-56"
              }`}
            >
              {/* Image */}
              <Image
                src={installation.images[0]}
                alt={installation.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Image count badge */}
              {installation.images.length > 1 && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-background/80 border border-primary/20 text-xs text-foreground backdrop-blur-sm">
                  +{installation.images.length - 1} photos
                </div>
              )}

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                  {installation.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 text-sm text-foreground-muted">
                  {/* Capacity */}
                  <div className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-secondary" />
                    <span>{installation.capacity_kVA} kVA</span>
                  </div>
                  
                  {/* Location */}
                  {installation.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary-light" />
                      <span className="truncate max-w-[120px]">{installation.location}</span>
                    </div>
                  )}
                  
                  {/* Date */}
                  {installation.completedAt && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>{formatDate(installation.completedAt)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedInstallation && (
        <Lightbox
          images={selectedInstallation.images}
          initialIndex={selectedImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          title={selectedInstallation.title}
        />
      )}
    </>
  );
}
