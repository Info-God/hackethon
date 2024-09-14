/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PlaceboxInfo = ({ className, text = "Md" }) => {
  return (
    <div className={`placebox-info ${className}`}>
      <div className="md">{text}</div>
    </div>
  );
};

PlaceboxInfo.propTypes = {
  text: PropTypes.string,
};
