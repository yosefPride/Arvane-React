import { Button, Hero, Section, SectionHeading } from "@/components/ui";
import { MEMBERSHIP_BENEFITS } from "@/data/home";
import { MEMBERSHIP_TIERS } from "@/data/memberships";
import { cn } from "@/lib/cn";
import heroImage from "@/assets/images/heros/membership-hero.jpg";
import styles from "./Memberships.module.css";

const BENEFIT_ICONS = ["fa-solid fa-star", "fa-solid fa-cake-candles", "fa-solid fa-bolt"];

export default function Memberships() {
  return (
    <>
      <Hero title="Memberships" subtitle="Become part of the Arvane family" image={heroImage} />

      <Section>
        <SectionHeading
          eyebrow="Membership Plans"
          title="Choose Your Plan"
          description="Save more, enjoy more. Become a member and unlock exclusive benefits."
        />

        <div className={styles.tiers}>
          {MEMBERSHIP_TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Section>

      <Section className={styles.benefitsSection}>
        <div className={styles.benefits}>
          <h2 className={styles.benefitsTitle}>Every membership includes</h2>
          <div className={styles.benefitList}>
            {MEMBERSHIP_BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className={styles.benefit}>
                <i className={BENEFIT_ICONS[index]} aria-hidden="true" />
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function TierCard({ tier }) {
  return (
    <article className={cn(styles.tier, tier.popular && styles.popular)}>
      {tier.popular && <span className={styles.badge}>Most Popular</span>}

      <div className={styles.tierHeader}>
        <span className={styles.tierIcon} aria-hidden="true">
          <i className={tier.icon} />
        </span>
        <h3>{tier.name}</h3>
      </div>

      <p className={styles.pricing}>
        <span className={styles.price}>{tier.price}</span>
        <span className={styles.period}>{tier.period}</span>
      </p>

      <ul className={styles.features}>
        {tier.benefits.map((benefit) => (
          <li key={benefit}>
            <span className={styles.check} aria-hidden="true">
              <i className="fa-solid fa-check" />
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <Button variant={tier.popular ? "primary" : "outline"} fullWidth size="lg">
        Get Started
      </Button>
    </article>
  );
}
