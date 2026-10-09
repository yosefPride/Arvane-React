import { Link } from "react-router-dom";
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
} from "@/components/ui";
import { SITE_CONFIG } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { useForm } from "@/hooks/useForm";
import { simulateRequest } from "@/lib/api";
import { getWhatsAppLink } from "@/lib/whatsapp";
import heroImage from "@/assets/images/heros/contact-hero.jpg";
import styles from "./Contact.module.css";

const INITIAL_VALUES = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { field, handleSubmit, isSubmitting, isSubmitted } = useForm({
    initialValues: INITIAL_VALUES,
    validate: ["name", "email", "subject", "message"],
    onSubmit: () => simulateRequest(),
  });

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Let’s make your next visit feel personal."
        image={heroImage}
      />

      <Section>
        <div className={styles.layout}>
          <Panel variant="dark" className={styles.info}>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2>We&apos;d love to hear from you</h2>
            <p className={styles.lead}>
              Questions, feedback, or a special request — reach out and a real person will reply.
            </p>

            <div className={styles.infoList}>
              <InfoItem icon="fa-regular fa-clock" title="Operating Hours">
                {SITE_CONFIG.contact.operatingHours}
              </InfoItem>
              <InfoItem icon="fa-regular fa-envelope" title="Response Time">
                We reply to every message within {SITE_CONFIG.contact.responseTime}.
              </InfoItem>
              <InfoItem icon="fa-solid fa-location-dot" title="Visit Us">
                You can also visit any of our locations directly. We&apos;re always happy to chat!{" "}
                <Link to={ROUTES.locations} className={styles.inlineLink}>
                  Find a cafe <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </InfoItem>
            </div>

            <Button href={getWhatsAppLink()} external fullWidth className={styles.whatsapp}>
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Chat on WhatsApp
            </Button>
          </Panel>

          <Panel className={styles.formPanel}>
            <Eyebrow>Send a Message</Eyebrow>
            <h2>How can we help?</h2>

            {isSubmitted && (
              <Alert>Thank you for your message! We&apos;ll get back to you within 24 hours.</Alert>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <FormRow>
                <FormField label="Full Name" required placeholder="John Doe" {...field("name")} />
                <FormField
                  label="Email Address"
                  type="email"
                  required
                  placeholder="john@example.com"
                  {...field("email")}
                />
              </FormRow>
              <FormField
                label="Subject"
                required
                placeholder="What is your inquiry about?"
                {...field("subject")}
              />
              <FormField
                label="Message"
                type="textarea"
                rows={6}
                required
                placeholder="Tell us more about your inquiry..."
                {...field("message")}
              />

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Panel>
        </div>
      </Section>
    </>
  );
}
