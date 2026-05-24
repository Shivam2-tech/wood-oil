import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { FadeUp } from "@/components/animations/fade-up";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
            Curated Selection
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Featured Oils
          </h2>
          <p className="mt-4 text-brown-muted">
            Our most loved formulations for furniture care, aromatherapy, and
            daily wood maintenance.
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">View All Products</Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
