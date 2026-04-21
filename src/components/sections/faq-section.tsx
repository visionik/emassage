"use client";

import React, { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Did Mr. Epstein kill himself?",
    answer:
      "We respect the official findings of the United States Department of Justice.",
  },
  {
    question: "Is Epstein's Olde Fashioned Pervy Massages currently under investigation?",
    answer:
      "We prefer the term 'of ongoing interest.' It is more accurate, and considerably more flattering.",
  },
  {
    question: "Is this legal?",
    answer: "Define \u2018this.\u2019",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You don't. We book you. Clients are identified, assessed, and contacted through our proprietary referral network. Submitting your name will not accelerate this process. Neither will calling.",
  },
  {
    question: "What happened to your client records?",
    answer: "Which client records?",
  },
  {
    question: "Are your services available to everyone?",
    answer:
      "No. We have standards. They are not the standards you are thinking of, but they are standards nonetheless, and we apply them with rigour.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes. They self-destruct after one use.",
  },
];

/** Single expandable FAQ item */
function FaqRow({ item }: { item: FaqItem }): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-navy group-hover:text-burgundy transition-colors">
          {item.question}
        </span>
        <span
          className="text-gold text-xl leading-none shrink-0 mt-0.5 transition-transform"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-navy/70 leading-relaxed pr-8">
          {item.answer}
        </p>
      )}
    </div>
  );
}

/** FAQ accordion section */
export function FaqSection(): React.JSX.Element {
  return (
    <section
      id="faq"
      className="bg-parchment px-4 py-24"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-burgundy mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-navy/50 italic text-sm">
            We answer what we can. We cannot answer everything. This is intentional.
          </p>
        </div>

        <div>
          {FAQ_ITEMS.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
