import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export const Default = { args: { label: "Draft", status: "default" } };
export const Success = { args: { label: "Passed", status: "success" } };
export const Warning = { args: { label: "Pending", status: "warning" } };
export const Error = { args: { label: "Failed", status: "error" } };
export const Info = { args: { label: "In Review", status: "info" } };
