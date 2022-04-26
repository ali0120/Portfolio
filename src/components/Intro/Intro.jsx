import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Imogi from "../../img/glassesimoji.png";
const Intro = () => {

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hy! I Am</span>
          <span>Ali Abdelrahman</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <a href="#">
          <button className="button i-button">Hire me</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={Imogi} alt="" />
        {/* animation */}
        <div style={{ top: '-4%', left: '68%' }}>
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </div>

        {/* animation */}

        {/* floatinDiv mein change hy dark mode ka */}
        <div style={{ top: '66%', left: '1%' }}>
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
