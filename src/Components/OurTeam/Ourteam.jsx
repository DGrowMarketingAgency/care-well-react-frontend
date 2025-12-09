import React, { useState, useEffect } from "react";
import "./ourteam.css";
import doctor1 from "../../assets/d1.png";
import doctor2 from "../../assets/d3.png";
import doctor3 from "../../assets/d4.png";
import doctor4 from "../../assets/d1.png";
import doctor5 from "../../assets/d4.png";
import doctor6 from "../../assets/d3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

// DOCTOR DATA
const doctors = [
  { img: doctor1, name: "Dr. Aravind Kumar", spec: "Cardiologist" },
  { img: doctor2, name: "Dr. Meera Nair", spec: "Dermatologist" },
  { img: doctor3, name: "Dr. Sanjay Rao", spec: "Orthopedic Surgeon" },
  { img: doctor4, name: "Dr. Priya Sharma", spec: "Gynecologist" },
  { img: doctor5, name: "Dr. Rahul Menon", spec: "Neurologist" },
  { img: doctor6, name: "Dr. Kavya Iyer", spec: "Pediatrician" },
];

const Ourteam = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(auto);
  }, []);

  const getVisibleSlides = () => {
    return [
      doctors[index],
      doctors[(index + 1) % doctors.length],
      doctors[(index + 2) % doctors.length],
    ];
  };

  return (
    <>
      <div className="container">
        <div className="our-team-container">
          <div className="team-container">
            <div className="team-member">
              {getVisibleSlides().map((doc, i) => (
                <div className="team-img" key={i}>
                  <img src={doc.img} alt={doc.name} />
                  <div className="inner-con-process">
                    <h3>{doc.name}</h3>
                    <p>{doc.spec}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="arrow-cont-process">
              <div className="left-arrow-con" onClick={prevSlide}>
                <ChevronLeft className="left-con-icon" />
              </div>

              <div className="right-arrow-con" onClick={nextSlide}>
                <ChevronRight className="left-con-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
