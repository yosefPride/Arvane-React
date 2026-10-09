import { Link } from "react-router-dom";
import { menuItemPath } from "@/constants/routes";
import { formatPrice } from "@/lib/format";
import styles from "./MenuCard.module.css";

export default function MenuCard({ item }) {
  const price = formatPrice(item.price);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={item.image} alt={item.altText || item.name} loading="lazy" />
        <span className={styles.priceTag} aria-hidden="true">
          {price}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>
            {/* Stretched over the whole card, so any click opens the item */}
            <Link to={menuItemPath(item.slug)} className={styles.link}>
              {item.name}
            </Link>
          </h3>
          <span className={styles.price}>
            <span className="sr-only">Price: </span>
            {price}
          </span>
        </div>
        <p className={styles.description}>{item.description}</p>
      </div>
    </article>
  );
}
