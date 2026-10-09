import { cn } from "@/lib/cn";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <div className={cn(styles.heading, className)}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
