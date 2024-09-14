import { DivWrapper } from ".";

export default {
  title: "Components/DivWrapper",
  component: DivWrapper,
  argTypes: {
    property1: {
      options: ["frame-875", "frame-874"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-875",
    className: {},
    epBack: "/img/ep-back-3.svg",
    rectangle: "/img/rectangle-41-3.png",
  },
};
