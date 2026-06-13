import { useState, useEffect } from "react";
import styles from "./TestimonialCarousel.module.css";

/**
 * Testimonial Carousel Component
 * Displays rotating testimonials with smooth transitions
 */
export default function TestimonialCarousel({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        <div className={styles.testimonialBox}>
          <p className={styles.text}>{currentTestimonial.text}</p>
          <span className={styles.author}>{currentTestimonial.author}</span>
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className={styles.controls}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
