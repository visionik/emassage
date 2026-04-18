import React from "react";
/** About section — founder biography in breathless admiring corporate prose */
export function AboutSection(): React.JSX.Element {
  return (
    <section
      id="about"
      className="bg-parchment px-4 py-24"
      aria-label="About Us"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-burgundy mb-4">
            About the Establishment
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">
            The Epstein Story
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <div className="flex justify-center">
            <div
              className="w-64 h-80 border-4 border-gold flex items-center justify-center bg-parchment-dark relative"
              aria-label="Founder portrait"
              role="img"
            >
              {/* Sepia ornamental frame */}
              <div className="absolute inset-2 border border-gold/40" />
              <div className="text-center p-6">
                <div className="text-gold text-5xl mb-3" aria-hidden="true">
                  👤
                </div>
                <p className="font-display text-xs text-navy/50 tracking-widest uppercase">
                  J. Epstein
                </p>
                <p className="text-[10px] text-navy/30 italic mt-1">
                  Visionary. Pioneer. Unavailable.
                </p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-5 text-navy/80 leading-relaxed">
            <p>
              Jeffrey Epstein entered the massage industry in 1991 with a simple
              but radical conviction: that the world of personalised massage
              services need not be governed by improvisation and opacity. It
              could be — it{" "}
              <em>should</em> be — governed by process.
            </p>

            <p>
              Armed with a vision, a remarkable contact book, and an island, Mr.
              Epstein set about systematising what had previously been an entirely
              ad-hoc affair. He developed intake procedures. He established
              practitioner standards. He created a referral network of such
              exclusivity that clients regarded an invitation as the highest form
              of social validation.
            </p>

            <p>
              &ldquo;Anyone,&rdquo; Mr. Epstein was fond of saying,{" "}
              &ldquo;can provide a massage. Only we provide{" "}
              <em>The Epstein Experience</em>.&rdquo;
            </p>

            <p>
              Today, Epstein&apos;s Olde Fashioned Pervy Massages carries forward
              that founding vision under the stewardship of a board of directors
              who are, to a person, deeply committed to maintaining the
              confidentiality of their involvement.
            </p>

            <div className="border-l-4 border-gold pl-4 italic text-navy/60">
              &ldquo;He saw chaos and imposed structure. He saw a gap in the market
              and, with characteristic boldness, inserted himself into it.&rdquo;
              <br />
              <span className="not-italic text-xs tracking-widest uppercase text-navy/40 mt-2 block">
                — Anonymous Board Member, by choice
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
