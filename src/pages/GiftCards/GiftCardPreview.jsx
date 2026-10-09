import logo from "@/assets/images/logo.png";
import styles from "./GiftCards.module.css";

/** Visual mock-up of the physical gift card, showing the chosen amount. */
export default function GiftCardPreview({ amount }) {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewTop}>
        <img src={logo} alt="" className={styles.previewLogo} />
        <span className={styles.previewLabel}>Gift Card</span>
      </div>
      <div className={styles.previewBottom}>
        <span className={styles.previewAmount}>{amount === null ? "$—" : `$${amount}`}</span>
        <span className={styles.previewFine}>Valid at all Arvane locations</span>
      </div>
    </div>
  );
}
