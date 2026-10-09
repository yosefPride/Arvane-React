import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Hero, Section } from "@/components/ui";
import {
  CUSTOM_AMOUNT,
  GIFT_CARD_HIGHLIGHTS,
  GIFT_CARD_OPTIONS,
  GIFT_CARD_SUPPORT,
} from "@/data/giftCards";
import { cn } from "@/lib/cn";
import heroImage from "@/assets/images/heros/gift-card-hero.jpg";
import PaymentModal from "./PaymentModal";
import styles from "./GiftCards.module.css";

export default function GiftCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const selectCard = (card) => {
    setSelectedCard(card);
    setIsPaymentOpen(true);
  };

  return (
    <>
      <Hero title="Gift Cards" subtitle="Share the gift of great coffee and food" image={heroImage} />

      <Section>
        <ul className={styles.highlights}>
          {GIFT_CARD_HIGHLIGHTS.map((highlight) => (
            <li key={highlight.id} className={styles.highlightPill}>
              <span>{highlight.text}</span>
              <i className={`fas ${highlight.icon}`} aria-hidden="true" />
            </li>
          ))}
        </ul>

        <Grid columns={5}>
          {GIFT_CARD_OPTIONS.map((card) => {
            const isSelected = selectedCard?.id === card.id;
            return (
              <button
                key={card.id}
                type="button"
                className={cn(styles.card, styles.selectable, isSelected && styles.selected)}
                onClick={() => selectCard(card)}
                aria-pressed={isSelected}
              >
                <span className={styles.amount}>
                  {card.amount === CUSTOM_AMOUNT ? "Custom" : `$${card.amount}`}
                </span>
                <span className={styles.cardDescription}>{card.description}</span>
                {isSelected && (
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </Grid>
      </Section>

      <PaymentModal
        isOpen={isPaymentOpen}
        card={selectedCard}
        onClose={() => setIsPaymentOpen(false)}
      />

      <Section className={styles.infoSection}>
        {GIFT_CARD_SUPPORT.map((group) => (
          <div key={group.id} className={styles.existingCard}>
            <h2 className={styles.existingTitle}>{group.title}</h2>
            <p className={styles.existingSubtitle}>{group.subtitle}</p>
            <div className={styles.existingCtas}>
              {group.actions.map((action) => (
                <Link key={action.label} to={action.to} className={styles.existingCta}>
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
