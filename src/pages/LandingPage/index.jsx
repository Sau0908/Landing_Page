import React from "react";

import Navbar from "components/Navbar/Navbar";
import HeroSection from "components/HeroSection/HeroSection";
import FooterSection from "components/Footer/FooterSection";
import InfoMainSection from "components/InfoMainSection/InfoMainSection";

export default function LandingPagePage() {
  return (
    <>
      <div className="w-full overflow-x-hidden bg-white-A700 shadow-lg">
        <Navbar />
        <HeroSection />
        <InfoMainSection />
        <FooterSection />
      </div>
    </>
  );
}
