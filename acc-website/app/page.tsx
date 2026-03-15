"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <Hero onOpenForm={() => setFormOpen(true)} />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <TrustBadges />
      <CTASection onOpenForm={() => setFormOpen(true)} />
      <Footer />
      <IntakeForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
