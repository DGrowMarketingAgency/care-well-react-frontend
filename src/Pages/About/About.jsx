import React from "react";
import AboutSection from "../../Components/AboutSection/AboutSection";
import VisionMission from "../../Components/VisionMission/VisionMission";
import Ourteam from "../../Components/OurTeam/Ourteam";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import CtaSection from "../../Components/CTA/CtaSection";
import AboutBanner from "../../Components/banner/AboutBanner";
import WhySection from "../../Components/WhyChoose/WhySection";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <VisionMission />
      <WhySection />
      <div className="our-team-header">
        <h2>Meet Our Team</h2>
        <h4>Highly Qualified Specialists</h4>
        <p>
          Every successful treatment is led by a team of dedicated medical
          professionals. At Carewell Hospitals, our doctors combine rigorous
          academic training with decades of clinical expertise to deliver
          exceptional patient outcomes. Each specialist continues to advance
          their skills to provide the most up-to-date, evidence-based care.
        </p>
      </div>
      <Ourteam />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
};

export default About;
