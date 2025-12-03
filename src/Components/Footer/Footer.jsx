import React from "react";
import "./footer.css";
import footerImg1 from "../../assets/bg-patten.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-over">
          <div className="footer-over-img1">
            <img src={footerImg1} alt="" />
          </div>
          <div className="footer-over-img2">
            <img src={footerImg1} alt="" />
          </div>
        </div>
        <div className="container">
          {/* top */}
          <div className="top-footer">
            <div className="top-footer-text">
              <h2>Important updates waiting for you</h2>
              <p>
                We offer a wide range of healthcare services to meet your needs.
              </p>
            </div>
            <div className="footer-input-btn">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          {/* line */}
          <div className="divider-line"></div>
          {/* middle */}
          <div className="middle-footer">
            <div className="middle-container">
              <div className="footer-box footer-box1">
                <div className="footer-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="footer-content">
                  <h2>CAREWELL HOSPITALS</h2>
                  <p>
                    We’ve provided affordable, high-quality private healthcare
                    for over 35 years – offering support, peace of mind, and
                    lasting care.
                  </p>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Youtube />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Twitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-box footer-box2">
                <h2>Our Services</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Gyenocology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Pediatrics </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Dermatology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Diabetes </Link>
                  </li>
                  <li>
                    <Link to={"/"}>GGeneral Surgery </Link>
                  </li>
                  <li>
                    <Link to={"/"}>General Medicine</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-box footer-box3">
                <h2>Our Services</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Gyenocology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Pediatrics </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Dermatology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Diabetes </Link>
                  </li>
                  <li>
                    <Link to={"/"}>GGeneral Surgery </Link>
                  </li>
                  <li>
                    <Link to={"/"}>General Medicine</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-box footer-box3">
                <h2>Our Services</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Gyenocology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Pediatrics </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Dermatology </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Diabetes </Link>
                  </li>
                  <li>
                    <Link to={"/"}>GGeneral Surgery </Link>
                  </li>
                  <li>
                    <Link to={"/"}>General Medicine</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom-footer">
            <p>@2025 Carewell Hospital |All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
