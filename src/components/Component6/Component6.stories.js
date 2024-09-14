import { Component6 } from ".";

export default {
  title: "Components/Component6",
  component: Component6,
  argTypes: {
    property1: {
      options: ["frame-870", "frame-869"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-870",
    className: {},
    epBack: "/img/ep-back-2.svg",
  },
};
