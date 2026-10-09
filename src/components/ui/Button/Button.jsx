import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

/**
 * Renders a router <Link> when given `to`, an <a> when given `href`,
 * and a <button> otherwise. All three share the same look.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  className,
  children,
  ...props
}) {
  const classes = cn(
    styles.button,
    styles[variant],
    size !== "md" && styles[size],
    fullWidth && styles.fullWidth,
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
