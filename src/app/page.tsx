import React from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { MissionSection } from "@/components/sections/mission-section";
import { PressBar } from "@/components/sections/press-bar";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { FranchisingSection } from "@/components/sections/franchising-section";

/** Single-page layout composing all content sections */
export default function Home(): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsBar />
        <MissionSection />
        <PressBar />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationsSection />
        <FranchisingSection />
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  );
}
