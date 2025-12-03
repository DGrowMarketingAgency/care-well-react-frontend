import React from "react";
import "../HomeProcess/homeprocess.css";
import process from "../../assets/process-home-right.png";

const HomeProcess = () => {
  return (
    <>
      <div className="container">
        <div className="process-home-container">
          <div className="process-home-left">
            <div className="process-home-left-text">
              <div className="home-process-heading">Process</div>
              <h2> Take Control of Your Health With These Simple Steps</h2>
              <p>
                Our expert doctors, advanced equipment, and 24/7 critical care
                unit ensure timely, effective, and reliable treatment for
                patients of all ages.
              </p>
            </div>
            <div className="home-process-left-img">
              <img src={process} alt="" />
            </div>
          </div>
          <div className="process-home-right">
            <div className="process-home-box process-home-box1">
              <div className="process-home-num">
                <div className="num-text">01</div>
                <div className="process-line"></div>
              </div>
              <div className="process-home-text">
                <h2>Meet Experienced Doctors</h2>
                <p>
                  Consult experienced specialists trusted across the region for
                  reliable diagnosis.
                </p>
              </div>
            </div>
            <div className="process-home-box process-home-box2">
              <div className="process-home-num">
                <div className="num-text">02</div>
                <div className="process-line"></div>
              </div>
              <div className="process-home-text">
                <h2>Scientific Diagnosis</h2>
                <p>
                  Our lab supports emergency needs, making us a dependable 24
                  hour hospital in Chennai.
                </p>
              </div>
            </div>
            <div className="process-home-box process-home-box3">
              <div className="process-home-num">
                <div className="num-text">03</div>
                <div className="process-line"></div>
              </div>
              <div className="process-home-text">
                <h2> Thoughtful Treatment</h2>
                <p>
                  Treatments are designed to ensure steady recovery and
                  long-term health.
                </p>
              </div>
            </div>
            <div className="process-home-box process-home-box4">
              <div className="process-home-num">
                <div className="num-text">04</div>
                <div className="process-line"></div>
              </div>
              <div className="process-home-text">
                <h2>Continued Care</h2>
                <p>
                  Follow-ups and monitoring at the best hospital in Chennai for
                  complete healing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProcess;
