import { Alert, Button, FormField, Grid, Hero, Section } from "@/components/ui";
import { CAREER_PERKS, OPEN_POSITIONS } from "@/data/careers";
import { useForm } from "@/hooks/useForm";
import { simulateRequest } from "@/lib/api";
import heroImage from "@/assets/images/heros/join-team-hero.jpg";
import styles from "./JoinTeam.module.css";

const INITIAL_VALUES = { name: "", email: "", phone: "", position: "", message: "" };

export default function JoinTeam() {
  const { field, handleSubmit, isSubmitting, isSubmitted } = useForm({
    initialValues: INITIAL_VALUES,
    validate: ["name", "email", "phone", "position"],
    onSubmit: () => simulateRequest(),
  });

  return (
    <>
      <Hero title="Join Our Team" subtitle="Be part of something great" image={heroImage} />

      <Section>
        <Grid columns={2}>
          <div>
            <h2>Why Work With Us</h2>
            <ul className={styles.perks}>
              {CAREER_PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Apply Now</h2>

            {isSubmitted && <Alert>Thank you for applying! We&apos;ll be in touch soon.</Alert>}

            <form onSubmit={handleSubmit} noValidate>
              <FormField label="Full Name" required {...field("name")} />
              <FormField label="Email" type="email" required {...field("email")} />
              <FormField label="Phone" type="tel" required {...field("phone")} />
              <FormField
                label="Position Interested"
                type="select"
                required
                options={OPEN_POSITIONS}
                {...field("position")}
              />
              <FormField
                label="Tell us about yourself"
                type="textarea"
                placeholder="Why do you want to join Arvane?"
                {...field("message")}
              />

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </Grid>
      </Section>
    </>
  );
}
