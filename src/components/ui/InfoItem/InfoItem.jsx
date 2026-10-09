import { cn } from "@/lib/cn";
import styles from "./InfoItem.module.css";

/** Icon badge with a title and supporting text. `icon` is a Font Awesome class, e.g. "fa-solid fa-clock". */
export default function InfoItem({ icon, title, className, children }) {
  return (
    <div className={cn(styles.item, className)}>
      <span className={styles.icon} aria-hidden="true">
        <i className={icon} />
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {children && <div className={styles.text}>{children}</div>}
      </div>
    </div>
  );
}
