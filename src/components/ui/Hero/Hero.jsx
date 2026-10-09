import styles from "./Hero.module.css";

/** Page banner with an image or looping video behind centered text. */
export default function Hero({ title, subtitle, image, video, overlay = true, children }) {
  return (
    <section className={styles.hero}>
      {video ? (
        <video src={video} autoPlay muted loop playsInline className={styles.media} aria-hidden="true" />
      ) : image ? (
        <img src={image} alt="" className={styles.media} />
      ) : null}

      {overlay && <div className={styles.overlay} />}

      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
