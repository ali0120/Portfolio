import React, { useContext } from "react";
import "./Toggle.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { themeContext } from "../../Context";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleToggle = () => {
    theme.dispatch({ type: 'toggle' });
  }
  return (
    <div className="toggle"
      onClick={handleToggle}
    >
      <BsMoon />
      <BsSun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
