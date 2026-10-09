import { useState } from "react";
import { Modal } from "@/components/ui";
import { CUSTOM_AMOUNT, PAYMENT_METHODS } from "@/data/giftCards";
import { cn } from "@/lib/cn";
import styles from "./GiftCards.module.css";

const CARD_FIELDS = [
  { name: "cardNumber", placeholder: "Card Number", autoComplete: "cc-number" },
  { name: "expiry", placeholder: "MM/YY", autoComplete: "cc-exp" },
  { name: "cvc", placeholder: "CVC", autoComplete: "cc-csc" },
  { name: "cardName", placeholder: "Name on Card", autoComplete: "cc-name" },
];

export default function PaymentModal({ isOpen, card, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Payment">
      {card && <PaymentForm card={card} onClose={onClose} />}
    </Modal>
  );
}

function PaymentForm({ card, onClose }) {
  const [method, setMethod] = useState(PAYMENT_METHODS[0].id);
  const [customAmount, setCustomAmount] = useState("");

  const isCustom = card.amount === CUSTOM_AMOUNT;
  const displayAmount = isCustom
    ? customAmount
      ? `$${customAmount}`
      : "Custom amount"
    : `$${card.amount}`;

  return (
    <>
      <div className={styles.paymentSummary}>
        <p className={styles.paymentLine}>
          <span>Gift Card</span>
          <span>{displayAmount}</span>
        </p>

        {isCustom && (
          <input
            type="number"
            min="1"
            className={styles.customAmount}
            placeholder="Enter custom amount"
            aria-label="Custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        )}
      </div>

      <div className={styles.paymentMethods} role="tablist" aria-label="Payment method">
        {PAYMENT_METHODS.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={method === option.id}
            onClick={() => setMethod(option.id)}
            className={cn(styles.paymentMethod, method === option.id && styles.active)}
          >
            <i className={`fa-brands ${option.icon}`} aria-hidden="true" />
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.paymentPanels}>
        <div className={styles.paymentPanel} role="tabpanel">
          {method === "card" && (
            <div className={styles.paymentGrid}>
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
          {method === "applepay" && (
            <button type="button" className={styles.paymentPill}>
              Pay with Apple Pay
            </button>
          )}
          {method === "paypal" && (
            <button type="button" className={styles.paymentPill}>
              Continue to PayPal
            </button>
          )}
        </div>
      </div>

      <div className={styles.paymentActions}>
        <button type="button" onClick={onClose} className={styles.paymentSecondary}>
          Back
        </button>
        <button
          type="button"
          className={styles.paymentPrimary}
          disabled={isCustom && !customAmount}
        >
          Pay {displayAmount}
        </button>
      </div>
    </>
  );
}
