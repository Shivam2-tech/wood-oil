import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/shop-client";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse premium teak, sandalwood, cedarwood and eucalyptus wood oils.",
};

function ShopFallback() {
  return (
    <div className="container mx-auto px-4 py-20 text-center text-brown-muted">
      Loading shop...
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopFallback />}>
      <ShopClient />
    </Suspense>
  );
}
