import { Droplets, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/animations/fade-up";

const reasons = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Cold-pressed and steam-distilled oils with no parabens, mineral oils, or synthetic additives.",
  },
  {
    icon: Droplets,
    title: "Small-Batch Crafted",
    description:
      "Every bottle is produced in limited batches at our Kerala factory for consistent quality.",
  },
  {
    icon: ShieldCheck,
    title: "Lab Tested",
    description:
      "Each batch is tested for purity, viscosity, and safety before it reaches your home.",
  },
  {
    icon: Sparkles,
    title: "Premium Results",
    description:
      "Deep penetration and lasting protection that honours the natural beauty of wood.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-brown/10 bg-white/30 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
            The ABC Difference
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Why Choose Us
          </h2>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <item.icon className="h-6 w-6 text-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-muted">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
