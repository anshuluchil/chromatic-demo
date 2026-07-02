import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

// Every export = one story = one Chromatic snapshot
export const Primary = {
  args: { label: "Save changes", variant: "primary", size: "medium" },
};

export const Danger = {
  args: { label: "Delete account", variant: "danger", size: "medium" },
};

export const Ghost = {
  args: { label: "Cancel", variant: "ghost", size: "medium" },
};

export const Small = {
  args: { label: "Dismiss", variant: "primary", size: "small" },
};

export const Large = {
  args: { label: "Get started", variant: "primary", size: "large" },
};

export const Disabled = {
  args: { label: "Submit", variant: "primary", disabled: true },
};
