import { Button, Grid, Hero, Section, SectionHeading } from "@/components/ui";
import MenuCard from "@/components/MenuCard/MenuCard";
import { SITE_CONFIG } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import {
  BRAND_VALUES,
  FEATURED_PRODUCTS,
  MEMBERSHIP_BENEFITS,
  MEMBERSHIP_CARD_PERKS,
} from "@/data/home";
import { LOCATIONS } from "@/data/locations";
import { TESTIMONIALS } from "@/data/testimonials";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import heroVideo from "@/assets/images/heros/hero-video.mp4";
import FeatureBox from "./components/FeatureBox";
import TestimonialCarousel from "./components/TestimonialCarousel";
import styles from "./Home.module.css";

const HOME_LOCATIONS_COUNT = 3;

export default function Home() {
  useScrollToHash();

  return (
    <>
      <Hero video={heroVideo} title={SITE_CONFIG.tagline} subtitle={SITE_CONFIG.description}>
        <div className={styles.heroActions}>
          <Button to={ROUTES.menu}>Start An Order</Button>
        </div>
      </Hero>

      <Section>
        <SectionHeading
          eyebrow="Guest Favorites"
          title="Featured Best Sellers"
          description="Our most-loved picks, from smooth espresso drinks to warm cafe staples."
        />
        <Grid columns={5}>
          {FEATURED_PRODUCTS.map((product) => (
            <MenuCard key={product.id} item={product} />
          ))}
        </Grid>
      </Section>

      <section className={styles.chooseUs}>
        <h2>Why Choose Arvane?</h2>
        <div className={styles.features}>
          {BRAND_VALUES.map((value) => (
            <FeatureBox
              key={value.id}
              title={value.title}
              description={value.description}
              image={value.image}
            />
          ))}
        </div>
      </section>

      <Section id="testimonials">
        <SectionHeading
          eyebrow="Testimonials"
          title="Testimonials By Our Customers"
          description="Here's what our customers are saying about us:"
        />
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </Section>

      <section className={styles.membership}>
        <div className={styles.membershipInner}>
          <div className={styles.membershipCopy}>
            <span>Arvane Membership</span>
            <h2>Make Your Daily Coffee Ritual More Rewarding.</h2>
            <p>
              Join the Arvane membership to collect points, unlock member-only perks, and enjoy
              thoughtful extras every time you stop by.
            </p>

            <div className={styles.membershipBenefits}>
              {MEMBERSHIP_BENEFITS.map((benefit) => (
                <div key={benefit.title} className={styles.benefitItem}>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.description}</span>
                </div>
              ))}
            </div>

            <div className={styles.membershipActions}>
              <Button to={ROUTES.memberships} className={styles.joinButton}>
                Join Membership
              </Button>
              <Button to={ROUTES.menu} variant="outline">
                See The Menu
              </Button>
            </div>
          </div>

          <div className={styles.membershipCard}>
            <span className={styles.cardTag}>Member Favorite</span>
            <h3>The Everyday Perks Card</h3>
            <p>Built for regulars who want their coffee habit to feel a little more special.</p>
            <ul>
              {MEMBERSHIP_CARD_PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.locationsHome}>
        <div className={styles.locationsHomeInner}>
          <div className={styles.locationsCopy}>
            <span>Visit Arvane</span>
            <h2>Find Your Nearest Cafe</h2>
            <p>Easy to reach, comfortable to stay in, and open for your daily coffee ritual.</p>
            <Button to={ROUTES.locations} className={styles.locationsBtn}>
              Find a Location
            </Button>
          </div>

          <div className={styles.locationsTableWrap}>
            <table className={styles.locationsTable}>
              <thead>
                <tr>
                  <th scope="col">Location</th>
                  <th scope="col">Address</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
                {LOCATIONS.slice(0, HOME_LOCATIONS_COUNT).map((location) => (
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
    </>
  );
}
