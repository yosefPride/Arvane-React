import { Button, Card, Grid, Hero, Section, SectionHeading } from "@/components/ui";
import { MEMBERSHIP_TIERS } from "@/data/memberships";
import { cn } from "@/lib/cn";
import heroImage from "@/assets/images/heros/membership-hero.jpg";
import styles from "./Memberships.module.css";

export default function Memberships() {
  return (
    <>
      <Hero title="Memberships" subtitle="Become part of the Arvane family" image={heroImage} />

      <Section>
        <SectionHeading
          className={styles.heading}
          title="Choose Your Plan"
          description="Save more, enjoy more. Become a member and unlock exclusive benefits."
        />

        <Grid columns={3}>
          {MEMBERSHIP_TIERS.map((tier) => (
            <Card key={tier.id} className={cn(styles.tier, tier.popular && styles.popular)}>
              {tier.popular && <div className={styles.badge}>POPULAR</div>}

              <h3 className={styles.name}>{tier.name}</h3>
              <div className={styles.pricing}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.period}>{tier.period}</span>
              </div>

              <ul className={styles.benefits}>
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button variant={tier.popular ? "primary" : "outline"} fullWidth>
                Get Started
              </Button>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
