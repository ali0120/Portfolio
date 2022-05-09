import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aliabdelrahman848@gmail.com</span>
        <div className="f-icons">
          <FaFacebookF color="white" size={"3rem"} />
          <FaInstagram color="white" size={"3rem"} />
          <FaGithub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
