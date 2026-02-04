import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import ProductImageGallery from "./ProductImageGallery";
import { products } from "@/lib/data/products.js";
import { 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  Download, 
  FileText, 
  Box, 
  ShoppingCart,
  ArrowLeft,
  Sparkles,
  Shield,
  Zap,
  Settings,
  Database,
  Activity,
  Package,
  DollarSign,
  Eye,
  Layers
} from "lucide-react";

// Map category to icon
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Controllers": Cpu,
  "Automation": Settings,
  "Sensors": Activity,
  "Motion Control": Zap,
  "Power Systems": Shield,
  "Data Acquisition": Database,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products[id];
  if (!product) {
    return { title: "Product Not Found | Zimtech Engineering" };
  }
  return {
    title: `${product.name} | Products | Zimtech Engineering`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id];

  if (!product) {
    notFound();
  }

  const CategoryIcon = categoryIcons[product.category] || Box;

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-background-secondary border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-foreground-muted hover:text-primary-light transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Products
            </Link>
            <span className="text-foreground-muted">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 gradient-hero grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-primary/20 text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/30">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="bg-secondary/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 border border-secondary">
                    <Sparkles className="w-3 h-3" />
                    New
                  </span>
                )}
                {product.inStock && (
                  <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-500/30">
                    In Stock
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)]">
                {product.name}
              </h1>
              
              <p className="text-xl text-secondary font-semibold">{product.tagline}</p>
              
              <p className="text-lg text-foreground-muted leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="glass-card rounded-2xl p-6 inline-block">
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground-muted text-sm">Starting at</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <DollarSign className="w-6 h-6 text-secondary" />
                  <span className="text-4xl font-bold text-gradient font-[family-name:var(--font-orbitron)]">
                    {product.price.base}
                  </span>
                  <span className="text-foreground-muted">{product.price.currency}</span>
                </div>
                <p className="text-sm text-foreground-muted mt-2">{product.price.note}</p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-foreground-muted">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span>Warranty: {product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground-muted">
                  <Package className="w-4 h-4 text-secondary" />
                  <span>Lead Time: {product.leadTime}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button href="/contact?subject=quote&product=${product.id}" variant="primary" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Product Image Gallery */}
            <div className="relative">
              <ProductImageGallery 
                images={product.images}
                productName={product.name}
              />
              
              {/* 3D View Button below gallery */}
              <div className="mt-6 text-center">
                <Link
                  href={product.view3D}
                  className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl hover:border-primary/50 transition-all group"
                >
                  <Eye className="w-5 h-5 text-primary-light" />
                  <span className="text-foreground group-hover:text-primary-light transition-colors">View in 3D</span>
                  <Layers className="w-4 h-4 text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 bg-background-secondary border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={product.downloads.datasheet}
              className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-xl hover:border-secondary/50 transition-all group"
              download
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">Download Datasheet</p>
                <p className="text-sm text-foreground-muted">PDF Document</p>
              </div>
              <Download className="w-5 h-5 text-foreground-muted group-hover:text-secondary transition-colors" />
            </a>
            
            <a
              href={product.downloads.stepFile}
              className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
              download
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Box className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary-light transition-colors">Download STEP File</p>
                <p className="text-sm text-foreground-muted">3D CAD Model</p>
              </div>
              <Download className="w-5 h-5 text-foreground-muted group-hover:text-primary-light transition-colors" />
            </a>
            
            <a
              href={product.downloads.manual}
              className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-xl hover:border-cyan-500/50 transition-all group"
              download
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">User Manual</p>
                <p className="text-sm text-foreground-muted">PDF Document</p>
              </div>
              <Download className="w-5 h-5 text-foreground-muted group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Product Overview
                </h2>
                <div className="space-y-4">
                  {product.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-foreground-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
                  Technical Specifications
                </h2>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr 
                          key={spec.label} 
                          className={`${index % 2 === 0 ? 'bg-primary/5' : ''} border-b border-primary/10 last:border-0`}
                        >
                          <td className="px-6 py-4 text-foreground-muted font-medium">{spec.label}</td>
                          <td className="px-6 py-4 text-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Actions Card */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                    Get Started
                  </h3>
                  <div className="space-y-3">
                    <Button href={`/contact?subject=quote&product=${product.id}`} variant="primary" className="w-full">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Request Quote
                      </span>
                    </Button>
                    <Button href="/contact" variant="outline" className="w-full">
                      Talk to an Expert
                    </Button>
                    <Link
                      href={product.view3D}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 glass-card rounded-xl hover:border-primary/50 transition-all"
                    >
                      <Eye className="w-4 h-4 text-primary-light" />
                      <span className="text-foreground">3D Product View</span>
                    </Link>
                  </div>
                </div>

                {/* Product Summary */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                    Product Summary
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-foreground-muted">Category</span>
                      <span className="text-foreground">{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-foreground-muted">Starting Price</span>
                      <span className="text-secondary font-semibold">${product.price.base}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-foreground-muted">Warranty</span>
                      <span className="text-foreground">{product.warranty}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-foreground-muted">Lead Time</span>
                      <span className="text-foreground">{product.leadTime}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-foreground-muted">Availability</span>
                      <span className={product.inStock ? "text-green-400" : "text-yellow-400"}>
                        {product.inStock ? "In Stock" : "Pre-order"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Related Downloads */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
                    Downloads
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href={product.downloads.datasheet} 
                      className="flex items-center gap-3 text-sm text-foreground-muted hover:text-secondary transition-colors"
                      download
                    >
                      <FileText className="w-4 h-4" />
                      Datasheet (PDF)
                    </a>
                    <a 
                      href={product.downloads.stepFile}
                      className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary-light transition-colors"
                      download
                    >
                      <Box className="w-4 h-4" />
                      STEP File (CAD)
                    </a>
                    <a 
                      href={product.downloads.manual}
                      className="flex items-center gap-3 text-sm text-foreground-muted hover:text-cyan-400 transition-colors"
                      download
                    >
                      <FileText className="w-4 h-4" />
                      User Manual (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Get in touch with our sales team to discuss how the {product.name} can benefit your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`/contact?subject=quote&product=${product.id}`} variant="secondary" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/products" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View All Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
