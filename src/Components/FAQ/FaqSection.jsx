import React, { useState } from "react";
import "./faq.css";
import faqImg from "../../assets/faq.png";
import { ChevronRight, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import faqJson from "../../data/faq.json";

const FaqSection = () => {
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  // Get FAQ based on the current route
  const faqData = faqJson[pathname] || [];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-container">
        <div className="faq-left">
          <div className="faq-subtitle">FAQ'S</div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Explore commonly asked questions based on the department you are
            viewing. Get quick answers and clear guidance.
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
            <img src={faqImg} alt="FAQ Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
