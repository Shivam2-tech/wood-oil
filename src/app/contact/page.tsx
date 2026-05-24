import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { FadeUp } from "@/components/animations/fade-up";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ABC Wood Oil Factory. WhatsApp, phone, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-brown-muted">
          We would love to hear from you. Reach out for orders, bulk enquiries,
          or product guidance.
        </p>
      </FadeUp>

      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        <FadeUp>
          <div className="rounded-lg border border-brown/10 bg-white/40 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Send a Message</h2>
            <p className="mt-2 text-sm text-brown-muted">
              Fill out the form and our team will respond within 24 hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-6">
            <div className="rounded-lg border border-brown/10 bg-brown p-6 text-cream sm:p-8">
              <h2 className="font-display text-xl font-semibold text-gold">
                WhatsApp
              </h2>
              <p className="mt-2 text-sm text-cream/80">
                Fastest way to place orders or ask questions.
              </p>
              <p className="mt-4 flex items-center gap-2 text-lg font-medium">
                <Phone className="h-5 w-5 text-gold" />
                +91 98765 43210
              </p>
              <Button
                variant="whatsapp"
                className="mt-6 w-full"
                size="lg"
                asChild
              >
                <Link
                  href={buildWhatsAppUrl(
                    "Hello ABC Wood Oil Factory, I have a question."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border border-brown/10 bg-white/40 p-6">
              <h3 className="font-display font-semibold">Business Hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-brown-muted">
                <li>Monday – Saturday: 9:00 AM – 7:00 PM IST</li>
                <li>Sunday: 10:00 AM – 4:00 PM IST</li>
              </ul>
              <p className="mt-4 text-sm text-brown-muted">
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="text-gold-dark hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wa.me/{WHATSAPP_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
