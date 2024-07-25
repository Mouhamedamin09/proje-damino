import React, { useState } from "react";
import img1 from "../public/Online learning-bro.png";
import img2 from "../public/Course app-pana.png";
import img3 from "../public/Online learning-amico.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function About() {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="About-page">
      <div className="cont-about1" data-aos="fade-up"  data-aos-duration="1500" >
        <img src={img1} width={500} />
        <div className="toRegister">
          <p>
          .........................................................
          </p>
          <Link to="/register" className="pricing-btn" style={{ cursor: "pointer", fontSize: 24 }}>
            Join Now
          </Link>
        </div>
      </div>
      <div className="cont-about2">
        <div className={`contentBX ${isActive ? 'active1' : ''}`} onClick={toggleAccordion}>
          <div className="label" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
          ....................................
            <div className="content">
              <p>....................................................................................</p>
            </div>
          </div>
        </div>
        <img src={img2} width={500} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" />
      </div>
      <div className="cont-about3">
        <img src={img3} width={500} data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" />
        <div className={`contentBX ${isActive ? 'active1' : ''}`} onClick={toggleAccordion}>
          <div className="label" style={{color:"white"}} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" >
          .............................................................
            <div className="content">
              <p>................................................................................</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
