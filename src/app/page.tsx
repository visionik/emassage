import React from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FranchisingSection } from "@/components/sections/franchising-section";

/** Single-page layout composing all six content sections */
export default function Home(): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FranchisingSection />
      </main>
      <SiteFooter />
    </>
  );
}
