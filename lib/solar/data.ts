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
  | "Geyser"
  | "Accessory";

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

// Solar Products from CSV price list
export const solarProducts: Product[] = [
  // Solar Panels
  {
    id: "panel-400w-hv",
    category: "Solar Panel",
    name: "Solar Panel 400W High Voltage",
    slug: "solar-panel-400w-high-voltage",
    price: 100,
    image: "/images/solar-products/solar-410w.webp",
    specs: { Wattage: "400W", Type: "High Voltage" },
  },
  {
    id: "panel-440w",
    category: "Solar Panel",
    name: "Solar Panel 440W",
    slug: "solar-panel-440w",
    price: 70,
    image: "/images/solar-products/solar-440w.webp",
    specs: { Wattage: "440W" },
  },
  {
    id: "panel-450w",
    category: "Solar Panel",
    name: "Solar Panel 450W",
    slug: "solar-panel-450w",
    price: 75,
    image: "/images/solar-products/solar-450w.webp",
    specs: { Wattage: "450W" },
  },
  {
    id: "panel-550w",
    category: "Solar Panel",
    name: "Solar Panel 550W",
    slug: "solar-panel-550w",
    price: 100,
    image: "/images/solar-products/solar-550w.webp",
    specs: { Wattage: "550W" },
  },
  {
    id: "panel-650w",
    category: "Solar Panel",
    name: "Solar Panel 650W",
    slug: "solar-panel-650w",
    price: 110,
    image: "/images/solar-products/solar-650w.webp",
    specs: { Wattage: "650W" },
  },
  // SUMRY Inverters
  {
    id: "inv-sumry-1kw",
    category: "Inverter",
    name: "SUMRY Inverter 1.0KW",
    slug: "sumry-inverter-1kw",
    price: 140,
    image: "/images/solar-products/inverter-sumry-1kw.webp",
    specs: { "Power Output": "1.0KW", Brand: "SUMRY" },
  },
  {
    id: "inv-sumry-2kva",
    category: "Inverter",
    name: "SUMRY Inverter 2.0KVA",
    slug: "sumry-inverter-2kva",
    price: 180,
    image: "/images/solar-products/inverter-sumry-2kva.webp",
    specs: { "Power Output": "2.0KVA", Brand: "SUMRY" },
  },
  {
    id: "inv-sumry-3.2kw",
    category: "Inverter",
    name: "SUMRY Inverter 3.2KW",
    slug: "sumry-inverter-3.2kw",
    price: 200,
    image: "/images/solar/inverter-sumry-3.2kw.jpg",
    specs: { "Power Output": "3.2KW", Brand: "SUMRY" },
  },
  {
    id: "inv-sumry-6.2kva",
    category: "Inverter",
    name: "SUMRY Inverter 6.2KVA",
    slug: "sumry-inverter-6.2kva",
    price: 400,
    image: "/images/solar-products/inverter-sumry-6kva.webp",
    specs: { "Power Output": "6.2KVA", Brand: "SUMRY" },
  },
  {
    id: "inv-sumry-10.2kw",
    category: "Inverter",
    name: "SUMRY Inverter 10.2KW",
    slug: "sumry-inverter-10.2kw",
    price: 800,
    image: "/images/solar/inverter-sumry-10.2kw.jpg",
    specs: { "Power Output": "10.2KW", Brand: "SUMRY" },
  },
  // DEYE Inverters
  {
    id: "inv-deye-3.6k",
    category: "Inverter",
    name: "DEYE Inverter 3.6K SUN-3.6K-030LPI-EU-AM2",
    slug: "deye-inverter-3.6k",
    price: 550,
    image: "/images/solar/inverter-deye-3.6k.jpg",
    specs: { "Power Output": "3.6KW", Model: "SUN-3.6K-030LPI-EU-AM2", Brand: "DEYE" },
  },
  {
    id: "inv-deye-6k-am2",
    category: "Inverter",
    name: "DEYE Inverter 6K SUN-6K-030LPI-EU-AM2",
    slug: "deye-inverter-6k-am2",
    price: 600,
    image: "/images/solar/inverter-deye-6k.jpg",
    specs: { "Power Output": "6KW", Model: "SUN-6K-030LPI-EU-AM2", Brand: "DEYE" },
  },
  {
    id: "inv-deye-6k-sm2",
    category: "Inverter",
    name: "DEYE Inverter 6K SUN-6K-SG04LPI-EU-SM2",
    slug: "deye-inverter-6k-sm2",
    price: 1000,
    image: "/images/solar/inverter-deye-6k-sm2.jpg",
    specs: { "Power Output": "6KW", Model: "SUN-6K-SG04LPI-EU-SM2", Brand: "DEYE" },
  },
  {
    id: "inv-deye-12k-am3",
    category: "Inverter",
    name: "DEYE Inverter 12K SUN-12K-SG02LPI-EU-AM3",
    slug: "deye-inverter-12k-am3",
    price: 2200,
    image: "/images/solar/inverter-deye-12k.jpg",
    specs: { "Power Output": "12KW", Model: "SUN-12K-SG02LPI-EU-AM3", Brand: "DEYE" },
  },
  {
    id: "inv-deye-12k-lp3",
    category: "Inverter",
    name: "DEYE Inverter 12K SUN-12K-SG04LP3-EU",
    slug: "deye-inverter-12k-lp3",
    price: 2200,
    image: "/images/solar/inverter-deye-12k-lp3.jpg",
    specs: { "Power Output": "12KW", Model: "SUN-12K-SG04LP3-EU", Brand: "DEYE" },
  },
  {
    id: "inv-deye-20k",
    category: "Inverter",
    name: "DEYE Inverter 20K SUN-20K-SG05LP3-EU-SM2",
    slug: "deye-inverter-20k",
    price: 3500,
    image: "/images/solar/inverter-deye-20k.jpg",
    specs: { "Power Output": "20KW", Model: "SUN-20K-SG05LP3-EU-SM2", Brand: "DEYE" },
  },
  // Polaris Batteries
  {
    id: "bat-polaris-12v100ah-eco",
    category: "Battery",
    name: "Polaris 12V100AH Eco",
    slug: "polaris-12v100ah-eco",
    price: 200,
    image: "/images/solar/battery-polaris-12v100ah-eco.jpg",
    specs: { Voltage: "12V", Capacity: "100AH", Type: "Eco" },
  },
  {
    id: "bat-polaris-12v100ah",
    category: "Battery",
    name: "Polaris 12V100AH",
    slug: "polaris-12v100ah",
    price: 300,
    image: "/images/solar-products/battery-polaris-12v.webp",
    specs: { Voltage: "12V", Capacity: "100AH" },
  },
  {
    id: "bat-polaris-24v100ah",
    category: "Battery",
    name: "Polaris 24V100AH",
    slug: "polaris-24v100ah",
    price: 400,
    image: "/images/solar-products/battery-polaris-24v.webp",
    specs: { Voltage: "24V", Capacity: "100AH" },
  },
  {
    id: "bat-polaris-48v100ah-wall",
    category: "Battery",
    name: "Polaris 48V100AH Wall",
    slug: "polaris-48v100ah-wall",
    price: 800,
    image: "/images/solar-products/battery-polaris-48v-100ah-wall.webp",
    specs: { Voltage: "48V", Capacity: "100AH", Type: "Wall Mount" },
  },
  {
    id: "bat-polaris-24v200ah-wall",
    category: "Battery",
    name: "Polaris 24V200AH Wall",
    slug: "polaris-24v200ah-wall",
    price: 500,
    image: "/images/solar/battery-polaris-24v200ah-wall.jpg",
    specs: { Voltage: "24V", Capacity: "200AH", Type: "Wall Mount" },
  },
  {
    id: "bat-polaris-48v200ah-wall",
    category: "Battery",
    name: "Polaris 48V200AH Wall",
    slug: "polaris-48v200ah-wall",
    price: 1400,
    image: "/images/solar/battery-polaris-48v200ah-wall.jpg",
    specs: { Voltage: "48V", Capacity: "200AH", Type: "Wall Mount" },
  },
  // DEYE Batteries
  {
    id: "bat-deye-5.12kwh",
    category: "Battery",
    name: "DEYE Battery 5.12KWh SE-G5.1 Pro-B",
    slug: "deye-battery-5.12kwh",
    price: 1200,
    image: "/images/solar/battery-deye-5.12kwh.jpg",
    specs: { Capacity: "5.12KWh", Model: "SE-G5.1 Pro-B", Brand: "DEYE" },
  },
  {
    id: "bat-deye-10.2kwh",
    category: "Battery",
    name: "DEYE Battery 10.2KWh RW-G10.6",
    slug: "deye-battery-10.2kwh",
    price: 2000,
    image: "/images/solar/battery-deye-10.2kwh.jpg",
    specs: { Capacity: "10.2KWh", Model: "RW-G10.6", Brand: "DEYE" },
  },
  // Rails
  {
    id: "rail-6m",
    category: "Rail",
    name: "Mounting Rails 6M",
    slug: "mounting-rails-6m",
    price: 25,
    image: "/images/solar/rail-6m.jpg",
    specs: { Length: "6M", Material: "Aluminum" },
  },
  // Protection & Accessories
  {
    id: "acc-clip",
    category: "Accessory",
    name: "Panel Clip",
    slug: "panel-clip",
    price: 2,
    image: "/images/solar/clip.jpg",
  },
  {
    id: "acc-hook",
    category: "Accessory",
    name: "Mounting Hook",
    slug: "mounting-hook",
    price: 3,
    image: "/images/solar/hook.jpg",
  },
  {
    id: "acc-db-9way",
    category: "Accessory",
    name: "DB Box 9 Way",
    slug: "db-box-9way",
    price: 10,
    image: "/images/solar/db-box-9way.jpg",
  },
  {
    id: "acc-db-12way",
    category: "Accessory",
    name: "DB Box 12 Way",
    slug: "db-box-12way",
    price: 15,
    image: "/images/solar/db-box-12way.jpg",
  },
  {
    id: "acc-changeover",
    category: "Accessory",
    name: "Changeover Switch",
    slug: "changeover-switch",
    price: 10,
    image: "/images/solar/changeover-switch.jpg",
  },
  {
    id: "acc-auto-switch",
    category: "Accessory",
    name: "Auto Switch",
    slug: "auto-switch",
    price: 60,
    image: "/images/solar/auto-switch.jpg",
  },
  {
    id: "prot-spd",
    category: "Protection Kit",
    name: "SPD (Surge Protection Device)",
    slug: "spd-surge-protection",
    price: 10,
    image: "/images/solar/spd.jpg",
    specs: { Type: "Surge Protection Device" },
  },
  {
    id: "acc-ac-c10",
    category: "Accessory",
    name: "AC Breaker C10",
    slug: "ac-breaker-c10",
    price: 5,
    image: "/images/solar/ac-c10.jpg",
    specs: { Rating: "C10" },
  },
  {
    id: "acc-ac-c16",
    category: "Accessory",
    name: "AC Breaker C16",
    slug: "ac-breaker-c16",
    price: 5,
    image: "/images/solar/ac-c16.jpg",
    specs: { Rating: "C16" },
  },
  {
    id: "acc-ac-c32",
    category: "Accessory",
    name: "AC Breaker C32",
    slug: "ac-breaker-c32",
    price: 5,
    image: "/images/solar/ac-c32.jpg",
    specs: { Rating: "C32" },
  },
];

