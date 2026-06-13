import { Link } from "react-router-dom";
import styles from "../assets/CSS/footer.module.css";
import SITE_CONFIG from "../config/site";

import Logo from "./Logo";

export default function Footer() {
  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      "Hi, I would like to inquire about your services."
    );
    return `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}?text=${message}`;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Logo className={styles.footerLogo} />

        {/* Links */}
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4>Explore</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/reserve">Reserve Table</Link>
            <Link to="/events">Events</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Experience</h4>
            <Link to="/gift-cards">Gift Cards</Link>
            <Link to="/memberships">Membership</Link>
            <Link to="/#testimonials">Testimonials</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/join-team">Join Our Team</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <Link to="/terms-privacy">Terms & Privacy</Link>
            <Link to="/notice">Refund Policy</Link>
            <Link to="/notice">Accessibility</Link>
            <Link to="/notice">Site Map</Link>
          </div>

          <div className={`${styles.footerColumn} ${styles.connect}`}>
            <h4>Connect</h4>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <span>Customer Service</span>
              <i className="fa-brands fa-whatsapp" />
            </a>

            <div className={styles.socials}>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Facebook"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Twitter"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on TikTok"
              >
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span className={styles.separator} />
        <p>&copy; 2026 Arvane | Refined coffee. Timeless experience.</p>
      </div>
    </footer>
  );
}
