import React from "react";
import "./Why.css";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import CircleBadge from "./CircleBadge";
import box1 from "../../assets/i (1).png";
import box2 from "../../assets/i (2).png";
import box3 from "../../assets/i (3).png";
import box4 from "../../assets/i (4).png";

const WhySection = () => {
  return (
    <>
      <div className="why-container">
        <div className="img-why">
          <div className="why-img1">
            <img src={w2} alt="" />
          </div>
          <div className="why-img2">
            <div className="why-img2-inner1">
              <CircleBadge />
            </div>
            <div className="why-img2-inner2">
              <img src={w1} alt="" />
            </div>
          </div>
        </div>
        <div className="why-section-text">
          <div className="why-heading">
            <h4>The Carewell Advantage</h4>
            <h2>Why Choose Us For Your Health Care Needs</h2>
            <p>
              When you choose Carewell Hospitals, you're choosing a healthcare
              partner that values your time, health, and peace of mind.
            </p>
          </div>
          <div className="why-box-container">
            <div className="why-box why-box1">
              <div className="why-box-head">
                <div className="why-box-icon">
                  <img src={box2} alt="" />
                </div>
                <div className="why-box-num">1</div>
              </div>
              <div className="why-box-body">
                <h3>Modern Diagnostic Lab</h3>
                <p>
                  Our in-house laboratory is equipped with the latest diagnostic
                  tools, ensuring quick and accurate test results that help
                  doctors make informed decisions.
                </p>
              </div>
            </div>
            <div className="why-box why-box1">
              <div className="why-box-head">
                <div className="why-box-icon">
                  <img src={box1} alt="" />
                </div>
                <div className="why-box-num">02</div>
              </div>
              <div className="why-box-body">
                <h3> 24/7 Pharmacy Services</h3>
                <p>
                  No need to search for pharmacies late at night. Our on-site
                  pharmacy stocks all essential medications and is available
                  round the clock.
                </p>
              </div>
            </div>{" "}
            <div className="why-box why-box1">
              <div className="why-box-head">
                <div className="why-box-icon">
                  <img src={box3} alt="" />
                </div>
                <div className="why-box-num">03</div>
              </div>
              <div className="why-box-body">
                <h3> Efficient Emergency Response</h3>
                <p>
                  During medical emergencies, every second counts. Our trained
                  emergency team responds swiftly with life-saving interventions
                  whenever you need
                </p>
              </div>
            </div>{" "}
            <div className="why-box why-box1">
              <div className="why-box-head">
                <div className="why-box-icon">
                  <img src={box4} alt="" />
                </div>
                <div className="why-box-num">04</div>
              </div>
              <div className="why-box-body">
                <h3> Affordable Healthcare</h3>
                <p>
                  Quality healthcare shouldn't drain your savings. We offer
                  competitive pricing across all services while maintaining
                  clinical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
