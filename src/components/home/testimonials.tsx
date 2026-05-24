import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/animations/fade-up";

const testimonials = [
  {
    name: "Priya Menon",
    location: "Bangalore",
    text: "The teak oil brought my dining table back to life. Rich colour, no sticky residue — exactly what I wanted.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "Ordered sandalwood oil for my mother. Authentic aroma and fast COD delivery. Will order again.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    location: "Delhi",
    text: "Cedarwood oil for our wardrobes — smells wonderful and we have had zero moth issues since.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
            Customer Love
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Testimonials
          </h2>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeUp key={t.name} delay={index * 0.1}>
              <Card className="h-full border-brown/10 bg-white/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-brown-light">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-brown/10 pt-4">
                    <p className="font-medium text-brown">{t.name}</p>
                    <p className="text-xs text-brown-muted">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
