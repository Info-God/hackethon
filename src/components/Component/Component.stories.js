import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-865", "frame-861"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-865",
    className: {},
  },
};
