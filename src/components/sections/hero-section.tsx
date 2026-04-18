import React from "react";
/** Ornamental rule used throughout the site */
function OrnamentalRule(): React.JSX.Element {
  return (
    <div className="flex items-center gap-3 my-6" aria-hidden="true">
      <div className="flex-1 h-px bg-gold/60" />
      <span className="text-gold text-sm tracking-[0.4em]">✦ ✦ ✦</span>
      <div className="flex-1 h-px bg-gold/60" />
    </div>
  );
}

/** Full-viewport hero section */
export function HeroSection(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-parchment text-navy px-4 py-24 text-center"
      aria-label="Home"
    >
      {/* Badge */}
      <p className="text-xs tracking-[0.4em] uppercase text-burgundy font-semibold mb-6">
        Est. 1991
      </p>

      {/* Main heading */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-navy max-w-4xl mb-4">
        Epstein&apos;s Olde Fashioned<br />
        <span className="text-burgundy italic">Pervy Massages</span>
      </h1>

      <OrnamentalRule />

      {/* Tagline */}
      <p className="text-xl sm:text-2xl tracking-widest uppercase text-navy/70 mb-3">
        Discretion. Process. Results.
      </p>

      <p className="max-w-2xl text-lg text-navy/60 italic mb-10">
        The industry&apos;s first and only fully documented, rigorously audited,
        standards-compliant pervy massage franchise.
      </p>

      {/* CTA — native anchor; smooth scroll handled by CSS scroll-behavior */}
      <a
        href="#services"
        className="inline-block bg-burgundy text-parchment px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold border-2 border-burgundy hover:bg-parchment hover:text-burgundy transition-colors"
      >
        View Our Services
      </a>
    </section>
  );
}
