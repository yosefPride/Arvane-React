import { cn } from "@/lib/cn";
import styles from "./Eyebrow.module.css";

/** Small uppercase label above a heading. */
export default function Eyebrow({ className, children }) {
  return <span className={cn(styles.eyebrow, className)}>{children}</span>;
}
