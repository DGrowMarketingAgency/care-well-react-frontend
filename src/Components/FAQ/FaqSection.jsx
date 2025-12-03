import React, { useState } from "react";
import "./faq.css";
import faqImg from "../../assets/faq.png";
import { ChevronRight, ChevronUp } from "lucide-react";

const faqData = [
  {
    q: "Do you provide 24-hour support?",
    a: "Yes. We operate as a 24 hour hospital in Chennai with emergency services and pharmacy support.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Yes, walk-ins are welcome. Priority is given to emergency cases.",
  },
  {
    q: "Do you offer pediatric emergency care?",
    a: "Yes, we provide safe and prompt emergency care in Chennai for children as well.",
  },
  {
    q: "Do you have an in-house laboratory?",
    a: "Yes, our lab operates round the clock for quick testing.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container">
        <div className="faq-container">
          <div className="faq-left">
            <div className="faq-subtitle">FAQ'S</div>
            <h2>Frequently Asked Question's</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, cumque non possimus, accusantium tempore dignissimos
              officia, enim id quos itaque odit est! Dolores ex voluptate nisi
              odit eaque, facere dolorem!
            </p>

            <div className="faq-qa">
              {faqData.map((item, index) => (
                <div
                  className="faq-item"
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">
                    {item.q}
                    <span className="faq-icon">
                      {activeIndex === index ? <ChevronUp /> : <ChevronRight />}
                    </span>
                  </div>

                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-right">
            <div className="faq-img">
              <img src={faqImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
