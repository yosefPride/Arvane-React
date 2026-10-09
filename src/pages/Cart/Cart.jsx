import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Eyebrow, Hero, Panel, Section } from "@/components/ui";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import { ROUTES, menuItemPath } from "@/constants/routes";
import { MAX_QUANTITY, useCart } from "@/features/cart";
import { simulateRequest } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import styles from "./Cart.module.css";

export default function Cart() {
  const { lines, count, subtotal, setQuantity, removeItem, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const placeOrder = async () => {
    await simulateRequest();
    clearCart();
  };

  return (
    <>
      <title>Your Cart | Arvane</title>
      <Hero variant="compact" eyebrow="Order" title="Your Cart" />

      <Section>
        {lines.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className={styles.layout}>
            <div>
              <ul className={styles.lines} aria-label="Items in your cart">
                {lines.map((line) => (
                  <CartLine
                    key={line.slug}
                    line={line}
                    onQuantityChange={(quantity) => setQuantity(line.slug, quantity)}
                    onRemove={() => removeItem(line.slug)}
                  />
                ))}
              </ul>

              <div className={styles.listFooter}>
                <Link to={ROUTES.menu} className={styles.continue}>
                  <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                  Continue shopping
                </Link>
                <button type="button" className={styles.clear} onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </div>

            <Panel as="aside" variant="dark" className={styles.summary} aria-label="Order summary">
              <Eyebrow>Order Summary</Eyebrow>
              <dl className={styles.totals}>
                <div>
                  <dt>Items</dt>
                  <dd>{count}</dd>
                </div>
                <div className={styles.totalRow}>
                  <dt>Total</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
              </dl>
              <Button size="lg" fullWidth onClick={() => setIsCheckoutOpen(true)}>
                Checkout
              </Button>
            </Panel>
          </div>
        )}
      </Section>

      <PaymentModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        label={`Order (${count} ${count === 1 ? "item" : "items"})`}
        amount={subtotal}
        onPay={placeOrder}
        successTitle="Order placed"
        successMessage="Thank you! We're preparing your order."
      />
    </>
  );
}

function CartLine({ line, onQuantityChange, onRemove }) {
  const { item, quantity, total } = line;

  return (
    <li className={styles.line}>
      <Link to={menuItemPath(item.slug)} className={styles.thumb} tabIndex={-1} aria-hidden="true">
        <img src={item.image} alt="" />
      </Link>

      <div className={styles.info}>
        <Link to={menuItemPath(item.slug)} className={styles.name}>
          {item.name}
        </Link>
        <span className={styles.unitPrice}>{formatPrice(item.price)} each</span>
        <button type="button" className={styles.remove} onClick={onRemove}>
          Remove<span className="sr-only"> {item.name}</span>
        </button>
      </div>

      <div className={styles.stepper} role="group" aria-label={`Quantity of ${item.name}`}>
        <button
          type="button"
          onClick={() => onQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          <i className="fa-solid fa-minus" aria-hidden="true" />
        </button>
        <output aria-live="polite">{quantity}</output>
        <button
          type="button"
          onClick={() => onQuantityChange(quantity + 1)}
          disabled={quantity >= MAX_QUANTITY}
          aria-label="Increase quantity"
        >
          <i className="fa-solid fa-plus" aria-hidden="true" />
        </button>
      </div>

      <span className={styles.lineTotal}>{formatPrice(total)}</span>
    </li>
  );
}

function EmptyCart() {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon} aria-hidden="true">
        <i className="fa-solid fa-bag-shopping" />
      </span>
      <h2>Your cart is empty</h2>
      <p>Browse the menu and add something you&apos;ll enjoy.</p>
      <Button to={ROUTES.menu} size="lg">
        Browse the Menu
      </Button>
    </div>
  );
}
