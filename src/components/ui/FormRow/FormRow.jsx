import { cn } from "@/lib/cn";
import styles from "./FormRow.module.css";

/** Places form fields side by side; stacks them on small screens. */
export default function FormRow({ columns = 2, className, children }) {
  return <div className={cn(styles.row, styles[`cols${columns}`], className)}>{children}</div>;
}
