import React from "react";
import "./Why.css";

const CircleBadge = () => {
  const text = "CERTIFIED MEDICAL EXCELLENCE ";
  const letters = text.split("");

  return (
    <div className="circle-con">
      <div className="outer-circle">
        <div className="text-circle">
          {letters.map((letter, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${i * (360 / letters.length)}deg)`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="inner-circle">
          <h1>20+</h1>
          <p>Years</p>
        </div>
      </div>
    </div>
  );
};

export default CircleBadge;
