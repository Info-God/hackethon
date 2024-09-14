/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component7 = ({ property1, className, epBack = "/img/ep-back-1.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-873",
  });

  return (
    <div
      className={`component-7 ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-873" && (
        <div className="group-4">
          <div className="overlap-group-6">
            <div className="text-wrapper-10">Biology</div>
            <img className="ep-back-5" alt="Ep back" src={epBack} />
            <div className="frame" />
          </div>
        </div>
      )}

      {state.property1 === "frame-872" && <img className="group-5" alt="Group" src="/img/group-116.png" />}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-872",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-873",
      };
  }

  return state;
}

Component7.propTypes = {
  property1: PropTypes.oneOf(["frame-872", "frame-873"]),
  epBack: PropTypes.string,
};
