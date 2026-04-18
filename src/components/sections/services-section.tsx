import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/** A single service offering */
export interface Service {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

/** Canonical list of services */
export const SERVICES: Service[] = [
  {
    name: "The Introductory Orientation",
    description:
      "For first-time clients only. Includes a comprehensive discretion briefing, intake assessment, and signature Epstein welcome package. Availability is strictly limited.",
    price: "$250",
    badge: "First Visit Only",
  },
  {
    name: "The Island Retreat Package",
    description:
      "Our flagship offering. By referral only. Travel, private accommodation, and a multi-day programme of bespoke services. Full NDA suite bundled as standard.",
    price: "POA",
    badge: "Referral Only",
  },
  {
    name: "The Executive Discretion Suite",
    description:
      "For clients requiring the highest level of deniability. Includes full dossier management, complimentary memory suppression techniques, and a dedicated account liaison.",
    price: "$1,800",
    badge: "Most Requested",
  },
  {
    name: "The Compliance Audit",
    description:
      "A thorough review of the client's exposure profile, liability vectors, and existing arrangements. Our consultants have seen everything. They will not be surprised.",
    price: "$950",
  },
  {
    name: "The Recurring Arrangement",
    description:
      "Monthly retainer. Priority scheduling across all locations. Loyalty is rewarded with enhanced access, preferential rates, and proactive issue management.",
    price: "$3,500 / mo",
    badge: "Best Value",
  },
  {
    name: "The Legacy Arrangement",
    description:
      "For clients with reputational concerns extending beyond their natural lifespan. Includes document management, narrative control, estate pre-planning, and complimentary obituary optimisation. Demand has increased sharply since 2019.",
    price: "$12,000",
    badge: "Growing Demand",
  },
  {
    name: "The In-Flight Arrangement",
    description:
      "Massage services delivered exclusively at altitude aboard our private fleet. Discretion is easier at 35,000 feet. Flight logs are maintained to our usual standard — meticulously, and mysteriously absent. Some passengers board voluntarily. We note this because we have been asked.",
    price: "Complimentary",
    badge: "With Island Package",
  },
];

/** Services card grid */
export function ServicesSection(): React.JSX.Element {
  return (
    <section
      id="services"
      className="bg-parchment-dark px-4 py-24"
      aria-label="Our Services"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-burgundy mb-4">
            Our Services
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-4">
            The Full Menu
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto italic">
            Each engagement is bespoke, documented, and delivered with the
            professionalism our clients have come to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        <p className="text-center text-xs text-navy/40 mt-10 italic">
          All prices quoted in USD. POA rates available upon submission of satisfactory references.
          Discretion is assumed; it is not optional.
        </p>
      </div>
    </section>
  );
}

/** Individual service card */
function ServiceCard({ service }: { service: Service }): React.JSX.Element {
  return (
    <Card className="bg-card border border-gold/40 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-navy leading-tight">
            {service.name}
          </h3>
          {service.badge && (
            <Badge className="bg-burgundy text-parchment text-[10px] shrink-0 mt-0.5">
              {service.badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <p className="text-navy/70 text-sm leading-relaxed flex-1">
          {service.description}
        </p>
        <p className="font-display text-2xl text-burgundy font-bold">
          {service.price}
        </p>
      </CardContent>
    </Card>
  );
}
