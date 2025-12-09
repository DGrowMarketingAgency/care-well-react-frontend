import React from "react";
import "./Servicesection.css";
import servicesData from "../../data/servicesData";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <>
      <div className="service-section">
        <div className="container">
          <p className="service-sub-heading">
            All Essential Medical Services for Your Family
          </p>
          <h2 style={{ marginBottom: "80px" }}>
            As a multispeciality hospital in Chennai, we provide complete
            medical care for all age groups..
          </h2>

          <div className="service-container">
            {servicesData.map((item) => (
              <Link to={item.link} key={item.id} className="service-box">
                <div className="service-box-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="service-box-text">
                  <div className="service-heading">{item.title}</div>
                  <p>{item.desc}</p>

                  <div className="service-box-btn">
                    Learn More <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
