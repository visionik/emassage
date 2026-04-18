import React from "react";
import { FranchiseQuiz } from "./franchise-quiz";

const FRANCHISE_BENEFITS = [
  {
    heading: "Exclusive Territory Rights",
    body: "A defined geographic territory, protected against competing Epstein's franchisees. We cannot, of course, protect you from anyone else.",
  },
  {
    heading: "The Epstein Onboarding Programme",
    body: "Five days of intensive training delivered at a location that will be communicated separately. Accommodation and discretion are included.",
  },
  {
    heading: "Brand Standards Manual",
    body: "A 340-page document governing every aspect of service delivery, intake procedure, and client relations. Memorise it. Then destroy it.",
  },
  {
    heading: "Ongoing Compliance Audits",
    body: "Our compliance team conducts regular unannounced inspections. They are thorough. They are discreet. They take notes.",
  },
];

/** Franchising section with pitch copy and qualifying quiz */
export function FranchisingSection(): React.JSX.Element {
  return (
    <section
      id="franchising"
      className="bg-parchment-dark px-4 py-24"
      aria-label="Franchise Opportunities"
    >
      <div className="max-w-5xl mx-auto">
        {/* Pitch header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-burgundy mb-4">
            Franchise Opportunities
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-6">
            Own an Epstein&apos;s
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed">
            For the first time in the firm&apos;s history, Epstein&apos;s Olde
            Fashioned Pervy Massages is making available a limited number of
            franchise opportunities to suitably qualified individuals. This is
            not for everyone. In fact, it is for very few people. You may not
            be one of them.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {FRANCHISE_BENEFITS.map((benefit) => (
            <div
              key={benefit.heading}
              className="border border-gold/40 p-6 bg-parchment"
            >
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                {benefit.heading}
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">{benefit.body}</p>
            </div>
          ))}
        </div>

        {/* Hard review callout */}
        <div className="text-center mb-10">
          <div className="inline-block border-2 border-burgundy px-8 py-6 max-w-2xl">
            <p className="font-display text-xl font-bold text-burgundy mb-2">
              Not Everyone Qualifies.
            </p>
            <p className="text-navy/70 text-sm leading-relaxed">
              Our review process is, we are told, the most rigorous in the
              industry. We verify references. We conduct background assessments.
              We make certain enquiries that fall outside the scope of
              conventional due diligence. The process takes as long as it takes.
            </p>
          </div>
        </div>

        {/* Quiz */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.4em] uppercase text-burgundy mb-2">
            Step One
          </p>
          <h3 className="font-display text-2xl font-bold text-navy mb-4">
            Determine Your Eligibility
          </h3>
          <p className="text-navy/60 text-sm mb-8 italic">
            Answer five brief questions. We will evaluate your suitability with
            the same rigour we apply to everything else.
          </p>
          <FranchiseQuiz />
        </div>
      </div>
    </section>
  );
}
