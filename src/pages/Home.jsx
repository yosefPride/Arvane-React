import { Link } from "react-router-dom";
import HeroSection from "../components/shared/HeroSection";
import FeatureBox from "../components/shared/FeatureBox";
import MenuCard from "../components/shared/MenuCard";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import { LOCATIONS } from "../data/locations";
import SITE_CONFIG from "../config/site";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        backgroundVideo="src/assets/images/heros/hero-video.mp4"
        overlay={true}
      >
        <h1>{SITE_CONFIG.tagline}</h1>
        <h3>{SITE_CONFIG.description}</h3>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/menu" className="btn btn-primary">
            Start An Order
          </Link>
        </div>
      </HeroSection>

      {/* Featured Products */}
      <section className="section content-container">
        <div className="section-heading">
          <span className="eyebrow">Guest Favorites</span>
          <h2>Featured Best Sellers</h2>
          <p>
            Our most-loved picks, from smooth espresso drinks to warm cafe
            staples.
          </p>
        </div>

        <div className="grid grid-cols-5">
          {SITE_CONFIG.featuredProducts.map((product) => (
            <MenuCard key={product.id} item={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Arvane */}
      <section className={styles.chooseUs}>
        <h2>Why Choose Arvane?</h2>
        <div className={styles.features}>
          {SITE_CONFIG.values.map((value) => (
            <FeatureBox
              key={value.id}
              title={value.title}
              description={value.description}
              image={`src/assets/images/home-page/${value.image}`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section content-container" id="testimonials">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>Testimonials By Our Customers</h2>
          <p>Here's what our customers are saying about us:</p>
        </div>
        <TestimonialCarousel testimonials={SITE_CONFIG.testimonials} />
      </section>

      {/* Membership Teaser */}
      <section className={styles.membership}>
        <div className={styles.membershipInner}>
          <div className={styles.membershipCopy}>
            <span className="eyebrow">Arvane Membership</span>
            <h2>Make Your Daily Coffee Ritual More Rewarding.</h2>
            <p>
              Join the Arvane membership to collect points, unlock member-only perks,
              and enjoy thoughtful extras every time you stop by.
            </p>

            <div className={styles.membershipBenefits}>
              <div className={styles.benefitItem}>
                <strong>Earn On Every Visit</strong>
                <span>Collect points on drinks, pastries, and cafe favorites.</span>
              </div>
              <div className={styles.benefitItem}>
                <strong>Birthday Treats</strong>
                <span>Celebrate with a complimentary reward during your birthday month.</span>
              </div>
              <div className={styles.benefitItem}>
                <strong>Early Access</strong>
                <span>Be first in line for seasonal drinks and exclusive offers.</span>
              </div>
            </div>

            <div className={styles.membershipActions}>
              <Link to="/memberships" className="btn btn-primary" style={{color: "var(--primary-color)"}}>
                Join Membership
              </Link>
              <Link to="/menu" className="btn btn-outline">
                See The Menu
              </Link>
            </div>
          </div>

          <div className={styles.membershipCard}>
            <span className={styles.cardTag}>Member Favorite</span>
            <h3>The Everyday Perks Card</h3>
            <p>Built for regulars who want their coffee habit to feel a little more special.</p>
            <ul>
              <li>Points toward free drinks</li>
              <li>Monthly member-only offers</li>
              <li>Faster checkout experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Find Location Teaser */}
      <section className={styles.locationsHome}>
        <div className={styles.locationsHomeInner}>
          <div className={styles.locationsCopy}>
            <span className="eyebrow">Visit Arvane</span>
            <h2>Find Your Nearest Cafe</h2>
            <p>
              Easy to reach, comfortable to stay in, and open for your daily coffee ritual.
            </p>
            <Link to="/locations" className={`btn btn-primary ${styles.locationsBtn}`}>
              Find a Location
            </Link>
          </div>

          <div className={styles.locationsTableWrap}>
            <table className={styles.locationsTable}>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Address</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {LOCATIONS.slice(0, 3).map((location) => (
                  <tr key={location.id}>
                    <td>{location.name}</td>
                    <td>{location.address}</td>
                    <td>{location.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
