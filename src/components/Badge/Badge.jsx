import styles from "./Badge.module.css";

export const Badge = ({ label, status = "default" }) => {
  return (
    <span className={[styles.badge, styles[status]].join(" ")}>
      {label}
    </span>
  );
};
