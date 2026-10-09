import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { useCart } from "@/features/cart";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/cn";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { count } = useCart();

  useEscapeKey(closeMenu, isMenuOpen);
  useLockBodyScroll(isMenuOpen);

  return (
    <header className={styles.header}>
      <Logo onClick={closeMenu} />

      <nav className={cn(styles.nav, isMenuOpen && styles.open)} id="site-navigation">
        {SITE_CONFIG.navigation.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <Link
          to={ROUTES.cart}
          className={styles.cartLink}
          aria-label={count > 0 ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart, empty"}
          onClick={closeMenu}
        >
          <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
          {count > 0 && (
            <span className={styles.cartBadge} aria-hidden="true">
              {count > 99 ? "99+" : count}
            </span>
          )}
        </Link>

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
      </div>
    </header>
  );
}
