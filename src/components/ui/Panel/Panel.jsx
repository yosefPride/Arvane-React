import { cn } from "@/lib/cn";
import styles from "./Panel.module.css";

/**
 * Large rounded surface for grouping content.
 * "dark" is the espresso brand panel; "light" is an elevated card for forms.
 */
export default function Panel({ as: Component = "div", variant = "light", className, children, ...props }) {
  return (
    <Component className={cn(styles.panel, styles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
