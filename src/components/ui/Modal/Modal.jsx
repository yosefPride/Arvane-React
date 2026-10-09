import { useEffect, useId, useRef } from "react";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/cn";
import styles from "./Modal.module.css";

/**
 * Accessible dialog: closes on Escape or backdrop click, locks page scroll,
 * moves focus into the dialog and returns it to the trigger on close.
 */
export default function Modal({ isOpen, onClose, title, className, children }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);

  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={onClose} />

      <div
        className={cn(styles.dialog, className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className={styles.header}>
          <h2 id={titleId}>{title}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className={styles.close}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
