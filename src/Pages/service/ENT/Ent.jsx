import React from "react";
import Banner from "../../../Components/banner/Banner";
import ServicePageServices from "../../../Components/Servicepageservices/ServicePageServices";
import FaqSection from "../../../Components/FAQ/FaqSection";
import ServiceWhySection from "../../../Components/ServiceWhy/ServiceWhySection";

const Ent = () => {
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

export default Ent;
