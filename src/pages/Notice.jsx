import HeroSection from "../components/shared/HeroSection";

export default function Notice() {
  return (
    <div>

      <section className="section content-container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Refund Policy</h2>
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

          <h2 style={{ marginTop: "2rem" }}>Accessibility</h2>
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

          <h2 style={{ marginTop: "2rem" }}>Site Map</h2>
          <p>Navigate Arvane's website:</p>
          <ul>
            <li>
              <strong>Main</strong> - Home page and featured content
            </li>
            <li>
              <strong>Menu</strong> - Browse and explore our full menu
            </li>
            <li>
              <strong>Locations</strong> - Find our cafes and contact information
            </li>
            <li>
              <strong>Reservations</strong> - Book a table at any location
            </li>
            <li>
              <strong>About</strong> - Learn our story and philosophy
            </li>
            <li>
              <strong>Events</strong> - Upcoming events and workshops
            </li>
            <li>
              <strong>Shop</strong> - Gift cards and merchandise
            </li>
            <li>
              <strong>Careers</strong> - Join our team
            </li>
            <li>
              <strong>Contact</strong> - Get in touch with us
            </li>
          </ul>

          <h2 style={{ marginTop: "2rem" }}>Allergen Information</h2>
          <p>
            Arvane takes allergies seriously. While we do our best to prevent cross-contamination, 
            we process nuts, dairy, gluten, and soy in our kitchens.
          </p>
          <p>
            Please inform our staff of any allergies when ordering. For detailed ingredient lists 
            and allergen information, please ask a staff member or contact us directly.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Updates to This Notice</h2>
          <p>
            Arvane reserves the right to update this notice at any time. The most recent version will 
            always be available on our website. Please check back regularly for updates.
          </p>

          <p style={{ marginTop: "2rem", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
            Last updated: June 2026
          </p>
        </div>
      </section>
    </div>
  );
}
