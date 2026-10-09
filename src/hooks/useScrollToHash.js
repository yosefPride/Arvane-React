import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to the element matching the URL hash (e.g. /#testimonials) after the page renders. */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);
}
