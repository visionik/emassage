import React from "react";

/** Redacted media outlet placeholder */
const OUTLETS = [
  { width: "w-28", lines: 1 },
  { width: "w-20", lines: 1 },
  { width: "w-36", lines: 1 },
  { width: "w-24", lines: 1 },
  { width: "w-32", lines: 1 },
  { width: "w-20", lines: 1 },
] as const;

/** As Seen In bar — coverage withheld at the request of counsel */
export function PressBar(): React.JSX.Element {
  return (
    <div className="bg-parchment-dark border-y border-gold/30 px-4 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-navy/40 mb-6">
          As Seen In
        </p>

        {/* Redacted logo row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-5">
          {OUTLETS.map((outlet, i) => (
            <div
              key={i}
              className={`${outlet.width} h-6 bg-navy/80 rounded-sm`}
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="text-xs italic text-navy/40">
          Coverage withheld at the request of counsel.
        </p>
      </div>
    </div>
  );
}
