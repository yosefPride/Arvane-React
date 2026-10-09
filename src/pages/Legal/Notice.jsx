import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import LegalPage from "./LegalPage";
import styles from "./Legal.module.css";

const SITE_MAP = [
  { label: "Main", to: ROUTES.home, description: "Home page and featured content" },
  { label: "Menu", to: ROUTES.menu, description: "Browse and explore our full menu" },
  { label: "Locations", to: ROUTES.locations, description: "Find our cafes and contact information" },
  { label: "Reservations", to: ROUTES.reserve, description: "Book a table at any location" },
  { label: "About", to: ROUTES.about, description: "Learn our story and philosophy" },
  { label: "Events", to: ROUTES.events, description: "Upcoming events and workshops" },
  { label: "Shop", to: ROUTES.giftCards, description: "Gift cards and merchandise" },
  { label: "Careers", to: ROUTES.joinTeam, description: "Join our team" },
  { label: "Contact", to: ROUTES.contact, description: "Get in touch with us" },
];

const SECTIONS = [
  {
    id: "refund-policy",
    title: "Refund Policy",
    content: (
      <>
        <p>
          Arvane strives for 100% customer satisfaction. Here's our refund policy:
        </p>

        <h3>Food & Beverages</h3>
        <ul>
          <li>Refunds available within 24 hours if the product quality doesn't meet our standards</li>
          <li>Replacements are available immediately upon request</li>
          <li>Custom orders are non-refundable unless preparation has not yet begun</li>
        </ul>

        <h3>Gift Cards</h3>
        <ul>
          <li>Gift cards are non-refundable but never expire</li>
          <li>Balance can be transferred to another gift card upon request</li>
        </ul>

        <h3>Membership Cancellations</h3>
        <ul>
          <li>Cancellations can be made at any time with 7 days notice</li>
          <li>No refunds for the current billing cycle</li>
          <li>Remaining credits can be used until your membership ends</li>
        </ul>
      </>
    ),
  },
  {
    id: "accessibility",
    title: "Accessibility",
    content: (
      <>
        <p>
          Arvane is committed to providing accessible experiences for all guests. All our locations 
          feature:
        </p>
        <ul>
          <li>Wheelchair accessible entrances and restrooms</li>
          <li>Accessible parking areas</li>
          <li>Menu information available in different formats upon request</li>
          <li>Staff trained in accessibility services</li>
        </ul>

        <p>
          If you need any specific accommodations, please don't hesitate to contact us.
        </p>
      </>
    ),
  },
  {
    id: "site-map",
    title: "Site Map",
    content: (
      <>
        <p>Navigate Arvane's website:</p>
        <ul className={styles.siteMap}>
          {SITE_MAP.map((entry) => (
            <li key={entry.label}>
              <Link to={entry.to} className={styles.siteMapLink}>
                <strong>{entry.label}</strong>
                <span>{entry.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "allergen-information",
    title: "Allergen Information",
    content: (
      <>
        <p>
          Arvane takes allergies seriously. While we do our best to prevent cross-contamination, 
          we process nuts, dairy, gluten, and soy in our kitchens.
        </p>
        <p>
          Please inform our staff of any allergies when ordering. For detailed ingredient lists 
          and allergen information, please ask a staff member or contact us directly.
        </p>
      </>
    ),
  },
  {
    id: "updates-to-this-notice",
    title: "Updates to This Notice",
    content: (
      <>
        <p>
          Arvane reserves the right to update this notice at any time. The most recent version will 
          always be available on our website. Please check back regularly for updates.
        </p>
      </>
    ),
  },
];

export default function Notice() {
  return (
    <LegalPage
      title="Notices & Policies"
      subtitle="Refunds, accessibility, allergens, and a map of the site."
      updated="June 2026"
      sections={SECTIONS}
    />
  );
}
