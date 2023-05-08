import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const ButtonComponent = {
  args: {
    children: "NUMBER ",
  },
};
