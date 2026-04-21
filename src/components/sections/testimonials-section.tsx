import React from "react";
import { Card, CardContent } from "@/components/ui/card";

/** A single client testimonial */
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

/** Curated list of satisfied client testimonials */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Unmatched professionalism. I have recommended Epstein's to heads of state, and they have all thanked me, privately, in writing, which has since been destroyed.",
    name: "Prince A.",
    title: "European Royalty",
  },
  {
    quote:
      "The NDA was notarised within the hour. Five stars. I cannot say more, legally.",
    name: "W.C.",
    title: "Former Head of State",
  },
  {
    quote:
      "I wasn't sure the industry could be this organised. I was wrong. The intake procedure alone restored my faith in institutions.",
    name: "A.D.",
    title: "Technology Visionary",
  },
  {
    quote:
      "My lawyers have reviewed the intake process in exhaustive detail. They found nothing. Nothing at all. Highly recommended.",
    name: "L.M.",
    title: "Media Personality",
  },
  {
    quote:
      "Five stars. Would recommend. Have already recommended. Records of recommendation have been destroyed.",
    name: "B.C.",
    title: "Distinguished Philanthropist",
  },
  {
    quote:
      "I was skeptical. Then I was a client. Then I was not asked about it by investigators. Five stars.",
    name: "G.M.",
    title: "Former State Governor",
  },
];

/** Testimonials card grid */
export function TestimonialsSection(): React.JSX.Element {
  return (
    <section
      id="testimonials"
      className="bg-navy text-parchment px-4 py-24"
      aria-label="Client Testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-parchment mb-4">
            What Our Clients Say
          </h2>
          <p className="text-parchment/50 italic text-sm">
            Names and identifying details withheld at the request of counsel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Individual testimonial card */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }): React.JSX.Element {
  return (
    <Card className="bg-navy border border-gold/30 text-parchment">
      <CardContent className="pt-6 flex flex-col gap-4">
        <span className="text-gold text-3xl leading-none font-display">&ldquo;</span>
        <p className="text-parchment/80 italic leading-relaxed text-sm -mt-4">
          {testimonial.quote}
        </p>
        <div className="border-t border-gold/20 pt-3 mt-auto">
          <p className="font-display font-bold text-gold">{testimonial.name}</p>
          <p className="text-xs tracking-widest uppercase text-parchment/40">
            {testimonial.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
