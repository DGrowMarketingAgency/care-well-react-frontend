import React from "react";
import "./ContactSection.css";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <div className="contact-wrapper1">
        <div className="contact-box contact-box1"></div>
        <div className="contact-box contact-box2">
          <div className="contact-text-sec">
            <h2>How Can We Support You Today?</h2>
            <p>
              For any medical concern, our team is available 24/7. Reach out to
              the best hospital in Chennai for immediate help.
            </p>
            <div className="contact-adders-sec">
              <div className="con-sec-phone">
                <div className="con-sec-icon">
                  <Phone className="con-icon" />
                </div>
                <div className="con-sec-icon-text">
                  <h3>Contact Us </h3>
                  <a href="tel:916381601020">+91 63816 01020</a>
                </div>
              </div>
              <div className="con-sec-phone">
                <div className="con-sec-icon">
                  <Mail className="con-icon" />
                </div>
                <div className="con-sec-icon-text">
                  <h3>Email </h3>
                  <a href="mailto:Carewellhospitals@gmail.com">
                    Carewellhospitals@gmail.com
                  </a>
                </div>
              </div>
              <div className="con-sec-phone">
                <div className="con-sec-icon">
                  <MapPin className="con-icon" />
                </div>
                <div className="con-sec-icon-text">
                  <h3>Address </h3>
                  <a href="tel:916381601020">
                    2, Trunk Road, Swaminathan Nagar, Pushpa Nagar, Chennai –
                    600056
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box contact-box3">
          <h2> Book Your Appointment in One Minute</h2>
          <p>
            Quick medical access at a trusted 24 hour hospital in Chennai. Share
            your details for a fast callback.
          </p>
          <Link to={"/"} className="con-sec-btn">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
