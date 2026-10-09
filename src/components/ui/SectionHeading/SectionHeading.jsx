import { cn } from "@/lib/cn";
import Eyebrow from "../Eyebrow/Eyebrow";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <div className={cn(styles.heading, align === "left" && styles.left, className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
