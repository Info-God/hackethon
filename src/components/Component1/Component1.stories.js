import { Component1 } from ".";

export default {
  title: "Components/Component1",
  component: Component1,
  argTypes: {
    property1: {
      options: ["frame-870", "frame-868", "frame-869", "frame-871"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-870",
    className: {},
    divClassName: {},
  },
};
