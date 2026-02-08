"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, CheckCircle, Sparkles, Settings, Activity, Zap, Shield, Database, Package } from "lucide-react";
import { products as productsData } from "@/lib/data/products.js";

// Transform products record to array for display
const products = Object.values(productsData).map(product => ({
  id: product.id,
  name: product.name,
  category: product.category,
  image: product.images.main,
  description: product.description,
  features: product.features.slice(0, 4),
  price: product.price.base,
  isNew: product.isNew,
}));

// Extract unique categories from products data
const categories = ["All", ...Array.from(new Set(Object.values(productsData).map(p => p.category)))];

// Get icon based on category
function getCategoryIcon(category: string) {
  switch (category) {
    case "Controllers": return Cpu;
    case "Automation": return Settings;
    case "Sensors": return Activity;
    case "Motion Control": return Zap;
    case "Power Systems": return Shield;
    case "Data Acquisition": return Database;
    default: return Package;
  }
}

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-background-secondary border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  category === activeCategory
                    ? "btn-neon text-white"
                    : "glass-card text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 text-foreground-muted">
            Showing <span className="text-foreground font-semibold">{filteredProducts.length}</span> 
            {filteredProducts.length === 1 ? " product" : " products"}
            {activeCategory !== "All" && (
              <span> in <span className="text-primary-light font-semibold">{activeCategory}</span></span>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const CategoryIcon = getCategoryIcon(product.category);
              return (
                <div
                  key={product.id}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <span className="absolute top-4 right-4 bg-secondary/90 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-secondary z-10">
                        <Sparkles className="w-3 h-3" />
                        New
                      </span>
                    )}
                    {/* Price badge */}
                    <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-primary/20 z-10">
                      <span className="text-xs text-foreground-muted">From </span>
                      <span className="text-secondary font-bold">${product.price}</span>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-primary/30">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-primary-light transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-foreground-muted mb-5 leading-relaxed">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 pt-4 border-t border-primary/10">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 text-center px-4 py-2.5 btn-neon rounded-xl text-white text-sm font-semibold group/btn"
                      >
                        <span className="relative z-10 group-hover/btn:text-white transition-colors">Learn More</span>
                      </Link>
                      <Link 
                        href={`/products/${product.id}#downloads`}
                        className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground-muted border border-primary/20 hover:border-secondary hover:text-secondary transition-all"
                      >
                        Datasheet
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No results message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-foreground-muted mb-6">No products match the selected category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="btn-neon px-6 py-2 rounded-xl text-white"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
