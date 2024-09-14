/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component6 = ({ property1, className, epBack = "/img/ep-back-2.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-869",
  });

  return (
    <div
      className={`component-6 ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-869" && (
        <div className="div-wrapper">
          <div className="overlap-group-5">
            <div className="text-wrapper-9">Pharmacy</div>
            <img className="ep-back-4" alt="Ep back" src={epBack} />
            <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-41-2.png" />
          </div>
        </div>
      )}

      {state.property1 === "frame-870" && <img className="group-3" alt="Group" src="/img/group-84-1.png" />}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-870",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-869",
      };
  }

  return state;
}

Component6.propTypes = {
  property1: PropTypes.oneOf(["frame-870", "frame-869"]),
  epBack: PropTypes.string,
};
