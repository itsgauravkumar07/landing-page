import React from "react";
import Hero from "../components/Hero.jsx";
import PackageSection from "../components/PackageSection.jsx";
import Experience from "../components/Experience.jsx";
import Reviews from "../components/Reviews.jsx";
import FinalCTA from "../components/FinalCTA.jsx";
import Footer from "../components/Footer.jsx";
import LeadFormModal from "../components/LeadFormModal.jsx";
import StickyCTA from "../components/StickyCTA.jsx";
import VideoLightbox from "../components/VideoLightbox.jsx";
import FloatingContact from "../components/FloatingContact.jsx";
import Header from "../components/Header.jsx";

// The original Maldives Escape landing page — everything that used to
// live directly in App.jsx now lives here, so App.jsx can route between
// this page and the post-submit Thank You page.
export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <PackageSection />
      <Experience />
      <Reviews />
      <FinalCTA />
      <Footer />

      <LeadFormModal />
      <StickyCTA />
      <VideoLightbox />
      <FloatingContact />
    </>
  );
}
