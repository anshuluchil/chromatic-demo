import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import styles from "./Card.module.css";

export const Card = ({
  title = "Component title",
  description = "A short description of what this component does.",
  status = "success",
  statusLabel = "Passed",
  onReview,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <Badge label={statusLabel} status={status} />
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <Button label="Review changes" variant="ghost" size="small" onClick={onReview} />
      </div>
    </div>
  );
};
