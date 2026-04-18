import React from "react";

const STATS = [
  {
    figure: "30+",
    label: "Years of Operation",
    footnote: "approximately",
  },
  {
    figure: "100%",
    label: "Client Retention Rate",
    footnote: "They don't leave",
  },
  {
    figure: "0",
    label: "Successful Prosecutions",
    footnote: "to date",
  },
] as const;

/** Deadpan metrics bar */
export function StatsBar(): React.JSX.Element {
  return (
    <div className="bg-burgundy text-parchment px-4 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {STATS.map(({ figure, label, footnote }) => (
          <div key={label}>
            <p className="font-display text-5xl font-bold text-gold mb-1">
              {figure}
            </p>
            <p className="text-sm tracking-widest uppercase text-parchment/80 mb-1">
              {label}
            </p>
            <p className="text-xs italic text-parchment/40">{footnote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
