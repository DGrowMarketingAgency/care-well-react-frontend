import "../../Pages/home/home.css";

import aboutImg from "../../assets/home-about.png";
import heart from "../../assets/heart.png";
import person from "../../assets/person.png";
import clock from "../../assets/clock.png";

import aboutTIcon from "../../assets/about-tablet-icon.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-img">
          <div className="left-about-img">
            <img src={aboutImg} alt="" />
            <div className="inner-text-con-about">
              <div className="about-t-icon">
                <img src={aboutTIcon} alt="" />
              </div>
              <div className="about-t-text">
                <h3>Quality Healthcare </h3>
                <p>
                  Our team delivers the right care at the right time — for every
                  patient,every day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="about-content">
            <p className="about-sub-tittle">ABOUT US</p>
            <h2>Our Practice Excellent Care, Human Principles.</h2>
            <p className="describtion">
              Carewell Hospital functions as a 24 hour hospital in Chennai,
              offering dependable medical care and ethical clinical practices.
              Our doctors ensure detailed assessment, evidence-based treatment,
              and continued support. <br /> <br /> As a multispeciality hospital
              in Chennai, we focus on patient safety, clarity in communication,
              and comfort during every visit.
            </p>
          </div>
          <div className="highlight-container">
            <div className="highlight-box highlight-box1">
              <div className="highlight-img">
                <img src={person} alt="" />
              </div>
              <div className="highlight-text">
                <h2>100%</h2>
                <p>Skilled and experienced medical team</p>
              </div>
            </div>
            <div className="highlight-box highlight-box2">
              <div className="highlight-img">
                <img src={clock} alt="" />
              </div>
              <div className="highlight-text">
                <h2>24/7</h2>
                <p>emergency support and pharmacy</p>
              </div>
            </div>
            <div className="highlight-box highlight-box3">
              <div className="highlight-img">
                <img src={heart} alt="" />
              </div>
              <div className="highlight-text">
                <h2>3,200+</h2>
                <p> patients treated successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
