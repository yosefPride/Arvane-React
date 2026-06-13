import styles from "./HeroSection.module.css";

/**
 * Reusable Hero Section Component
 * Used for page headers with background images/videos and overlay text
 */
export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  children,
  overlay = true,
}) {
  return (
    <section className={styles.hero}>
      {backgroundVideo ? (
        <video
          src={backgroundVideo}
          autoPlay
          muted
          loop
          width="100%"
          className={styles.heroMedia}
        />
      ) : backgroundImage ? (
        <img src={backgroundImage} alt="" className={styles.heroMedia} />
      ) : null}

      {overlay && <div className={styles.overlay}></div>}

      <div className={styles.heroContent}>
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {children}
      </div>
    </section>
  );
}
