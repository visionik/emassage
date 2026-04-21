import React from "react";

export interface Location {
  name: string;
  region: string;
  status: string;
  hours: string;
  note?: string;
}

export const LOCATIONS: Location[] = [
  {
    name: "Little Saint James",
    region: "U.S. Virgin Islands",
    status: "Primary Operations",
    hours: "By appointment. We will find you.",
    note: "Currently subject to administrative review. Access by boat only. Boat provided.",
  },
  {
    name: "Upper East Side Estate",
    region: "New York, New York",
    status: "East Coast Office",
    hours: "Mon–Fri, 9am–when we decide",
    note: "Currently subject to ongoing proceedings. Open by interpretation of the court order.",
  },
  {
    name: "El Brillo Way",
    region: "Palm Beach, Florida",
    status: "Southern Estate",
    hours: "Seasonally available",
    note: "Operating hours adjusted following sustained local law enforcement interest. Pool still heated.",
  },
  {
    name: "Avenue Foch",
    region: "Paris, France",
    status: "European Office",
    hours: "Closed 2019",
    note: "Records not available. Staff not available. Manager not available for comment. Records available upon court order that will never be issued.",
  },
  {
    name: "Undisclosed",
    region: "International Waters",
    status: "Reserve Location",
    hours: "Continuously",
    note: "Available upon referral from a minimum of two sitting heads of state. Coordinates provided upon verification.",
  },
];

/** Locations section */
export function LocationsSection(): React.JSX.Element {
  return (
    <section
      id="locations"
      className="bg-navy text-parchment px-4 py-24"
      aria-label="Our Locations"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Our Locations
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-parchment mb-4">
            Where to Find Us
          </h2>
          <p className="text-parchment/50 italic text-sm">
            Walk-in appointments are not available. Walking in is not possible at most locations.
            You would need a boat.
          </p>
        </div>

        <div className="space-y-4">
          {LOCATIONS.map((loc) => (
            <LocationRow key={loc.name} location={loc} />
          ))}
        </div>

        <p className="text-center text-xs text-parchment/30 italic mt-10">
          Some locations are temporarily closed pending legal proceedings. Temporarily.
        </p>
      </div>
    </section>
  );
}

function LocationRow({ location }: { location: Location }): React.JSX.Element {
  return (
    <div className="border border-gold/20 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="sm:w-48 shrink-0">
        <p className="font-display font-bold text-gold text-lg leading-tight">
          {location.name}
        </p>
        <p className="text-xs tracking-widest uppercase text-parchment/40 mt-0.5">
          {location.region}
        </p>
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-xs tracking-widest uppercase text-burgundy">
          {location.status}
        </p>
        <p className="text-sm text-parchment/70">{location.hours}</p>
        {location.note && (
          <p className="text-xs italic text-parchment/40 pt-1">{location.note}</p>
        )}
      </div>
    </div>
  );
}
