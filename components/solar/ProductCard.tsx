"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Product, formatPrice } from "@/lib/solar/data";
import Button from "@/components/Button";
import Lightbox from "@/components/solar/Lightbox";

interface ProductCardProps {
  product: Product;
  onAddToQuote?: (product: Product) => void;
  aosDelay?: number;
}

export default function ProductCard({
  product,
  onAddToQuote,
  aosDelay = 0,
}: ProductCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-background-tertiary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/60 to-transparent" />
        
        {/* Category badge */}
        <span className="absolute top-3 left-3 inline-block bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Name */}
        <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Specs (show first 2) */}
        {product.specs && (
          <div className="mb-4 space-y-1">
            {Object.entries(product.specs)
              .slice(0, 2)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-foreground-muted">{key}:</span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gradient font-[family-name:var(--font-orbitron)]">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onAddToQuote?.(product)}
          >
            Buy Now
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLightboxOpen(true)}
            className="px-3"
            aria-label="View product image"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>

    {/* Lightbox for full image view */}
    <Lightbox
      images={[product.image]}
      isOpen={lightboxOpen}
      onClose={() => setLightboxOpen(false)}
      title={product.name}
    />
  </>
  );
}
