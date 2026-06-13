import HeroSection from "../components/shared/HeroSection";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./GiftCards.module.css";

export default function GiftCards() {
  const giftCardOptions = [
    { id: 1, amount: 25, description: "Perfect for a coffee lover" },
    { id: 2, amount: 50, description: "Great for multiple visits" },
    { id: 3, amount: 100, description: "Premium gift option" },
    { id: 4, amount: 250, description: "Generous for regular customers" },
    { id: 5, amount: "other", description: "Choose a custom amount" }
  ];

  const giftsHighlights = [
    { id: 1, text: "Instant Delivery", className: "fa-shipping-fast" },
    { id: 2, text: "No Expiration", className: "fa-hourglass-end" },
    { id: 3, text: "All Locations", className: "fa-location-dot" },
    { id: 4, text: "Digital & Physical", className: "fa-file-download" }
  ];

  const paymentMethods = [
    { id: "card", label: "Card", icon: "credit-card" },
    { id: "applepay", label: "Apple Pay", icon: "apple" },
    { id: "paypal", label: "PayPal", icon: "paypal" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [method, setMethod] = useState("card");
  const [selectedCard, setSelectedCard] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const openModal = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setMethod("card");
    setCustomAmount("");
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const displayAmount =
    selectedCard?.amount === "other"
      ? customAmount
        ? `$${customAmount}`
        : "Custom amount"
      : selectedCard
        ? `$${selectedCard.amount}`
        : "";

  return (
    <div>
      <HeroSection
        title="Gift Cards"
        subtitle="Share the gift of great coffee and food"
        backgroundImage="src/assets/images/heros/gift-card-hero.jpg"
        overlay={true}
      />

      {/* Highlights */}
      <section className="section content-container">
        <div className={styles["gifts-highlights"]}>
          {giftsHighlights.map((h) => (
            <div key={h.id} className={styles["highlight-pill"]}>
              <span>{h.text}</span>
              <span>
                <i className={`fas ${h.className}`}></i>
              </span>
            </div>
          ))}
        </div>

        {/* Gift Cards */}
        <div className="grid grid-cols-5">
          {giftCardOptions.map((card) => {
            const isSelected = selectedCard?.id === card.id;

            return (
              <div
                key={card.id}
                className={`${styles.card} ${styles.selectable} ${isSelected ? `${styles.selected}` : ""}`}
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => openModal(card)}
              >
                <h3 style={{ color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  {card.amount === "other" ? "Custom" : `$${card.amount}`}
                </h3>

                <p style={{ marginBottom: "1.5rem" }}>
                  {card.description}
                </p>

                {isSelected && <div className={styles.check}>✓</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* PAYMENT MODAL */}
      {isOpen && (
        <div className={styles["gift-payment-modal"]}>
          <div className={styles["gift-payment-backdrop"]} onClick={closeModal} />

          <div className={styles["gift-payment-dialog"]} role="dialog" aria-modal="true" aria-labelledby="gift-payment-title">

            {/* Header */}
            <div className={styles["gift-payment-header"]}>
              <h2 id="gift-payment-title">Payment</h2>
              <button onClick={closeModal} className={styles["gift-payment-close"]}>
                ✕
              </button>
            </div>

            {/* Summary */}
            <div className={styles["gift-payment-summary"]}>
              <p className={styles["gift-payment-line"]}>
                <span>Gift Card</span>
                <span>{displayAmount}</span>
              </p>

              {selectedCard?.amount === "other" && (
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.5rem",
                    width: "100%"
                  }}
                />
              )}
            </div>

            {/* Payment methods */}
            <div className={styles["gift-payment-methods"]}>
              {paymentMethods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`${styles["gift-payment-method"]} ${method === m.id ? styles["is-active"] : ""}`}
                >
                  <i className={`fa-brands fa-${m.icon}`} />
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            {/* Panels */}
            <div className={styles["gift-payment-panels"]}>

              {method === "card" && (
                <div className={styles["gift-payment-panel"]}>
                  <div className={styles["gift-payment-grid"]}>
                    <input placeholder="Card Number" />
                    <input placeholder="MM/YY" />
                    <input placeholder="CVC" />
                    <input placeholder="Name on Card" />
                  </div>
                </div>
              )}

              {method === "applepay" && (
                <div className={styles["gift-payment-panel"]}>
                  <button className={styles["gift-payment-pill"]}>
                    Pay with Apple Pay
                  </button>
                </div>
              )}

              {method === "paypal" && (
                <div className={styles["gift-payment-panel"]}>
                  <button className={styles["gift-payment-pill"]}>
                    Continue to PayPal
                  </button>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className={styles["gift-payment-actions"]}>
              <button onClick={closeModal} className={styles["gift-payment-secondary"]}>
                Back
              </button>

              <button
                className={styles["gift-payment-primary"]}
                disabled={
                  selectedCard?.amount === "other" && !customAmount
                }
              >
                Pay {displayAmount}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Utility sections */}
      <section className={`section content-container ${styles.infoSection}`}>
        
        {/* Received */}
        <div className={styles.giftsExisting}>
          <div className={styles.existingCard}>
            <h2 className={styles.existingTitle}>Received a gift card?</h2>
            <p className={styles.existingSubtitle}>
              Check your balance, or view terms.
            </p>

            <div className={styles.existingCtas}>
              <Link to="/notice" className={styles.existingCta}>
                <button>Check Balance</button>
              </Link>
              <Link to="/notice" className={styles.existingCta}>
                <button>View Terms</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sent */}
        <div className={styles.giftsSent}>
          <div className={styles.existingCard}>
            <h2 className={styles.existingTitle}>Sent a gift card?</h2>
            <p className={styles.existingSubtitle}>
              Track delivery, or resend.
            </p>

            <div className={styles.existingCtas}>
              <Link to="/notice" className={styles.existingCta}>
                <button>Track Delivery</button>
              </Link>
              <Link to="/notice" className={styles.existingCta}>
                <button>Resend Gift Card</button>
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}