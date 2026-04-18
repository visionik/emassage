import React from "react";
/** Old-timey site footer */
export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="bg-navy text-parchment border-t-2 border-gold mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        {/* Ornamental divider */}
        <div className="text-gold text-lg tracking-[0.5em] mb-4" aria-hidden="true">
          ✦ ✦ ✦
        </div>

        <p className="font-display text-xl text-gold mb-1">
          Epstein&apos;s Olde Fashioned Pervy Massages
        </p>

        <p className="text-xs tracking-widest uppercase text-parchment/60 mb-4">
          Est. 1991 &mdash; Discretion. Process. Results.
        </p>

        <p className="text-xs text-parchment/40">
          &copy; {new Date().getFullYear()} Epstein&apos;s Olde Fashioned Pervy Massages.
          All discretions reserved.{" "}
          <span className="italic">
            Serving discerning clients at epsteinsmassage.com
          </span>
        </p>

        <p className="mt-3 text-xs text-parchment/30 italic">
          This is a work of satire. Any resemblance to actual services, living or deceased,
          is entirely the point.
        </p>
      </div>
    </footer>
  );
}
