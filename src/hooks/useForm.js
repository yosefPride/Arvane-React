import { useEffect, useRef, useState } from "react";
import { validateForm } from "@/lib/validation";

const SUCCESS_MESSAGE_DURATION = 5000;

/**
 * Form state, validation, and submit lifecycle shared by every form.
 *
 * @param {Object}   options
 * @param {Object}   options.initialValues  Field values to start (and reset) with
 * @param {string[]} options.validate       Field names to validate on submit
 * @param {Function} options.onSubmit       async (values) => void
 */
export function useForm({ initialValues, validate = [], onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => setIsSubmitted(false), SUCCESS_MESSAGE_DURATION);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm(values, validate);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await onSubmit(values);
    if (!isMounted.current) return;

    setIsSubmitting(false);
    setIsSubmitted(true);
    setValues(initialValues);
  };

  // Spread onto a FormField: <FormField {...field("email")} />
  const field = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
  });

  return { values, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, field };
}
