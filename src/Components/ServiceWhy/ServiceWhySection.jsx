import React from "react";
import "../WhyChoose/Why.css";
import { useLocation } from "react-router-dom";
import serviceWhyData from "../../data/serviceWhyData";
import CircleBadge from "../WhyChoose/CircleBadge";

const ServiceWhySection = () => {
  const location = useLocation();
  const department = location.pathname.replace("/", "");

  const data = serviceWhyData[department];

  if (!data) return null;

  return (
    <div className="why-container">
      <div className="img-why">
        <div className="why-img1">
          <img src={data.img2} alt="" />
        </div>

        <div className="why-img2">
          <div className="why-img2-inner1">
            <CircleBadge />
          </div>
          <div className="why-img2-inner2">
            <img src={data.img1} alt="" />
          </div>
        </div>
      </div>

      <div className="why-section-text">
        <div className="why-heading">
          <h4>{data.heading}</h4>
          <h2>{data.subHeading}</h2>
          <p>{data.description}</p>
        </div>

        <div className="why-box-container">
          {data.boxes.map((box, i) => (
            <div className="why-box" key={i}>
              <div className="why-box-head">
                <div className="why-box-icon">
                  <img src={box.icon} alt="" />
                </div>
                <div className="why-box-num">{box.number}</div>
              </div>
              <div className="why-box-body">
                <h3>{box.title}</h3>
                <p>{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWhySection;
