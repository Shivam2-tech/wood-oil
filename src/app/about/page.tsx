import type { Metadata } from "next";
import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Factory, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story of ABC Wood Oil Factory — crafting premium natural wood oils since 1987.",
};

const processImages = [
  {
    src: "https://images.unsplash.com/photo-1615485925518-480097a738d0?w=600&q=80",
    alt: "Wood oil extraction process",
    caption: "Cold-pressing raw materials",
  },
  {
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    alt: "Quality testing in laboratory",
    caption: "Quality testing lab",
  },
  {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
    alt: "Hand bottling oils",
    caption: "Hand bottling & labeling",
  },
];

const certificates = [
  {
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
    alt: "ISO quality certification",
    title: "ISO 9001 Certified",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    alt: "Organic certification",
    title: "Organic Standards",
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
    alt: "FSSAI license",
    title: "FSSAI Licensed",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <section className="border-b border-brown/10 bg-white/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
              Since 1987
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold sm:text-5xl">
              Our Factory Story
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brown-muted">
              ABC Wood Oil Factory began in a small workshop in Kerala, where
              master craftsmen distilled the wisdom of generations into every
              bottle. Today, we serve thousands of homes across India with oils
              that honour both wood and wellness.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1615485925518-480097a738d0?w=800&q=80"
                alt="ABC Wood Oil Factory"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Rooted in Nature, Refined by Science
              </h2>
              <p className="leading-relaxed text-brown-muted">
                We source teak, sandalwood, cedar, and eucalyptus from trusted
                plantations and partner farms. Our cold-press and steam
                distillation methods preserve active compounds while eliminating
                harsh chemicals.
              </p>
              <p className="leading-relaxed text-brown-muted">
                Every batch is documented, tested, and bottled by hand in our
                Kochi facility — a process unchanged in spirit since our founding,
                even as we have grown to serve customers nationwide.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Factory, label: "In-house production" },
                  { icon: Heart, label: "Family owned" },
                  { icon: Award, label: "Award winning oils" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center rounded-lg border border-brown/10 bg-white/40 p-4 text-center"
                  >
                    <item.icon className="mb-2 h-6 w-6 text-gold-dark" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-brown/10 bg-white/30 py-16">
        <div className="container mx-auto px-4">
          <FadeUp className="mb-10 text-center">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Our Process
            </h2>
            <p className="mt-3 text-brown-muted">
              From raw material to your doorstep — transparency at every step.
            </p>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {processImages.map((img, index) => (
              <FadeUp key={img.caption} delay={index * 0.1}>
                <Card className="overflow-hidden border-brown/10">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-center text-sm font-medium">{img.caption}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <FadeUp className="mb-10 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Certifications
          </h2>
          <p className="mt-3 text-brown-muted">
            Quality and safety you can trust.
          </p>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-3">
          {certificates.map((cert, index) => (
            <FadeUp key={cert.title} delay={index * 0.1}>
              <Card className="overflow-hidden border-brown/10 text-center">
                <div className="relative aspect-[3/4] bg-brown/5">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-display font-medium">{cert.title}</p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
