import { cn } from "@/lib/cn";
import styles from "./Alert.module.css";

export default function Alert({ variant = "success", className, children }) {
  return (
    <div role="status" className={cn(styles.alert, styles[variant], className)}>
      {variant === "success" && "✓ "}
      {children}
    </div>
  );
}
