"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/fade-up";
import { formatPrice } from "@/lib/format";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <FadeUp delay={index * 0.08}>
      <Card className="group overflow-hidden border-brown/10 bg-white/40 transition-shadow hover:shadow-lg">
        <Link href={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-brown/5">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {discount > 0 && (
              <Badge className="absolute left-3 top-3">{discount}% OFF</Badge>
            )}
          </div>
        </Link>
        <CardContent className="space-y-2 p-4 sm:p-5">
          <Badge variant="outline" className="text-xs">
            {product.oilType}
          </Badge>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-display text-lg font-medium leading-snug transition-colors group-hover:text-gold-dark">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm text-brown-muted">
            {product.shortDescription}
          </p>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-semibold text-brown">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-brown-muted line-through">
              {formatPrice(product.mrp)}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 sm:p-5 sm:pt-0">
          <Button asChild className="w-full" size="sm">
            <Link href={`/product/${product.slug}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </FadeUp>
  );
}
