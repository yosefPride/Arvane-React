/**
 * Form Validation Utilities
 * Centralized validation rules and messages
 */

export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: "Name must contain only letters, spaces, hyphens, and apostrophes",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: true,
    pattern: /^[\d\s\-\+\(\)]+$/,
    minLength: 10,
    message: "Please enter a valid phone number",
  },
  date: {
    required: true,
  },
  time: {
    required: true,
  },
  guests: {
    required: true,
    min: 1,
    max: 20,
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  notes: {
    maxLength: 500,
  },
};

/**
 * Validate a single field
 * @param {string} fieldName - Name of the field
 * @param {any} value - Value to validate
 * @returns {string} Error message or empty string if valid
 */
export const validateField = (fieldName, value) => {
  const rules = VALIDATION_RULES[fieldName];

  if (!rules) return "";

  // Required validation
  if (rules.required && (!value || value.toString().trim() === "")) {
    return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
  }

  if (!value) return "";

  // Min length validation
  if (
    rules.minLength &&
    value.toString().length < rules.minLength
  ) {
    return `${fieldName} must be at least ${rules.minLength} characters`;
  }

  // Max length validation
  if (
    rules.maxLength &&
    value.toString().length > rules.maxLength
  ) {
    return `${fieldName} must not exceed ${rules.maxLength} characters`;
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value.toString())) {
    return rules.message;
  }

  // Min validation (for numbers)
  if (rules.min !== undefined && Number(value) < rules.min) {
    return `${fieldName} must be at least ${rules.min}`;
  }

  // Max validation (for numbers)
  if (rules.max !== undefined && Number(value) > rules.max) {
    return `${fieldName} must not exceed ${rules.max}`;
  }

  return "";
};

/**
 * Validate an entire form object
 * @param {Object} formData - Form data object
 * @param {Array<string>} fields - Fields to validate
 * @returns {Object} Object with field names as keys and error messages as values
 */
export const validateForm = (formData, fields) => {
  const errors = {};

  fields.forEach((field) => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

export default {
  validateField,
  validateForm,
  VALIDATION_RULES,
};
