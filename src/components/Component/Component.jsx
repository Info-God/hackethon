/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-865",
  });

  return (
    <div
      className={`component ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-865" && (
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Engineering</div>
            <img className="ep-back" alt="Ep back" src="/img/ep-back-5.svg" />
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-41-5.png" />
          </div>
        </div>
      )}

      {state.property1 === "frame-861" && <img className="img" alt="Group" src="/img/group-84-2.png" />}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-861",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-865",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-865", "frame-861"]),
};
