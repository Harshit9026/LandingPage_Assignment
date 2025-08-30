import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyMindfulSection from "../components/WhyMindfulSection";
import ProgramsSection from "../components/ProgramsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import TrialPopup from "../components/TrialPopup";

export default function LandingPage() {
  const [isTrialPopupOpen, setIsTrialPopupOpen] = useState(false);

  const handleStartTrial = () => {
    setIsTrialPopupOpen(true);
  };

  const handleCloseTrialPopup = () => {
    setIsTrialPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-white ">
      <style>{`
        html {
          scroll-behavior: smooth;
          
        }
      `}</style>
      <Header onStartTrial={handleStartTrial} />
      <HeroSection onStartTrial={handleStartTrial} />
      <WhyMindfulSection />
      <ProgramsSection onStartTrial={handleStartTrial} />
      <PricingSection onStartTrial={handleStartTrial} />
      <Footer />
      <TrialPopup isOpen={isTrialPopupOpen} onClose={handleCloseTrialPopup} />
    </div>
  );
}
