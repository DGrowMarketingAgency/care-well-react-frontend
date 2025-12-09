import { Fragment } from "react";
import { MoveRight } from "lucide-react";
import "./home.css";

import heroImage from "../../assets/hero-img.png";
import aboutImg from "../../assets/home-about.png";
import heart from "../../assets/heart.png";
import person from "../../assets/person.png";
import clock from "../../assets/clock.png";
import ServicesSection from "../../Components/Service-section/ServicesSection";
import HomeProcess from "../../Components/HomeProcess/HomeProcess";
import Ourteam from "../../Components/OurTeam/Ourteam";
import FaqSection from "../../Components/FAQ/FaqSection";
import ScrollingBanner from "../../Components/ScrollingBanner/ScrollingBanner";
import aboutTIcon from "../../assets/about-tablet-icon.png";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import CtaSection from "../../Components/CTA/CtaSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import AboutSection from "../../Components/AboutSection/AboutSection";

const Home = () => {
  return (
    <Fragment>
      {/* hero */}
      <div className="home-container">
        <div className="hero-left">
          <div className="container">
            <p> Carewell Hospital,</p>
            <h1>
              24/7 Emergency Care <br />
              with Expert Doctors.
            </h1>
            <button className="hero-btn">
              {" "}
              Book Appointment{" "}
              <div className="btn-icon">
                <MoveRight className="arrow-icon" />
              </div>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="" />
        </div>
      </div>
      {/* about */}
      <AboutSection />
      {/* service Section */}
      <ServicesSection />
      {/* process section */}
      <HomeProcess />
      {/* Our Team */}
      <div className="our-team-header">
        <h2>
          Your Care <br /> Our Expert Team
        </h2>
        <p>
          Our team includes specialists with years of clinical experience,
          offering dependable guidance at a trusted multispeciality hospital in
          Chennai.
        </p>
      </div>
      <Ourteam />
      {/* Scroll */}
      <ScrollingBanner />
      {/* FAQ */}
      <FaqSection />
      {/* ContactSection */}
      <ContactSection />
      {/* TestimonialSection */}
      <TestimonialSection />
      {/* CTA */}
      <CtaSection />
    </Fragment>
  );
};

export default Home;
