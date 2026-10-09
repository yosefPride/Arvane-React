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
import { ROUTES } from "@/constants/routes";
import { GUEST_OPTIONS, MAX_GUESTS, TIME_SLOTS } from "@/data/reservations";
import { useForm } from "@/hooks/useForm";
import { simulateRequest } from "@/lib/api";
import { getLocalISODate } from "@/lib/format";
import heroImage from "@/assets/images/heros/reservation-hero.jpeg";
import styles from "./ReserveTable.module.css";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function ReserveTable() {
  const { field, handleSubmit, isSubmitting, isSubmitted } = useForm({
    initialValues: INITIAL_VALUES,
    validate: ["name", "phone", "email", "date", "time", "guests"],
    onSubmit: () => simulateRequest(),
  });

  return (
    <>
      <Hero
        title="Reserve A Table"
        subtitle="Book your seat at Arvane for a perfect dining experience"
        image={heroImage}
      />

      <Section>
        <div className={styles.layout}>
          <Panel className={styles.formPanel}>
            <Eyebrow>Reservations</Eyebrow>
            <h2>Book Your Table</h2>

            {isSubmitted && <Alert>Your reservation has been confirmed! We&apos;ll see you soon.</Alert>}

            <form onSubmit={handleSubmit} noValidate>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.step}>1</span> Your details
                </legend>
                <FormField label="Full Name" required placeholder="John Doe" {...field("name")} />
                <FormRow>
                  <FormField
                    label="Phone Number"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    {...field("phone")}
                  />
                  <FormField
                    label="Email Address"
                    type="email"
                    required
                    placeholder="john@example.com"
                    {...field("email")}
                  />
                </FormRow>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.step}>2</span> Your visit
                </legend>
                <FormRow columns={3}>
                  <FormField
                    label="Date"
                    type="date"
                    required
                    min={getLocalISODate()}
                    {...field("date")}
                  />
                  <FormField
                    label="Time"
                    type="select"
                    required
                    placeholder="Select a time"
                    options={TIME_SLOTS}
                    {...field("time")}
                  />
                  <FormField
                    label="Guests"
                    type="select"
                    required
                    options={GUEST_OPTIONS}
                    {...field("guests")}
                  />
                </FormRow>
                <FormField
                  label="Special Requests (Optional)"
                  type="textarea"
                  placeholder="Any dietary restrictions, celebrations, or special occasions?"
                  {...field("notes")}
                />
              </fieldset>

              <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "Confirm Reservation"}
              </Button>
            </form>
          </Panel>

          <Panel as="aside" variant="dark" className={styles.aside}>
            <Eyebrow>Good to Know</Eyebrow>
            <h3 className={styles.asideTitle}>Before you book</h3>

            <div className={styles.notes}>
              <InfoItem icon="fa-regular fa-calendar-check" title="Book ahead">
                Reservations are typically available 2 weeks in advance.
              </InfoItem>
              <InfoItem icon="fa-solid fa-user-group" title="Groups welcome">
                Tables for 1 to {MAX_GUESTS} guests.
              </InfoItem>
              <InfoItem icon="fa-solid fa-champagne-glasses" title="Special occasions">
                Celebrating or have dietary needs? Add it to your special requests.
              </InfoItem>
            </div>

            <p className={styles.help}>
              Questions about your booking?{" "}
              <Link to={ROUTES.contact}>Contact us</Link>
            </p>
          </Panel>
        </div>
      </Section>
    </>
  );
}
