import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import GeneralMedicine from "./Pages/service/General Medicine/GeneralMedicine";
import Gynecology from "./Pages/service/Gynecology/Gynecology";
import Pediatrics from "./Pages/service/Pediatrics/Pediatrics";
import Ent from "./Pages/service/ENT/Ent";
import Physiotherapy from "./Pages/service/Physiotherapy/Physiotherapy";
import Orthopedics from "./Pages/service/Orthopedics/Orthopedics";
import Dermatology from "./Pages/service/Dermatology/Dermatology";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={"blog"} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
        <Route path="/general-medicine" element={<GeneralMedicine />} />
        <Route path="/gynecology" element={<Gynecology />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/ent" element={<Ent />} />
        <Route path="/physiotherapy" element={<Physiotherapy />} />
        <Route path="/orthopedics" element={<Orthopedics />} />
        <Route path="/dermatology" element={<Dermatology />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
