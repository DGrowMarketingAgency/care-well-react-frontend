import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={"blog"} />
        <Route path="/contact" element={"contact"} />

        {/* Service Pages */}
        <Route path="/general-medicine" element={"GeneralMedicine "} />
        <Route path="/gynecology" element={"Gynecology "} />
        <Route path="/pediatrics" element={"Pediatrics "} />
        <Route path="/ent" element={"ENT "} />
        <Route path="/physiotherapy" element={"Physiotherapy "} />
        <Route path="/orthopedics" element={"Orthopedics "} />
        <Route path="/dermatology" element={"Dermatology "} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
