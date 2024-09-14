import { Component7 } from ".";

export default {
  title: "Components/Component7",
  component: Component7,
  argTypes: {
    property1: {
      options: ["frame-872", "frame-873"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-872",
    className: {},
    epBack: "/img/ep-back-1.svg",
  },
};
