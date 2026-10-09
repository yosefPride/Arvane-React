import { useEffect, useRef } from "react";

/** Call `handler` when Escape is pressed, while `active` is true. */
export function useEscapeKey(handler, active = true) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") handlerRef.current(event);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
}
