import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { StatsBar } from "./stats-bar";
import { PressBar } from "./press-bar";
import { FaqSection, FAQ_ITEMS } from "./faq-section";
import { LocationsSection, LOCATIONS } from "./locations-section";

// ---------------------------------------------------------------------------
// StatsBar
// ---------------------------------------------------------------------------
describe("StatsBar", () => {
  it("renders all three stat figures", () => {
    render(<StatsBar />);
    expect(screen.getByText("30+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders stat labels", () => {
    render(<StatsBar />);
    expect(screen.getByText(/Years of Operation/i)).toBeInTheDocument();
    expect(screen.getByText(/Client Retention/i)).toBeInTheDocument();
    expect(screen.getByText(/Successful Prosecutions/i)).toBeInTheDocument();
  });

  it("renders footnotes", () => {
    render(<StatsBar />);
    expect(screen.getByText(/They don't leave/i)).toBeInTheDocument();
    expect(screen.getByText(/to date/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// PressBar
// ---------------------------------------------------------------------------
describe("PressBar", () => {
  it("renders the 'As Seen In' label", () => {
    render(<PressBar />);
    expect(screen.getByText(/As Seen In/i)).toBeInTheDocument();
  });

  it("renders the coverage withheld note", () => {
    render(<PressBar />);
    expect(screen.getByText(/Coverage withheld at the request of counsel/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// FaqSection
// ---------------------------------------------------------------------------
describe("FaqSection", () => {
  it("renders the FAQ heading", () => {
    render(<FaqSection />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FaqSection />);
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it("answers are hidden by default", () => {
    render(<FaqSection />);
    expect(screen.queryByText(/official findings of the United States/i)).not.toBeInTheDocument();
  });

  it("expands an answer on click", () => {
    render(<FaqSection />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0]!.question);
    fireEvent.click(firstQuestion);
    expect(screen.getByText(/official findings of the United States/i)).toBeInTheDocument();
  });

  it("collapses an answer on second click", () => {
    render(<FaqSection />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0]!.question);
    fireEvent.click(firstQuestion);
    fireEvent.click(firstQuestion);
    expect(screen.queryByText(/official findings of the United States/i)).not.toBeInTheDocument();
  });

  it("has the correct section id", () => {
    render(<FaqSection />);
    expect(document.getElementById("faq")).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// LocationsSection
// ---------------------------------------------------------------------------
describe("LocationsSection", () => {
  it("renders the section heading", () => {
    render(<LocationsSection />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders all location names", () => {
    render(<LocationsSection />);
    LOCATIONS.forEach((loc) => {
      expect(screen.getByText(loc.name)).toBeInTheDocument();
    });
  });

  it("renders the boat disclaimer", () => {
    render(<LocationsSection />);
    expect(screen.getByText(/You would need a boat/i)).toBeInTheDocument();
  });

  it("renders the 'temporarily' footer note", () => {
    render(<LocationsSection />);
    expect(screen.getByText(/Temporarily\./i)).toBeInTheDocument();
  });

  it("has the correct section id", () => {
    render(<LocationsSection />);
    expect(document.getElementById("locations")).toBeInTheDocument();
  });
});
