"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturedCollections from "../components/FeaturedCollections";
import WhyKanverse from "../components/WhyKanverse";
import HowItWorks from "../components/HowItWorks";
import FeaturedTemplates from "../components/FeaturedTemplates";
import PremiumAddons from "../components/PremiumAddons";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <main className="min-h-screen bg-kanverse-bg text-kanverse-text relative overflow-x-hidden">
      <Navigation onStartProject={openInquiry} />
      <HeroSection onStartProject={openInquiry} />
      <FeaturedCollections />
      <WhyKanverse />
      <HowItWorks />
      <FeaturedTemplates />
      <PremiumAddons />
      <Testimonials />
      <FAQ />
      <FinalCTA onStartProject={openInquiry} />
      <Footer />
      <InquiryModal isOpen={isInquiryOpen} onClose={closeInquiry} />
    </main>
  );
}
