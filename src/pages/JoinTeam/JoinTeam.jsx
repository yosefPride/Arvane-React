import {
  Alert,
  Button,
  Eyebrow,
  FormField,
  FormRow,
  Hero,
  InfoItem,
  Panel,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CAREER_PERKS, OPEN_POSITIONS } from "@/data/careers";
import { useForm } from "@/hooks/useForm";
import { simulateRequest } from "@/lib/api";
import heroImage from "@/assets/images/heros/join-team-hero.jpg";
import baristaImage from "@/assets/images/barista-role.jpg";
import styles from "./JoinTeam.module.css";

const INITIAL_VALUES = { name: "", email: "", phone: "", position: "", message: "" };
const ROLES = OPEN_POSITIONS.filter((position) => position.value !== "other");

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
        <div className={styles.intro}>
          <div className={styles.photo}>
            <img src={baristaImage} alt="An Arvane barista preparing a drink" loading="lazy" />
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Careers"
              title="Why Work With Us"
              description="Craft, calm, and care — on both sides of the counter."
              className={styles.heading}
            />
            <div className={styles.perks}>
              {CAREER_PERKS.map((perk) => (
                <InfoItem key={perk.title} icon={perk.icon} title={perk.title} className={styles.perk} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.applySection}>
        <Panel className={styles.formPanel}>
          <div className={styles.formHeader}>
            <Eyebrow>Apply Now</Eyebrow>
            <h2>Start your application</h2>
            <ul className={styles.roles} aria-label="Open roles">
              {ROLES.map((role) => (
                <li key={role.value}>{role.label}</li>
              ))}
            </ul>
          </div>

          {isSubmitted && <Alert>Thank you for applying! We&apos;ll be in touch soon.</Alert>}

          <form onSubmit={handleSubmit} noValidate>
            <FormRow>
              <FormField label="Full Name" required {...field("name")} />
              <FormField label="Email" type="email" required {...field("email")} />
            </FormRow>
            <FormRow>
              <FormField label="Phone" type="tel" required {...field("phone")} />
              <FormField
                label="Position Interested"
                type="select"
                required
                options={OPEN_POSITIONS}
                {...field("position")}
              />
            </FormRow>
            <FormField
              label="Tell us about yourself"
              type="textarea"
              placeholder="Why do you want to join Arvane?"
              {...field("message")}
            />

            <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Panel>
      </Section>
    </>
  );
}
