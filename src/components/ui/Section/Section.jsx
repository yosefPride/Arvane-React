import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

/** Standard page section with consistent responsive padding. */
export default function Section({ narrow = false, className, children, ...props }) {
  return (
    <section className={cn(styles.section, className)} {...props}>
      {narrow ? <div className={styles.narrow}>{children}</div> : children}
    </section>
  );
}
