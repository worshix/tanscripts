/**
 * Solar Installation Data
 * Static data for solar products, packages, and installations
 */

export type ProductCategory = 
  | "Inverter" 
  | "Solar Panel" 
  | "Battery" 
  | "Protection Kit" 
  | "Rail" 
  | "Geyser";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  slug: string;
  price: number;
  currency?: string;
  image: string;
  specs?: Record<string, string>;
}

export interface Installation {
  id: string;
  title: string;
  location?: string;
  capacity_kVA: number;
  completedAt?: string;
  images: string[];
}

export interface Package {
  id: string;
  name: string;
  capacity_kVA: number;
  components: Array<{ productId: string; qty: number }>;
  price: number;
  leadTimeDays?: number;
}

// Sample Products
export const solarProducts: Product[] = [
  // Inverters
  {
    id: "inv-1",
    category: "Inverter",
    name: "Deye 5kW Hybrid Inverter",
    slug: "deye-5kw-hybrid-inverter",
    price: 1200,
    image: "/images/solar/inverter-deye-5kw.jpg",
    specs: {
      "Power Output": "5kW",
      "Voltage": "48V",
      "MPPT Channels": "2",
      "Warranty": "5 Years",
    },
  },
  {
    id: "inv-2",
    category: "Inverter",
    name: "Sunsynk 8kW Hybrid Inverter",
    slug: "sunsynk-8kw-hybrid-inverter",
    price: 1850,
    image: "/images/solar/inverter-sunsynk-8kw.jpg",
    specs: {
      "Power Output": "8kW",
      "Voltage": "48V",
      "MPPT Channels": "2",
      "Warranty": "5 Years",
    },
  },
  {
    id: "inv-3",
    category: "Inverter",
    name: "Growatt 3kW Inverter",
    slug: "growatt-3kw-inverter",
    price: 750,
    image: "/images/solar/inverter-growatt-3kw.jpg",
    specs: {
      "Power Output": "3kW",
      "Voltage": "24V/48V",
      "MPPT Channels": "1",
      "Warranty": "5 Years",
    },
  },
  // Solar Panels
  {
    id: "panel-1",
    category: "Solar Panel",
    name: "JA Solar 550W Mono Panel",
    slug: "ja-solar-550w-mono-panel",
    price: 180,
    image: "/images/solar/panel-ja-550w.jpg",
    specs: {
      "Wattage": "550W",
      "Type": "Monocrystalline",
      "Efficiency": "21.3%",
      "Warranty": "25 Years",
    },
  },
  {
    id: "panel-2",
    category: "Solar Panel",
    name: "Canadian Solar 450W Panel",
    slug: "canadian-solar-450w-panel",
    price: 150,
    image: "/images/solar/panel-canadian-450w.jpg",
    specs: {
      "Wattage": "450W",
      "Type": "Monocrystalline",
      "Efficiency": "20.5%",
      "Warranty": "25 Years",
    },
  },
  // Batteries
  {
    id: "bat-1",
    category: "Battery",
    name: "Pylontech US3000C 3.5kWh",
    slug: "pylontech-us3000c",
    price: 950,
    image: "/images/solar/battery-pylontech-3.5kwh.jpg",
    specs: {
      "Capacity": "3.5kWh",
      "Type": "LiFePO4",
      "Cycles": "6000+",
      "Warranty": "10 Years",
    },
  },
  {
    id: "bat-2",
    category: "Battery",
    name: "Hubble Lithium AM-2 5.5kWh",
    slug: "hubble-am2-5.5kwh",
    price: 1400,
    image: "/images/solar/battery-hubble-5.5kwh.jpg",
    specs: {
      "Capacity": "5.5kWh",
      "Type": "LiFePO4",
      "Cycles": "6000+",
      "Warranty": "10 Years",
    },
  },
  // Protection Kits
  {
    id: "prot-1",
    category: "Protection Kit",
    name: "Solar DC Surge Protector Kit",
    slug: "solar-dc-surge-protector-kit",
    price: 120,
    image: "/images/solar/protection-kit.jpg",
    specs: {
      "DC Rating": "1000V",
      "AC Rating": "275V",
      "Components": "SPD, Fuses, MCB",
      "Standard": "IEC 61643",
    },
  },
  // Rails
  {
    id: "rail-1",
    category: "Rail",
    name: "Aluminum Mounting Rail Set",
    slug: "aluminum-mounting-rail-set",
    price: 85,
    image: "/images/solar/rail-aluminum.jpg",
    specs: {
      "Material": "Aluminum 6005-T5",
      "Length": "4.2m per rail",
      "Load": "60kg/m",
      "Warranty": "15 Years",
    },
  },
  // Solar Geysers
  {
    id: "geyser-1",
    category: "Geyser",
    name: "Solar Geyser 200L Pressurized",
    slug: "solar-geyser-200l-pressurized",
    price: 850,
    image: "/images/solar/geyser-200l.jpg",
    specs: {
      "Capacity": "200L",
      "Type": "Pressurized",
      "Tubes": "20 Vacuum Tubes",
      "Warranty": "5 Years",
    },
  },
  {
    id: "geyser-2",
    category: "Geyser",
    name: "Solar Geyser 300L Flat Panel",
    slug: "solar-geyser-300l-flat-panel",
    price: 1200,
    image: "/images/solar/geyser-300l-flat.jpg",
    specs: {
      "Capacity": "300L",
      "Type": "Flat Panel",
      "Collectors": "2 x 2m²",
      "Warranty": "5 Years",
    },
  },
];

