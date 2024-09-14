/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DivWrapper = ({
  property1,
  className,
  epBack = "/img/ep-back-3.svg",
  rectangle = "/img/rectangle-41-3.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-874",
  });

  return (
    <div
      className={`div-wrapper ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="group-25">
        <div className="overlap-group-3">
          {state.property1 === "frame-874" && (
            <>
              <div className="text-wrapper-5">Information Technology</div>
              <img className="ep-back-3" alt="Ep back" src={epBack} />
              <img className="rectangle-3" alt="Rectangle" src={rectangle} />
            </>
          )}

          {state.property1 === "frame-875" && (
            <>
              <div className="text-wrapper-6">Information Technology</div>
              <div className="group-2">
                <div className="overlap-group-4">
                  <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-1.svg" />
                  <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-2.svg" />
                </div>
              </div>
              <p className="text-wrapper-7">
                Join a community of IT scholars at the forefront of technological breakthroughs.
              </p>
              <p className="text-wrapper-8">
                Collaborate, learn, and contribute to the evolving world of information technology!
              </p>
            </>
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
        property1: "frame-875",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-874",
      };
  }

  return state;
}

DivWrapper.propTypes = {
  property1: PropTypes.oneOf(["frame-875", "frame-874"]),
  epBack: PropTypes.string,
  rectangle: PropTypes.string,
};
