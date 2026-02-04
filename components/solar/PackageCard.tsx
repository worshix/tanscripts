"use client";

import { Package, formatPrice, getProductById } from "@/lib/solar/data";
import Button from "@/components/Button";
import { Zap, Clock, CheckCircle, ArrowRight, Settings } from "lucide-react";

interface PackageCardProps {
  pkg: Package;
  onRequestPackage?: (packageId: string, packageName: string) => void;
  aosDelay?: number;
}

export default function PackageCard({
  pkg,
  onRequestPackage,
  aosDelay = 0,
}: PackageCardProps) {
  const isCustom = pkg.capacity_kVA === 0;

  // Get component details with product info
  const componentDetails = pkg.components.map((c) => ({
    ...c,
    product: getProductById(c.productId),
  }));

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden group h-full flex flex-col ${
        isCustom ? "border-secondary/30 hover:border-secondary/60" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Header */}
      <div className={`p-5 ${isCustom ? "gradient-primary" : "bg-background-tertiary"}`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
              {pkg.name}
            </h3>
            {!isCustom && (
              <div className="flex items-center gap-2 text-foreground-muted">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-lg font-semibold text-secondary">{pkg.capacity_kVA} kVA</span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light">
            {isCustom ? (
              <Settings className="w-6 h-6" />
            ) : (
              <Zap className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Components list */}
        {!isCustom && componentDetails.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-3">
              Includes:
            </h4>
            <ul className="space-y-2">
              {componentDetails.map(({ productId, qty, product }) => (
                <li key={productId} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">
                    {qty}x {product?.name || productId}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Custom package description */}
        {isCustom && (
          <div className="mb-5">
            <p className="text-foreground-muted mb-4">
              Need a larger system or specific requirements? We design and install custom solar solutions for:
            </p>
            <ul className="space-y-2">
              {[
                "Industrial facilities",
                "Commercial buildings",
                "Mining operations",
                "Agricultural projects",
                "Grid-tie systems",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lead time */}
        {pkg.leadTimeDays && (
          <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
            <Clock className="w-4 h-4" />
            <span>Installation: {pkg.leadTimeDays} working days</span>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Price */}
        <div className="mb-5 pt-4 border-t border-primary/10">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm text-foreground-muted block">Total Price</span>
              <span className="text-2xl font-bold text-gradient font-[family-name:var(--font-orbitron)]">
                {formatPrice(pkg.price)}
              </span>
            </div>
            {!isCustom && pkg.price > 0 && (
              <span className="text-xs text-foreground-muted">*Installation included</span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Button
          variant={isCustom ? "secondary" : "primary"}
          size="md"
          className="w-full"
          onClick={() => onRequestPackage?.(pkg.id, pkg.name)}
        >
          {isCustom ? "Get Custom Quote" : "Request This Package"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
