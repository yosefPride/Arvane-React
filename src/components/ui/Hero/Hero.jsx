import { cn } from "@/lib/cn";
import Eyebrow from "../Eyebrow/Eyebrow";
import styles from "./Hero.module.css";

/**
 * Page banner with centered text over an image or looping video.
 * variant="compact" is a shorter, image-free band for text-heavy pages.
 */
export default function Hero({
  title,
  subtitle,
  eyebrow,
  image,
  video,
  variant = "media",
  overlay = true,
  children,
}) {
  const isCompact = variant === "compact";

  return (
    <section className={cn(styles.hero, isCompact && styles.compact)}>
      {!isCompact &&
        (video ? (
          <video src={video} autoPlay muted loop playsInline className={styles.media} aria-hidden="true" />
        ) : image ? (
          <img src={image} alt="" className={styles.media} />
        ) : null)}

      {overlay && !isCompact && <div className={styles.overlay} />}

      <div className={styles.content}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <h1>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
