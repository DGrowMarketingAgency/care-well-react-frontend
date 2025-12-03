import React from "react";
import Banner from "../../Components/banner/Banner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import VisionMission from "../../Components/VisionMission/VisionMission";
import Ourteam from "../../Components/OurTeam/Ourteam";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import CtaSection from "../../Components/CTA/CtaSection";

const About = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <VisionMission />
      <Ourteam />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
};

export default About;
