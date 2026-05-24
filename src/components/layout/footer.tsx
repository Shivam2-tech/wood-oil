import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-brown text-cream">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-gold" />
              <span className="font-display text-xl font-semibold">
                ABC Wood Oil Factory
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/80">
              Premium natural wood oils crafted with care since 1987. Pure,
              plant-based formulations for furniture, wellness, and everyday
              wood care.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/shop" className="hover:text-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?type=Teak" className="hover:text-gold transition-colors">
                  Teak Oils
                </Link>
              </li>
              <li>
                <Link href="/shop?type=Sandalwood" className="hover:text-gold transition-colors">
                  Sandalwood
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-gold transition-colors">
                  Your Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Kerala Wood Craft Estate, Kochi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:hello@abcwoodoil.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@abcwoodoil.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/60">
          <p>
            © {new Date().getFullYear()} ABC Wood Oil Factory. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
