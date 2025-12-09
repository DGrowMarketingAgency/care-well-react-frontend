import React from "react";
import bannerimg from "../../assets/about-ban.png";

const AboutBanner = () => {
  return (
    <div
      className="dynamic-banner"
      style={{
        backgroundImage: ` url(${bannerimg})`,
      }}
    >
      <div className="banner-overlay">
        <h1>About Us</h1>
        <h3>Caring for You, Every Step of the Way</h3>
        <p>
          At Carewell Hospitals, we blend expert medical care, advanced
          technology, and genuine compassion to serve patients across Chennai.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
