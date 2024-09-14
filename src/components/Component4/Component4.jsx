/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component4 = ({ property1, className, epBack = "/img/ep-back.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-867",
  });

  return (
    <div
      className={`component-4 ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="group-25">
        <div className="overlap-group-9">
          {state.property1 === "frame-867" && (
            <>
              <div className="business-management">
                Business <br />
                Management
              </div>
              <img className="ep-back-6" alt="Ep back" src={epBack} />
              <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-41.png" />
            </>
          )}

          {state.property1 === "frame-866" && (
            <p className="text-wrapper-53">
              Network with top business management researchers. Exchange ideas and contribute to cutting-edge management
              theories.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-866",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-867",
      };
  }

  return state;
}

Component4.propTypes = {
  property1: PropTypes.oneOf(["frame-867", "frame-866"]),
  epBack: PropTypes.string,
};
