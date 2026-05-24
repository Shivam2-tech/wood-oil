"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";
import { buildCartWhatsAppMessage, buildWhatsAppUrl } from "@/lib/constants";
import { FadeUp } from "@/components/animations/fade-up";

export function CartPageClient() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-brown-muted">
        Loading cart...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <FadeUp className="flex flex-col items-center justify-center gap-6 text-center">
          <ShoppingBag className="h-16 w-16 text-brown-muted/30" />
          <h1 className="font-display text-2xl font-semibold">Your cart is empty</h1>
          <p className="text-brown-muted">
            Discover our premium wood oils and add your favourites.
          </p>
          <Button asChild size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </FadeUp>
      </div>
    );
  }

  const checkoutUrl = buildWhatsAppUrl(buildCartWhatsAppMessage(items));

  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      <FadeUp>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Shopping Cart
        </h1>
        <p className="mt-2 text-brown-muted">
          {items.reduce((c, i) => c + i.quantity, 0)} item(s) in your cart
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <ul className="space-y-6 lg:col-span-2">
          {items.map((item, index) => (
            <FadeUp key={`${item.productId}-${item.size}`} delay={index * 0.05}>
              <li className="flex gap-4 rounded-lg border border-brown/10 bg-white/40 p-4 sm:gap-6 sm:p-6">
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-brown/5 sm:h-28 sm:w-28"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/product/${item.slug}`}
                    className="font-display text-lg font-medium hover:text-gold-dark"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-brown-muted">Size: {item.size}</p>
                  <p className="mt-1 font-semibold">{formatPrice(item.price)}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.productId, item.size)}
                    >
                      <Trash2 className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="hidden font-semibold sm:block">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </li>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.2}>
          <div className="h-fit rounded-lg border border-brown/10 bg-white/50 p-6">
            <h2 className="font-display text-xl font-semibold">Order Summary</h2>
            <div className="mt-6 space-y-3 border-b border-brown/10 pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-brown-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brown-muted">Delivery</span>
                <span className="font-medium text-gold-dark">COD — Free estimate on WhatsApp</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Button variant="whatsapp" className="mt-6 w-full" size="lg" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Checkout on WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="mt-3 w-full" asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
