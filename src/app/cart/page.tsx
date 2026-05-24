import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your ABC Wood Oil Factory cart and checkout on WhatsApp.",
};

export default function CartPage() {
  return <CartPageClient />;
}