// Sample Installations (past projects)
export const solarInstallations: Installation[] = [
  {
    id: "inst-1",
    title: "Residential Solar - Borrowdale",
    location: "Borrowdale, Harare",
    capacity_kVA: 5,
    completedAt: "2025-12-15",
    images: [
      "/images/solar/installation-1-1.jpg",
      "/images/solar/installation-1-2.jpg",
      "/images/solar/installation-1-3.jpg",
    ],
  },
  {
    id: "inst-2",
    title: "Commercial Installation - Industrial Park",
    location: "Graniteside, Harare",
    capacity_kVA: 20,
    completedAt: "2025-11-20",
    images: [
      "/images/solar/installation-2-1.jpg",
      "/images/solar/installation-2-2.jpg",
    ],
  },
  {
    id: "inst-3",
    title: "Farm Solar System",
    location: "Mazowe",
    capacity_kVA: 10,
    completedAt: "2025-10-05",
    images: [
      "/images/solar/installation-3-1.jpg",
      "/images/solar/installation-3-2.jpg",
      "/images/solar/installation-3-3.jpg",
    ],
  },
  {
    id: "inst-4",
    title: "Office Building - CBD",
    location: "Harare CBD",
    capacity_kVA: 15,
    completedAt: "2025-09-18",
    images: [
      "/images/solar/installation-4-1.jpg",
      "/images/solar/installation-4-2.jpg",
    ],
  },
  {
    id: "inst-5",
    title: "Residential Backup System",
    location: "Mount Pleasant, Harare",
    capacity_kVA: 3.2,
    completedAt: "2025-08-22",
    images: [
      "/images/solar/installation-5-1.jpg",
    ],
  },
  {
    id: "inst-6",
    title: "School Solar Project",
    location: "Chitungwiza",
    capacity_kVA: 8,
    completedAt: "2025-07-10",
    images: [
      "/images/solar/installation-6-1.jpg",
      "/images/solar/installation-6-2.jpg",
    ],
  },
];

// Packages (pre-configured systems)
export const solarPackages: Package[] = [
  {
    id: "pkg-1.5kva",
    name: "Essential Backup",
    capacity_kVA: 1.5,
    components: [
      { productId: "inv-3", qty: 1 },
      { productId: "panel-2", qty: 2 },
      { productId: "bat-1", qty: 1 },
      { productId: "prot-1", qty: 1 },
      { productId: "rail-1", qty: 1 },
    ],
    price: 2100,
    leadTimeDays: 5,
  },
  {
    id: "pkg-3.2kva",
    name: "Home Starter",
    capacity_kVA: 3.2,
    components: [
      { productId: "inv-3", qty: 1 },
      { productId: "panel-1", qty: 4 },
      { productId: "bat-1", qty: 2 },
      { productId: "prot-1", qty: 1 },
      { productId: "rail-1", qty: 2 },
    ],
    price: 3850,
    leadTimeDays: 7,
  },
  {
    id: "pkg-5kva",
    name: "Home Power",
    capacity_kVA: 5,
    components: [
      { productId: "inv-1", qty: 1 },
      { productId: "panel-1", qty: 6 },
      { productId: "bat-2", qty: 2 },
      { productId: "prot-1", qty: 1 },
      { productId: "rail-1", qty: 3 },
    ],
    price: 6200,
    leadTimeDays: 7,
  },
  {
    id: "pkg-10kva",
    name: "Power Pro",
    capacity_kVA: 10,
    components: [
      { productId: "inv-2", qty: 1 },
      { productId: "panel-1", qty: 12 },
      { productId: "bat-2", qty: 4 },
      { productId: "prot-1", qty: 2 },
      { productId: "rail-1", qty: 6 },
    ],
    price: 12500,
    leadTimeDays: 10,
  },
  {
    id: "pkg-20kva",
    name: "Commercial",
    capacity_kVA: 20,
    components: [
      { productId: "inv-2", qty: 2 },
      { productId: "panel-1", qty: 24 },
      { productId: "bat-2", qty: 8 },
      { productId: "prot-1", qty: 4 },
      { productId: "rail-1", qty: 12 },
    ],
    price: 24000,
    leadTimeDays: 14,
  },
  {
    id: "pkg-custom",
    name: "Custom / Industrial",
    capacity_kVA: 0, // 0 indicates custom
    components: [],
    price: 0, // Price on request
    leadTimeDays: undefined,
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return solarProducts.find((p) => p.id === id);
}

// Helper function to get package components with product details
export function getPackageWithProducts(pkg: Package) {
  return {
    ...pkg,
    componentDetails: pkg.components.map((c) => ({
      ...c,
      product: getProductById(c.productId),
    })),
  };
}

// Format price for display
export function formatPrice(price: number, currency: string = "USD"): string {
  if (price === 0) return "Price on Request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Get all unique categories
export function getCategories(): ProductCategory[] {
  return Array.from(new Set(solarProducts.map((p) => p.category)));
}
