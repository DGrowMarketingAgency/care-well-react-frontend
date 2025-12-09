import React from "react";
import "./Vision.css";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import rocket from "../../assets/rocket.png";
import bow from "../../assets/bow.png";

const VisionMission = () => {
  return (
    <>
      <div className="vision-wrapper">
        <div className="vision-box vision-box1">
          <p>Vision & Mission</p>
          <h2>Healthcare Built on Trust, Innovation & Empathy</h2>
        </div>
        <div className="vision-box vision-box2">
          <div className="vision-text-sec">
            <div className="vision-adders-sec">
              <div className="vision-sec-phone">
                <div className="vision-sec-icon">
                  <img src={rocket} alt="" className="vision-icon" />
                </div>
                <div className="vision-sec-icon-text">
                  <h3> Vision</h3>
                  <p>
                    “Our vision is to be Chennai’s most trusted healthcare
                    destination, known for exceptional care delivered with
                    genuine warmth.”
                  </p>
                </div>
              </div>
              <div className="divider-line-vision"></div>
              <div className="vision-sec-phone">
                <div className="con-sec-icon">
                  <img src={bow} alt="" className="con-icon" />
                </div>
                <div className="con-sec-icon-text">
                  <h3> Mission</h3>
                  <p>
                    {" "}
                    Our mission is to deliver accessible, affordable, and
                    high-quality healthcare for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vision-box vision-box3"></div>
      </div>
    </>
  );
};

export default VisionMission;
