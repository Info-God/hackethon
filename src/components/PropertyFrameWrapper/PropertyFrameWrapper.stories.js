import { PropertyFrameWrapper } from ".";

export default {
  title: "Components/PropertyFrameWrapper",
  component: PropertyFrameWrapper,
  argTypes: {
    property1: {
      options: ["frame-868", "frame-865"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-868",
    className: {},
    epBack: "/img/ep-back-4.svg",
    rectangle: "/img/rectangle-41-4.png",
  },
};
