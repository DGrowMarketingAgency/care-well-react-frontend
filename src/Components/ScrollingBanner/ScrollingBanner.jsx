import React from "react";
import "./ScrollingBanner.css";
import logo from "../../assets/slide-logo.png";
const ScrollingBanner = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-track">
        {[...Array(2)].map((_, i) => (
          <div className="scroll-content" key={i}>
            <span className="text-solid">CAREWELL HOSPITAL</span>
            <img src={logo} className="scroll-logo" alt="logo" />
            <span className="text-outline">CAREWELL HOSPITAL</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
