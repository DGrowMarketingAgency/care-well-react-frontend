import React from "react";
import "./ctasection.css";
import { useLocation } from "react-router-dom";
import ctaData from "../../data/cta.json";

const CtaSection = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const homeData = ctaData.home;
  const aboutData = ctaData.about;

  return (
    <div className="cta-section">
      <div className="cta-text">
        {isHome ? (
          <>
            <h2>{homeData.title}</h2>
            <p>{homeData.description}</p>
          </>
        ) : (
          <>
            <h2>{aboutData.headline}</h2>
            <h4>{aboutData.subheading}</h4>
            <p>{aboutData.body}</p>
            <button className="cta-btn">{aboutData.button}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CtaSection;
