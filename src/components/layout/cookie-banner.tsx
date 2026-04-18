"use client";

import React, { useState, useEffect } from "react";

const STORAGE_KEY = "epsteins-cookies-accepted";

/** Cookie consent banner — appears until dismissed, persists via localStorage */
export function CookieBanner(): React.JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: initialise from browser-only localStorage
    if (!accepted) setVisible(true);
  }, []);

  function dismiss(): void {
    localStorage.setItem(STORAGE_KEY, "yes");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t-2 border-gold px-4 py-4 sm:py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-parchment/80 leading-relaxed max-w-2xl">
          This site uses cookies.{" "}
          <span className="text-parchment">
            Your data has been shared with parties who prefer not to be named.
          </span>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={dismiss}
            className="text-xs tracking-widest uppercase px-5 py-2 bg-gold text-navy font-semibold hover:bg-parchment transition-colors"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={dismiss}
            className="text-xs tracking-widest uppercase px-5 py-2 border border-gold/50 text-parchment/70 hover:border-gold hover:text-parchment transition-colors"
            aria-label="Dismiss cookie notice"
          >
            What choice do I have?
          </button>
        </div>
      </div>
    </div>
  );
}
