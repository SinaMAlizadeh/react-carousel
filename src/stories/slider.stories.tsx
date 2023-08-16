import Slider from "../slider";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    height: "240px",
    weight: "500px",
    infiniteLoop: true,
    intervalDuration: 5000,
    objectFit: "contain",
    images: [
      "https://fakeimg.pl/200x50/",
      "https://fakeimg.pl/200x50/ff0000/",
      "https://fakeimg.pl/200x50/0000ff/",
    ],
  },
};
