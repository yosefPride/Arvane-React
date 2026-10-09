import { cn } from "@/lib/cn";
import styles from "./Grid.module.css";

/** Responsive grid. `columns` is the desktop count; it collapses on smaller screens. */
export default function Grid({ columns = 3, className, children, ...props }) {
  return (
    <div className={cn(styles.grid, styles[`cols${columns}`], className)} {...props}>
      {children}
    </div>
  );
}
