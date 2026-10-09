import { Link } from "react-router-dom";
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
import { MEMBERSHIP_TIERS } from "@/data/memberships";
import { TESTIMONIALS } from "@/data/testimonials";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import heroVideo from "@/assets/images/heros/hero-video.mp4";
import FeatureBox from "./components/FeatureBox";
import TestimonialCarousel from "./components/TestimonialCarousel";
import styles from "./Home.module.css";

const FEATURED_TIER = MEMBERSHIP_TIERS.find((tier) => tier.popular);

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

          <div className={styles.membershipCards}>
            <PerkCard
              tag="Member Favorite"
              title="The Everyday Perks Card"
              items={MEMBERSHIP_CARD_PERKS}
            >
              <p>Built for regulars who want their coffee habit to feel a little more special.</p>
            </PerkCard>

            <PerkCard
              tag="Most Popular Plan"
              title={`${FEATURED_TIER.name} Membership`}
              items={FEATURED_TIER.benefits.slice(0, 3)}
              action={
                <Link to={ROUTES.memberships} className={styles.cardLink}>
                  Compare all plans <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              }
            >
              <p className={styles.cardPrice}>
                <strong>{FEATURED_TIER.price}</strong>
                {FEATURED_TIER.period}
              </p>
            </PerkCard>
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
        </div>
      </section>
    </>
  );
}

function PerkCard({ tag, title, items, action, children }) {
  return (
    <div className={styles.membershipCard}>
      <span className={styles.cardTag}>{tag}</span>
      <h3>{title}</h3>
      {children}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {action}
    </div>
  );
}
