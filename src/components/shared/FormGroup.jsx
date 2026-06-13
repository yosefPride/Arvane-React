import styles from "./FormGroup.module.css";

/**
 * Form Group Component
 * Wraps form inputs with labels and error messages
 */
export default function FormGroup({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  options = null,
  rows,
  maxLength,
  min,
  max,
  pattern,
}) {
  const hasError = error && error.length > 0;

  if (type === "textarea") {
    return (
      <div className={styles.formGroup}>
        {label && (
          <label htmlFor={name}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows || 4}
          maxLength={maxLength}
          className={`${styles.input} ${hasError ? styles.error : ""}`}
        />
        {hasError && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className={styles.formGroup}>
        {label && (
          <label htmlFor={name}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.input} ${hasError ? styles.error : ""}`}
        >
          <option value="">
            {placeholder || "Select an option"}
          </option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        {hasError && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        min={min}
        max={max}
        pattern={pattern}
        required={required}
        className={`${styles.input} ${hasError ? styles.error : ""}`}
      />
      {hasError && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
