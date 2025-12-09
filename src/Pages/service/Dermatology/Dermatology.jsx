import React from "react";
import Banner from "../../../Components/banner/Banner";
import ServicePageServices from "../../../Components/Servicepageservices/ServicePageServices";
import FaqSection from "../../../Components/FAQ/FaqSection";
import ServiceWhySection from "../../../Components/ServiceWhy/ServiceWhySection";

const Dermatology = () => {
  return (
    <>
      <Banner />
      {/*  */}
      <ServicePageServices />
      {/*  */}
      <ServiceWhySection />

      {/*  */}
      <FaqSection />
    </>
  );
};

export default Dermatology;
