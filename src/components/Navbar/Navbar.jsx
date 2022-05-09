import React from "react";
import "./Navbar.css";
import Toggle from './../Toggle/Toggle';
const navbar = () => {
  return (
    <div className="n-wrapper">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Ali</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Serivces</li>
            <li>Experience</li>
            <li>Protfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default navbar;
