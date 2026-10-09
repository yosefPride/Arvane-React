import { Alert, Button, Card, FormField, Grid, Hero, Section } from "@/components/ui";
import { SITE_CONFIG } from "@/config/site";
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
        <Grid columns={2} className={styles.layout}>
          <div>
            <h2>Send us a Message</h2>

            {isSubmitted && (
              <Alert>Thank you for your message! We&apos;ll get back to you within 24 hours.</Alert>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <FormField label="Full Name" required placeholder="John Doe" {...field("name")} />
              <FormField
                label="Email Address"
                type="email"
                required
                placeholder="john@example.com"
                {...field("email")}
              />
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
          </div>

          <div>
            <h2>Get in Touch</h2>

            <div className={styles.infoList}>
              <Card className={styles.infoCard}>
                <h4>Operating Hours</h4>
                <p>{SITE_CONFIG.contact.operatingHours}</p>
              </Card>

              <Card className={styles.infoCard}>
                <h4>Response Time</h4>
                <p>We&apos;ll respond to your inquiry within {SITE_CONFIG.contact.responseTime}</p>
              </Card>

              <Card className={styles.infoCard}>
                <h4>WhatsApp Support</h4>
                <Button href={getWhatsAppLink()} external variant="outline">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Start Chat
                </Button>
              </Card>

              <Card className={styles.infoCard}>
                <h4>Visit Us</h4>
                <p className={styles.small}>
                  You can also visit any of our locations directly. We&apos;re always happy to chat!
                </p>
              </Card>
            </div>
          </div>
        </Grid>
      </Section>
    </>
  );
}
