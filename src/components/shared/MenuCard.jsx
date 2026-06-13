import styles from "./MenuCard.module.css";

/**
 * Menu Card Component
 * Displays a single menu item with image, name, description, and price
 */
export default function MenuCard({ item, onClick }) {
  return (
    <article className={`card ${styles.menuCard}`} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.altText || item.name} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{item.name}</h3>
          <span className={styles.price}>${item.price.toFixed(2)}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
        {/* <button 
            className={styles["btn-primary"]}
            type="submit"
        >Add to cart</button> */}
      </div>
    </article>
  );
}
