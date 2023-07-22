import Slider from "../components/slider";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    images: [
      "https://fakeimg.pl/700x400/",
      "https://fakeimg.pl/250x100/ff0000/",
      "https://fakeimg.pl/100x120/0000ff/",
    ],
  },
};
