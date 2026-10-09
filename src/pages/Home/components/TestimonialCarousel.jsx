import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./TestimonialCarousel.module.css";

const ROTATE_INTERVAL = 5000;

export default function TestimonialCarousel({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Restarts whenever the index changes, so a manual pick gets a full interval
  useEffect(() => {
    if (testimonials.length < 2) return;
    const timer = setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      ROTATE_INTERVAL
    );
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent} aria-live="polite">
        <figure key={current.id} className={styles.testimonialBox}>
          <blockquote className={styles.text}>{current.text}</blockquote>
          <figcaption className={styles.author}>{current.author}</figcaption>
        </figure>
      </div>

      {testimonials.length > 1 && (
        <div className={styles.controls}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={cn(styles.dot, index === currentIndex && styles.active)}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
