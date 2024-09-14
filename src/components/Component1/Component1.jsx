/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component1 = ({ property1, className, divClassName }) => {
  return (
    <div className={`component-1 ${className}`}>
      <div className={`group-6 property-1-2-${property1}`}>
        <div className="overlap-group-7">
          <p className={`text-wrapper-11 ${divClassName}`}>
            Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla semper sed
          </p>
          <div className="text-wrapper-12">Institution Name1</div>
        </div>
      </div>
      <div className={`overlap-wrapper property-1-3-${property1}`}>
        <div className="overlap-group-7">
          <p className="text-wrapper-11">Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla semper sed</p>
          <div className="text-wrapper-12">Institution Name2</div>
        </div>
      </div>
      <div className={`group-7 property-1-4-${property1}`}>
        <div className="overlap-group-7">
          <p className="text-wrapper-11">Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla semper sed</p>
          <div className="text-wrapper-12">Institution Name3</div>
        </div>
      </div>
      <div className={`group-8 property-1-5-${property1}`}>
        <div className="overlap-group-7">
          <p className="text-wrapper-11">Lorem ipsum dolor sit amet consectetur. Sit vel tempus nulla semper sed</p>
          <div className="text-wrapper-12">Institution Name4</div>
        </div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  property1: PropTypes.oneOf(["frame-870", "frame-868", "frame-869", "frame-871"]),
};
