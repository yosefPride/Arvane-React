import { Card } from "@/components/ui";
import { formatPrice } from "@/lib/format";
import styles from "./MenuCard.module.css";

export default function MenuCard({ item }) {
  return (
    <Card as="article" className={styles.menuCard}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.altText || item.name} loading="lazy" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{item.name}</h3>
          <span className={styles.price}>{formatPrice(item.price)}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
      </div>
    </Card>
  );
}
