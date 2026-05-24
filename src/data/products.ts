import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-teak-wood-oil",
    name: "Premium Teak Wood Oil",
    oilType: "Teak",
    shortDescription: "Deep nourishment for teak furniture and outdoor wood.",
    description:
      "Cold-pressed teak wood oil that penetrates deep into grain, restoring natural warmth and protecting against moisture, UV, and cracking. Ideal for dining tables, decks, and heirloom furniture.",
    price: 899,
    mrp: 1199,
    benefits: [
      "Restores natural teak patina",
      "Water-resistant protective layer",
      "Food-safe finish when cured",
      "UV protection for outdoor use",
    ],
    sizes: ["100ml", "250ml", "500ml"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1615485925518-480097a738d0?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "sandalwood-essential-oil",
    name: "Pure Sandalwood Essential Oil",
    oilType: "Sandalwood",
    shortDescription: "Aromatic sandalwood oil for skin, hair, and meditation.",
    description:
      "Steam-distilled Mysore-style sandalwood essential oil with a rich, woody aroma. Perfect for aromatherapy, skincare blends, and traditional wellness rituals.",
    price: 1499,
    mrp: 1999,
    benefits: [
      "Calming aromatherapy benefits",
      "Soothes dry, irritated skin",
      "Natural antiseptic properties",
      "Long-lasting woody fragrance",
    ],
    sizes: ["15ml", "30ml", "50ml"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "cedarwood-furniture-oil",
    name: "Cedarwood Furniture Oil",
    oilType: "Cedarwood",
    shortDescription: "Protective cedar oil for wardrobes, chests, and panels.",
    description:
      "Natural cedarwood oil blend that conditions wood while repelling moths and mildew. Leaves a subtle forest scent and a satin matte finish.",
    price: 699,
    mrp: 899,
    benefits: [
      "Natural insect repellent",
      "Prevents wood drying and splitting",
      "Pleasant cedar aroma",
      "Non-toxic, plant-based formula",
    ],
    sizes: ["100ml", "250ml", "500ml"],
    images: [
      "https://images.unsplash.com/photo-1615485925518-480097a738d0?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "eucalyptus-wood-polish",
    name: "Eucalyptus Wood Polish Oil",
    oilType: "Eucalyptus",
    shortDescription: "Light polish for daily wood care and shine.",
    description:
      "Refreshing eucalyptus-infused wood polish that cleans, conditions, and adds a gentle sheen. Suitable for kitchen boards, shelves, and decorative wood.",
    price: 499,
    mrp: 649,
    benefits: [
      "Quick-drying daily maintenance",
      "Natural antibacterial eucalyptus",
      "Enhances wood grain visibility",
      "Pleasant, fresh scent",
    ],
    sizes: ["100ml", "250ml"],
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
      "https://images.unsplash.com/photo-1615485925518-480097a738d0?w=800&q=80",
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "teak-outdoor-shield",
    name: "Teak Outdoor Shield Oil",
    oilType: "Teak",
    shortDescription: "Heavy-duty protection for garden and patio teak.",
    description:
      "Formulated for harsh Indian climates—monsoon humidity and intense sun. Builds a durable barrier while letting wood breathe.",
    price: 1099,
    mrp: 1399,
    benefits: [
      "Monsoon & UV resistant",
      "Mould and mildew prevention",
      "Maintains silver-grey teak look",
      "Easy reapplication every season",
    ],
    sizes: ["250ml", "500ml", "1L"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1615485925518-480097a738d0?w=800&q=80",
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "sandalwood-body-oil",
    name: "Sandalwood Body & Massage Oil",
    oilType: "Sandalwood",
    shortDescription: "Luxurious carrier oil for massage and after-bath care.",
    description:
      "Blended sandalwood body oil with sweet almond and sesame bases. Absorbs without greasiness, leaving skin soft and delicately scented.",
    price: 799,
    mrp: 999,
    benefits: [
      "Deep hydration for dry skin",
      "Relaxing massage experience",
      "Ayurvedic-inspired formulation",
      "No synthetic fragrances",
    ],
    sizes: ["100ml", "200ml"],
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    ],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const oilTypes = ["Teak", "Sandalwood", "Cedarwood", "Eucalyptus"] as const;
