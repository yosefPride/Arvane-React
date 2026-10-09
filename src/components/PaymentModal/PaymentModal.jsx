import { useState } from "react";
import { Modal } from "@/components/ui";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";
import styles from "./PaymentModal.module.css";

const PAYMENT_METHODS = [
  { id: "card", label: "Card", icon: "fa-credit-card" },
  { id: "applepay", label: "Apple Pay", icon: "fa-apple" },
  { id: "paypal", label: "PayPal", icon: "fa-paypal" },
];

const CARD_FIELDS = [
  { name: "cardNumber", placeholder: "Card Number", autoComplete: "cc-number" },
  { name: "expiry", placeholder: "MM/YY", autoComplete: "cc-exp" },
  { name: "cvc", placeholder: "CVC", autoComplete: "cc-csc" },
  { name: "cardName", placeholder: "Name on Card", autoComplete: "cc-name" },
];

/**
 * Demo checkout dialog: pick a payment method, pay, see a confirmation.
 * No real payment is taken; `onPay` is awaited before showing success.
 */
export default function PaymentModal({ isOpen, onClose, ...formProps }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Payment">
      {/* Unmounted on close, so each opening starts fresh */}
      <PaymentForm onClose={onClose} {...formProps} />
    </Modal>
  );
}

function PaymentForm({ label, amount, onPay, successTitle, successMessage, onClose }) {
  const [method, setMethod] = useState(PAYMENT_METHODS[0].id);
  const [status, setStatus] = useState("idle");
  const [paidAmount, setPaidAmount] = useState(amount);

  const handlePay = async () => {
    setStatus("processing");
    setPaidAmount(amount);
    await onPay();
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <i className="fa-solid fa-check" />
        </span>
        <h3>{successTitle}</h3>
        <p>
          {successMessage} Paid {formatPrice(paidAmount)}.
        </p>
        <button type="button" onClick={onClose} className={styles.primary}>
          Done
        </button>
      </div>
    );
  }

  const isProcessing = status === "processing";

  return (
    <>
      <div className={styles.summary}>
        <p className={styles.line}>
          <span>{label}</span>
          <span>{formatPrice(amount)}</span>
        </p>
      </div>

      <div className={styles.methods} role="tablist" aria-label="Payment method">
        {PAYMENT_METHODS.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={method === option.id}
            onClick={() => setMethod(option.id)}
            className={cn(styles.method, method === option.id && styles.active)}
          >
            <i className={`fa-brands ${option.icon}`} aria-hidden="true" />
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.panels}>
        <div className={styles.panel} role="tabpanel">
          {method === "card" && (
            <div className={styles.grid}>
              {CARD_FIELDS.map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  autoComplete={field.autoComplete}
                />
              ))}
            </div>
          )}
          {method === "applepay" && <p className={styles.pill}>You&apos;ll confirm with Apple Pay.</p>}
          {method === "paypal" && <p className={styles.pill}>You&apos;ll continue to PayPal.</p>}
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={onClose} className={styles.secondary} disabled={isProcessing}>
          Back
        </button>
        <button type="button" onClick={handlePay} className={styles.primary} disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Pay ${formatPrice(amount)}`}
        </button>
      </div>
    </>
  );
}
