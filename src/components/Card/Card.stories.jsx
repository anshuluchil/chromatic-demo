import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export const Passed = {
  args: {
    title: "Button component",
    description: "Primary, danger, and ghost variants. All sizes tested across Chrome and Firefox.",
    status: "success",
    statusLabel: "Passed",
  },
};

export const Failed = {
  args: {
    title: "Navigation menu",
    description: "Dropdown animation broke on Safari 17. Visual regression detected on mobile viewport.",
    status: "error",
    statusLabel: "Failed",
  },
};

export const Pending = {
  args: {
    title: "Modal dialog",
    description: "Awaiting review from design team. Changes include updated backdrop blur and padding.",
    status: "warning",
    statusLabel: "Pending",
  },
};

export const InReview = {
  args: {
    title: "Badge component",
    description: "New info and warning variants added. Reviewer assigned.",
    status: "info",
    statusLabel: "In Review",
  },
};
