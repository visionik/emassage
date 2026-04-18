import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

describe("SiteHeader", () => {
  it("renders the wordmark", () => {
    render(<SiteHeader />);
    expect(screen.getByLabelText(/return to top/i)).toBeInTheDocument();
  });

  it("renders all nav links in desktop nav", () => {
    render(<SiteHeader />);
    const navLinks = ["Home", "Mission", "Services", "About", "Testimonials", "Franchising"];
    navLinks.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("toggles the mobile menu on hamburger click", () => {
    render(<SiteHeader />);
    const toggleBtn = screen.getByRole("button", { name: /open menu/i });
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    // mobile nav should now be present
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
  });

  it("closes the mobile menu on a nav link click", () => {
    render(<SiteHeader />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    const mobileNav = screen.getByRole("navigation", { name: /mobile navigation/i });
    const homeLink = mobileNav.querySelector("a")!;
    fireEvent.click(homeLink);
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  it("desktop nav link click scrolls to section if element exists", () => {
    const scrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;
    render(<SiteHeader />);
    // Create a target element so scrollTo finds it
    const target = document.createElement("section");
    target.id = "mission";
    document.body.appendChild(target);
    const missionLink = screen.getAllByText("Mission")[0]!;
    fireEvent.click(missionLink);
    expect(scrollIntoView).toHaveBeenCalled();
    document.body.removeChild(target);
  });
});

describe("SiteFooter", () => {
  it("renders the establishment name", () => {
    render(<SiteFooter />);
    expect(screen.getAllByText(/Epstein/).length).toBeGreaterThan(0);
  });

  it("renders the satire disclaimer", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/work of satire/i)).toBeInTheDocument();
  });

  it("renders the domain reference", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/epsteinsmassage\.com/i)).toBeInTheDocument();
  });

  it("renders the human trafficking disclosure", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/nothing funny about sex trafficking/i)).toBeInTheDocument();
  });

  it("renders the hotline link", () => {
    render(<SiteFooter />);
    const link = screen.getByRole("link", { name: /national human trafficking hotline/i });
    expect(link).toHaveAttribute("href", "https://humantraffickinghotline.org");
  });
});
