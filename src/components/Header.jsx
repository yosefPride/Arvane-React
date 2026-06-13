import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/CSS/Header.module.css";
import SITE_CONFIG from "../config/site";

import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <Logo />

      <button
        className={`${styles["ham-menu"]} ${menuOpen ? styles.active : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles["off-screen-menu"]} ${menuOpen ? styles.active : ""}`}
        id="site-navigation"
      >
        {SITE_CONFIG.navigation.map((item) => (
          <Link key={item.path} to={item.path} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
