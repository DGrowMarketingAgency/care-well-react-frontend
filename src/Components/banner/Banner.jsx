import React from "react";
import { useLocation } from "react-router-dom";
import bannerData from "../../data/bannerData";
import "./banner.css";

const Banner = () => {
  const { pathname } = useLocation();
  const key = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname; // remove trailing slash
  const content = bannerData[key] || bannerData["/about"]; // fallback to /about if undefined

  return (
    <div
      className="dynamic-banner"
      style={{
        backgroundImage: `url(${content.image})`,
      }}
    >
      <div className="banner-overlay">
        <h1>{content.title}</h1>
        <h3>{content.subtitle}</h3>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
