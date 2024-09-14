/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ button, hover, className, text = "View All Products" }) => {
  const [state, dispatch] = useReducer(reducer, {
    button: button || "primary",
    hover: hover || false,
  });

  return (
    <div
      className={`button ${state.button} hover-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="view-all-products">
        {["primary", "secondary"].includes(state.button) && <>{text}</>}

        {state.button === "small" && <>Add To Cart</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Button.propTypes = {
  button: PropTypes.oneOf(["primary", "secondary", "small"]),
  hover: PropTypes.bool,
  text: PropTypes.string,
};
