export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  price: { base: string; currency: string; note: string };
  images: { main: string; gallery: string[] };
  downloads: { datasheet: string; stepFile: string; manual: string };
  view3D: string;
  isNew: boolean;
  inStock: boolean;
  warranty: string;
  leadTime: string;
}

export declare const products: Record<string, Product>;
export declare const productIds: string[];
