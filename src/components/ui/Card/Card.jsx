import { cn } from "@/lib/cn";
import styles from "./Card.module.css";

export default function Card({ as: Component = "div", flush = false, className, children, ...props }) {
  return (
    <Component className={cn(styles.card, flush && styles.flush, className)} {...props}>
      {children}
    </Component>
  );
}
