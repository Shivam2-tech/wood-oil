"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileCartSheet } from "@/components/cart/mobile-cart-sheet";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b border-brown/10 bg-cream/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-brown sm:text-2xl">
          ABC Wood Oil
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-dark",
                pathname === link.href ? "text-gold-dark" : "text-brown-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/cart" className="relative hidden md:inline-flex">
            <Button variant="outline" size="sm" className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              Cart
              {mounted && itemCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-xs font-bold text-brown">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <div className="md:hidden">
            <MobileCartSheet />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-brown/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "py-2 text-sm font-medium",
                  pathname === link.href ? "text-gold-dark" : "text-brown"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-brown"
            >
              Cart {mounted && itemCount > 0 ? `(${itemCount})` : ""}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
