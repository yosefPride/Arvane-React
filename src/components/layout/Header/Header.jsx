import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/cn";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEscapeKey(closeMenu, isMenuOpen);
  useLockBodyScroll(isMenuOpen);

  return (
    <header className={styles.header}>
      <Logo onClick={closeMenu} />

      <button
        className={cn(styles.menuToggle, isMenuOpen && styles.open)}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={cn(styles.nav, isMenuOpen && styles.open)} id="site-navigation">
        {SITE_CONFIG.navigation.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
