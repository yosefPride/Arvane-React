import { cn } from "@/lib/cn";
import styles from "./FormField.module.css";

/**
 * Label + control + error message.
 * `type` may be any <input> type, or "textarea" / "select" (with `options`).
 */
export default function FormField({
  label,
  name,
  type = "text",
  error,
  required = false,
  options = [],
  placeholder,
  rows = 4,
  className,
  ...props
}) {
  const errorId = `${name}-error`;
  const controlProps = {
    id: name,
    name,
    className: cn(styles.input, error && styles.invalid),
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    ...props,
  };

  let control;
  if (type === "textarea") {
    control = <textarea rows={rows} placeholder={placeholder} {...controlProps} />;
  } else if (type === "select") {
    control = (
      <select {...controlProps}>
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else {
    control = <input type={type} placeholder={placeholder} {...controlProps} />;
  }

  return (
    <div className={cn(styles.field, className)}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {control}
      {error && (
        <p id={errorId} className={styles.errorMessage}>
          {error}
        </p>
      )}
    </div>
  );
}
