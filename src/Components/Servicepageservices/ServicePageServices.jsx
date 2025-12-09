import React from "react";
import "../Service-section/Servicesection.css";
import { useLocation } from "react-router-dom";
import servicesPageData from "../../data/servicePageData";

const ServicePageServices = () => {
  const location = useLocation();

  // Get the department from the URL path
  // e.g. "/general-medicine" => "general-medicine"
  const department = location.pathname.replace("/", "");

  const departmentData = servicesPageData[department];

  if (!departmentData) {
    return <p>Department not found</p>;
  }

  return (
    <div className="service-section">
      <div className="container">
        <h2 className="service-main-heading">
          {departmentData.title} Treatments
        </h2>
        <p className="service-sub-heading">{departmentData.subtitle}</p>

        <div className="service-container">
          {departmentData.treatments.map((treatment, index) => (
            <div key={index} className="service-box">
              <div className="service-box-img">
                <img src={treatment.img} alt={treatment.name} loading="lazy" />
              </div>

              <div className="service-box-text">
                <div className="service-heading">{treatment.name}</div>
                <p>{treatment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePageServices;
