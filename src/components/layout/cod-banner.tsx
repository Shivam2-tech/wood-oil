import { Truck } from "lucide-react";

export function CodBanner() {
  return (
    <div className="bg-brown text-cream">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm">
        <Truck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
        <p className="font-medium tracking-wide">
          Cash on Delivery Available Across India
        </p>
      </div>
    </div>
  );
}
