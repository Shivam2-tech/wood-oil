"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import {
  ShopFilters,
  ShopFiltersState,
} from "@/components/shop/shop-filters";
import { OilType } from "@/types/product";
import { FadeUp } from "@/components/animations/fade-up";

const priceRange = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
};

const allSizes = Array.from(
  new Set(products.flatMap((p) => p.sizes))
).sort();

const defaultFilters: ShopFiltersState = {
  oilType: "all",
  minPrice: priceRange.min,
  maxPrice: priceRange.max,
  size: "all",
};

export function ShopClient() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") as OilType | null;

  const [filters, setFilters] = useState<ShopFiltersState>(defaultFilters);

  useEffect(() => {
    if (typeParam && ["Teak", "Sandalwood", "Cedarwood", "Eucalyptus"].includes(typeParam)) {
      setFilters((f) => ({ ...f, oilType: typeParam }));
    }
  }, [typeParam]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (filters.oilType !== "all" && product.oilType !== filters.oilType) {
        return false;
      }
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false;
      }
      if (filters.size !== "all" && !product.sizes.includes(filters.size)) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      <FadeUp className="mb-10 text-center sm:mb-14">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
          Shop All Oils
        </h1>
        <p className="mt-4 text-brown-muted">
          Filter by oil type, price, and bottle size to find your perfect match.
        </p>
      </FadeUp>

      <div className="flex flex-col gap-8 lg:flex-row">
        <ShopFilters
          filters={filters}
          onChange={setFilters}
          availableSizes={allSizes}
          priceRange={priceRange}
          className="lg:w-64 lg:shrink-0"
        />

        <div className="flex-1">
          <p className="mb-6 text-sm text-brown-muted">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-brown/10 bg-white/40 p-12 text-center">
              <p className="text-brown-muted">
                No products match your filters. Try adjusting your selection.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
