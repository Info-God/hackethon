import { Component4 } from ".";

export default {
  title: "Components/Component4",
  component: Component4,
  argTypes: {
    property1: {
      options: ["frame-867", "frame-866"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-867",
    className: {},
    epBack: "/img/ep-back.svg",
  },
};
