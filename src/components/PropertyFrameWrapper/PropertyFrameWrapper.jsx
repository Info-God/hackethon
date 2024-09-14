/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyFrameWrapper = ({
  property1,
  className,
  epBack = "/img/ep-back-4.svg",
  rectangle = "/img/rectangle-41-4.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-865",
  });

  return (
    <div
      className={`property-frame-wrapper property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="group-25">
        <div className="div">
          {state.property1 === "frame-865" && (
            <>
              <div className="text-wrapper-2">Computer Science</div>
              <img className="ep-back-2" alt="Ep back" src={epBack} />
              <img className="rectangle-2" alt="Rectangle" src={rectangle} />
            </>
          )}

          {state.property1 === "frame-868" && (
            <>
              <div className="text-wrapper-3">Computer Science</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-1.svg" />
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-2-1.svg" />
                </div>
              </div>
              <p className="p">Connect with peers to explore cutting-edge research and technological advancements.</p>
              <p className="text-wrapper-4">Collaborate with Top Computer Science Researchers!</p>
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
        property1: "frame-868",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "frame-865",
      };
  }

  return state;
}

PropertyFrameWrapper.propTypes = {
  property1: PropTypes.oneOf(["frame-868", "frame-865"]),
  epBack: PropTypes.string,
  rectangle: PropTypes.string,
};
