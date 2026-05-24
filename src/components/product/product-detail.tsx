"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppButton } from "@/components/products/whatsapp-button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";
import { buildProductWhatsAppMessage } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappMessage = buildProductWhatsAppMessage(
    product.name,
    selectedSize,
    quantity
  );

  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-brown/5">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-md border-2 transition-colors",
                  activeImage === i ? "border-gold" : "border-transparent"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                View Full Size
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-2">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="rounded-md object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-3">
              {product.oilType}
            </Badge>
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-brown-muted leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-2xl font-semibold text-brown">
              {formatPrice(product.price)}
            </span>
            <span className="text-lg text-brown-muted line-through">
              MRP {formatPrice(product.mrp)}
            </span>
            {discount > 0 && (
              <Badge>{discount}% OFF</Badge>
            )}
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-brown-muted">
              Benefits
            </h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-brown-muted">
              Select Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  type="button"
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-brown-muted">
              Quantity
            </h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center text-lg font-medium">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="flex-1 gap-2"
              size="lg"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
            <WhatsAppButton
              message={whatsappMessage}
              className="flex-1"
              size="lg"
            />
          </div>

          <p className="text-xs text-brown-muted">
            <Link href="/cart" className="text-gold-dark hover:underline">
              View cart
            </Link>{" "}
            · Cash on Delivery available across India
          </p>
        </div>
      </div>
    </div>
  );
}
