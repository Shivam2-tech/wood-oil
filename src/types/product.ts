export type OilType = "Teak" | "Sandalwood" | "Cedarwood" | "Eucalyptus";

export interface Product {
  id: string;
  slug: string;
  name: string;
  oilType: OilType;
  description: string;
  shortDescription: string;
  price: number;
  mrp: number;
  benefits: string[];
  sizes: string[];
  images: string[];
  featured?: boolean;
}
