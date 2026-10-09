import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const WHATSAPP_MESSAGE = "Hi, I would like to inquire about your services.";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Logo className={styles.footerLogo} />

        <div className={styles.footerGrid}>
          {SITE_CONFIG.footerNavigation.map((column) => (
            <nav key={column.title} className={styles.footerColumn} aria-label={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className={cn(styles.footerColumn, styles.connect)}>
            <h4>Connect</h4>

            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <span>Customer Service</span>
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            </a>

            <div className={styles.socials}>
              {SITE_CONFIG.social.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE_CONFIG.name} on ${social.label}`}
                  title={`Follow us on ${social.label}`}
                >
                  <i className={`fa-brands ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span className={styles.separator} />
        <p>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name} | {SITE_CONFIG.copyright}
        </p>
      </div>
    </footer>
  );
}
