import React from "react";
import Banner from "../../../Components/banner/Banner";
import FaqSection from "../../../Components/FAQ/FaqSection";
import ServicePageServices from "../../../Components/Servicepageservices/ServicePageServices";
import ServiceWhySection from "../../../Components/ServiceWhy/ServiceWhySection";
import ContactSection from "../../../Components/ContactSection/ContactSection";

const GeneralMedicine = () => {
  return (
    <>
      <Banner />
      {/*  */}
      <ServicePageServices />
      {/*  */}
      <ServiceWhySection />
      {/*  */}
      <FaqSection />
      {/*  */}
      <ContactSection />
    </>
  );
};

export default GeneralMedicine;
