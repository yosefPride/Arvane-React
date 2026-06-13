import styles from "./FeatureBox.module.css";

/**
 * Feature Box Component
 * Used for displaying value propositions, features, etc.
 */
export default function FeatureBox({ title, description, image }) {
  return (
    <div className={styles.featureBox}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
