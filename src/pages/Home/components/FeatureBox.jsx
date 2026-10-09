import styles from "./FeatureBox.module.css";

export default function FeatureBox({ title, description, image }) {
  return (
    <div className={styles.featureBox}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" loading="lazy" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
