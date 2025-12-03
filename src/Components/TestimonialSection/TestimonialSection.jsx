import React, { useState, useEffect } from "react";
import "./TestimonialSection.css";
import doctorImg from "../../assets/TestimonialSection.png";
import user1 from "../../assets/bg-patten.png";

const testimonials = [
  {
    name: "Jaleesh",
    role: "Patient",
    title: "Excellent Service",
    message:
      "I had an outstanding experience. The doctors took time to listen, explain, and provide the best treatment plan. The nurses were warm, attentive, and always ready to help. The entire process was smooth, transparent, and reassuring.",
    img: user1,
  },
  {
    name: "Jaleesh2",
    role: "Patient2",
    title: "Excellent Service2",
    message:
      "I had an outstanding sjhglsk experience. The doctors took time to listen, explain, and provide the best treatment plan. The nurses were warm, attentive, and always ready to help. The entire process was smooth, transparent, and reassuring.",
    img: user1,
  },
  {
    name: "Jaleesh3",
    role: "Patient3",
    title: "Excellent Service2",
    message:
      "I had an outstanding sjhglsk experience. The doctors took time to listen, explain, and provide the best treatment plan. The nurses were warm, attentive, and always ready to help. The entire process was smooth, transparent, and reassuring.",
    img: user1,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      {/* LEFT SIDE DOCTOR IMAGE */}
      <div className="testimonial-left">
        <img src={doctorImg} alt="doctor" className="doctor-image" />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="testimonial-right">
        <h4 className="subtitle">Testimonial</h4>
        <h2 className="title">
          Real Patients, Real Stories. <br /> And Our Achievements.
        </h2>

        {/* SLIDER WRAPPER */}
        <div className="slider-wrapper">
          {/* PREV BUTTON */}
          <button className="arrow-btn left" onClick={prevSlide}>
            ❮
          </button>

          {/* CARD */}
          <div className="testimonial-card fade">
            <div className="card-left">
              <img
                src={testimonials[index].img}
                alt=""
                className="patient-img"
              />
              <button className="play-btn">▶</button>

              <div className="user-info">
                <h4>{testimonials[index].name}</h4>
                <p>{testimonials[index].role}</p>
              </div>
            </div>

            <div className="card-right">
              <h3>{testimonials[index].title}</h3>
              <p>{testimonials[index].message}</p>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button className="arrow-btn right" onClick={nextSlide}>
            ❯
          </button>
        </div>

        {/* DOTS */}
        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
