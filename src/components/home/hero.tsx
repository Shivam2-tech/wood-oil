"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerText } from "@/components/animations/stagger-text";
import { Button } from "@/components/ui/button";

const HERO_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-pouring-oil-on-a-frying-pan-4300-large.mp4";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden sm:min-h-[90vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1920&q=80"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-brown/70" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center text-cream">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm"
        >
          ABC Wood Oil Factory
        </motion.p>

        <StaggerText
          text="Nature's Finest Wood Oils"
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          as="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          Handcrafted teak, sandalwood, cedarwood & eucalyptus oils — pure,
          premium, and trusted by homes across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/shop">Shop Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
            <Link href="/about">Our Story</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
