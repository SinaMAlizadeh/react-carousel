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
      "https://fakeimg.pl/250x100/",
      "https://fakeimg.pl/250x100/ff0000/",
    ],
  },
};