// Sample Installations (past projects)
export const solarInstallations: Installation[] = [
  {
    id: "inst-1",
    title: "Residential Solar - Borrowdale",
    location: "Borrowdale, Harare",
    capacity_kVA: 6,
    completedAt: "2025-3-15",
    images: [
      "/images/solar/solar_13.webp",
    ],
  },
  {
    id: "inst-2",
    title: "Commercial Installation - Industrial",
    location: "Graniteside, Harare",
    capacity_kVA: 10,
    completedAt: "2025-11-20",
    images: [
      "/images/solar/solar_15.webp",
      "/images/solar/solar_14.webp",
    ],
  },
  {
    id: "inst-3",
    title: "Solar Borehole",
    location: "Mazowe",
    capacity_kVA: 6,
    completedAt: "2025-10-05",
    images: [
      "/images/solar/solar_borehole.webp",
    ],
  },
  {
    id: "inst-4",
    title: "Kadoma Residential Solar",
    location: "Kadoma",
    capacity_kVA: 15,
    completedAt: "2025-09-18",
    images: [
      "/images/solar/solar_21.webp",
      "/images/solar/solar_22.webp",
      "/images/solar/solar_23.webp",
    ],
  },
];

// Packages (pre-configured systems using new product IDs)
export const solarPackages: Package[] = [
  {
    id: "pkg-1.5kva",
    name: "Essential Backup",
    capacity_kVA: 1.5,
    components: [
      { productId: "inv-sumry-1kw", qty: 1 },
      { productId: "panel-450w", qty: 2 },
      { productId: "bat-polaris-12v100ah-eco", qty: 1 },
      { productId: "prot-spd", qty: 1 },
      { productId: "rail-6m", qty: 1 },
    ],
    price: 500,
    leadTimeDays: 5,
  },
  {
    id: "pkg-3.2kva",
    name: "Home Starter",
    capacity_kVA: 3.2,
    components: [
      { productId: "inv-sumry-3.2kw", qty: 1 },
      { productId: "panel-550w", qty: 4 },
      { productId: "bat-polaris-24v100ah", qty: 2 },
      { productId: "prot-spd", qty: 1 },
      { productId: "rail-6m", qty: 2 },
    ],
    price: 1500,
    leadTimeDays: 7,
  },
  {
    id: "pkg-5kva",
    name: "Home Power",
    capacity_kVA: 5,
    components: [
      { productId: "inv-deye-6k-am2", qty: 1 },
      { productId: "panel-550w", qty: 6 },
      { productId: "bat-deye-5.12kwh", qty: 1 },
      { productId: "prot-spd", qty: 1 },
      { productId: "rail-6m", qty: 3 },
    ],
    price: 2600,
    leadTimeDays: 7,
  },
  {
    id: "pkg-10kva",
    name: "Power Pro",
    capacity_kVA: 10,
    components: [
      { productId: "inv-deye-12k-am3", qty: 1 },
      { productId: "panel-650w", qty: 12 },
      { productId: "bat-deye-10.2kwh", qty: 1 },
      { productId: "prot-spd", qty: 2 },
      { productId: "rail-6m", qty: 6 },
    ],
    price: 5700,
    leadTimeDays: 10,
  },
  {
    id: "pkg-20kva",
    name: "Commercial",
    capacity_kVA: 20,
    components: [
      { productId: "inv-deye-20k", qty: 1 },
      { productId: "panel-650w", qty: 24 },
      { productId: "bat-deye-10.2kwh", qty: 2 },
      { productId: "prot-spd", qty: 4 },
      { productId: "rail-6m", qty: 12 },
    ],
    price: 10500,
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
