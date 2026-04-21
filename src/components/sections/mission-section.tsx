import React from "react";
/** Mission section — serious corporate copy played entirely straight */
export function MissionSection(): React.JSX.Element {
  return (
    <section
      id="mission"
      className="bg-navy text-parchment px-4 py-24"
      aria-label="Our Mission"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Our Mission
        </p>

        {/* Lead pull-quote — the single best line */}
        <blockquote className="font-display text-2xl sm:text-3xl italic text-gold leading-snug mb-8 px-4">
          &ldquo;He saw a gap in the market and, with characteristic boldness,
          inserted himself into it.&rdquo;
        </blockquote>

        <h2 className="font-display text-4xl sm:text-5xl font-bold text-parchment mb-6">
          A Higher Standard of Perversion
        </h2>

        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <div className="flex-1 h-px bg-gold/40" />
          <span className="text-gold tracking-widest">✦</span>
          <div className="flex-1 h-px bg-gold/40" />
        </div>

        <div className="space-y-6 text-lg text-parchment/80 leading-relaxed text-left">
          <p>
            For too long, the industry of personalised massage services has been
            plagued by inconsistency, improvisation, and a troubling absence of
            documentation. Standards — where they existed at all — were informal,
            unverified, and entirely unenforced.
          </p>

          <p>
            <strong className="text-gold">Epstein&apos;s Olde Fashioned Pervy Massages</strong>{" "}
            was established to correct this. We brought the industry&apos;s first
            comprehensive intake protocol, a rigorous practitioner vetting programme,
            and a fully documented chain of custody. Nothing is left to chance.
            Nothing is left undocumented.
          </p>

          <p className="text-center text-xl italic text-gold pt-4">
            &ldquo;Process is not an obstacle to pleasure. Process is the pleasure.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
