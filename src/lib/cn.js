/**
 * Join class names, skipping falsy values.
 * cn("btn", isActive && "active") -> "btn active"
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
