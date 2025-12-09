import React from "react";
import { useLocation } from "react-router-dom";
import bannerData from "../../data/bannerData";
import "./banner.css";

const Banner = () => {
  const { pathname } = useLocation();
  const key = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const content = bannerData[key];

  return (
    <div
      className="dynamic-banner"
      style={{
        backgroundImage: `url(${content.image})`,
      }}
    >
      <div className="banner-overlay">
        <h2>{content.title}</h2>
        <h3>{content.subtitle}</h3>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
