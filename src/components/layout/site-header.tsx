"use client";
import React from "react";

import { useState } from "react";

/** Navigation links with section anchor IDs */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Franchising", href: "#franchising" },
] as const;

/** Scroll smoothly to a section anchor */
function scrollTo(href: string): void {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/** Sticky navigation header */
export function SiteHeader(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(href: string): void {
    scrollTo(href);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-navy text-parchment border-b-2 border-gold shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-display text-sm sm:text-base font-bold tracking-widest uppercase text-gold hover:text-parchment transition-colors"
          aria-label="Return to top"
        >
          Epstein&apos;s Olde Fashioned Pervy Massages
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(href);
              }}
              className="text-xs tracking-widest uppercase text-parchment/80 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-parchment hover:text-gold transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          className="md:hidden bg-navy border-t border-gold/40 px-4 pb-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className="block text-xs tracking-widest uppercase text-parchment/80 hover:text-gold transition-colors py-1"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
