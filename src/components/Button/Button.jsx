import styles from "./Button.module.css";

export const Button = ({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={[styles.button, styles[variant], styles[size]].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
