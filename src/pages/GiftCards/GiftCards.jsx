import { useState } from "react";
import { Button, Eyebrow, Hero, InfoItem, Section } from "@/components/ui";
import {
  CUSTOM_AMOUNT,
  CUSTOM_AMOUNT_RANGE,
  GIFT_CARD_HIGHLIGHTS,
  GIFT_CARD_OPTIONS,
  GIFT_CARD_SUPPORT,
} from "@/data/giftCards";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import { simulateRequest } from "@/lib/api";
import { cn } from "@/lib/cn";
import heroImage from "@/assets/images/heros/gift-card-hero.jpg";
import GiftCardPreview from "./GiftCardPreview";
import styles from "./GiftCards.module.css";

const DEFAULT_OPTION = GIFT_CARD_OPTIONS[1];

export default function GiftCards() {
  const [selectedId, setSelectedId] = useState(DEFAULT_OPTION.id);
  const [customAmount, setCustomAmount] = useState("");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const selected = GIFT_CARD_OPTIONS.find((option) => option.id === selectedId);
  const isCustom = selected.amount === CUSTOM_AMOUNT;
  const customValue = Number(customAmount);
  const isCustomValid =
    customAmount !== "" &&
    customValue >= CUSTOM_AMOUNT_RANGE.min &&
    customValue <= CUSTOM_AMOUNT_RANGE.max;
  const amount = isCustom ? (isCustomValid ? customValue : null) : selected.amount;

  return (
    <>
      <Hero title="Gift Cards" subtitle="Share the gift of great coffee and food" image={heroImage} />

      <Section>
        <div className={styles.builder}>
          <div className={styles.previewColumn}>
            <GiftCardPreview amount={amount} />
            <p className={styles.previewNote}>
              {selected.description}. Redeemable for drinks, food, and beans.
            </p>
          </div>

          <div>
            <Eyebrow>Send a Gift</Eyebrow>
            <h2 className={styles.title}>Choose an amount</h2>

            <fieldset className={styles.amounts}>
              <legend className="sr-only">Gift card amount</legend>
              {GIFT_CARD_OPTIONS.map((option) => {
                const isOptionCustom = option.amount === CUSTOM_AMOUNT;
                return (
                  <label
                    key={option.id}
                    className={cn(
                      styles.amountOption,
                      option.id === selectedId && styles.selected,
                      isOptionCustom && styles.customOption
                    )}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={option.id}
                      checked={option.id === selectedId}
                      onChange={() => setSelectedId(option.id)}
                      className="sr-only"
                    />
                    <span className={styles.amountValue}>
                      {isOptionCustom ? "Custom" : `$${option.amount}`}
                    </span>
                    <span className={styles.amountHint}>{option.description}</span>
                  </label>
                );
              })}
            </fieldset>

            {isCustom && (
              <div className={styles.customField}>
                <label htmlFor="custom-amount">
                  Custom amount (${CUSTOM_AMOUNT_RANGE.min}–${CUSTOM_AMOUNT_RANGE.max})
                </label>
                <div className={styles.customInput}>
                  <span aria-hidden="true">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    inputMode="numeric"
                    min={CUSTOM_AMOUNT_RANGE.min}
                    max={CUSTOM_AMOUNT_RANGE.max}
                    placeholder="75"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    aria-invalid={customAmount !== "" && !isCustomValid}
                  />
                </div>
              </div>
            )}

            <Button
              size="lg"
              fullWidth
              disabled={amount === null}
              onClick={() => setIsPaymentOpen(true)}
              className={styles.continue}
            >
              {amount === null ? "Enter an amount" : `Continue with $${amount}`}
            </Button>
          </div>
        </div>
      </Section>

      <section className={styles.highlightsBand}>
        <ul className={styles.highlights}>
          {GIFT_CARD_HIGHLIGHTS.map((highlight) => (
            <li key={highlight.id}>
              <InfoItem icon={highlight.icon} title={highlight.text} className={styles.highlight} />
            </li>
          ))}
        </ul>
      </section>

      <Section>
        <div className={styles.support}>
          {GIFT_CARD_SUPPORT.map((group, index) => (
            <article key={group.id} className={styles.supportCard}>
              <span className={styles.supportIcon} aria-hidden="true">
                <i className={group.icon} />
              </span>
              <div className={styles.supportBody}>
                <h2>{group.title}</h2>
                <p>{group.subtitle}</p>
                <div className={styles.supportActions}>
                  {group.actions.map((action, actionIndex) => (
                    <Button
                      key={action.label}
                      to={action.to}
                      size="sm"
                      variant={actionIndex === 0 && index === 0 ? "primary" : "outline"}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        label="Gift Card"
        amount={amount}
        onPay={() => simulateRequest()}
        successTitle="Gift card purchased"
        successMessage="Thank you for your purchase."
      />
    </>
  );
}
