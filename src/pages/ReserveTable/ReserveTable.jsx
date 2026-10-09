import { Alert, Button, FormField, Hero, Section } from "@/components/ui";
import { GUEST_OPTIONS, TIME_SLOTS } from "@/data/reservations";
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
        <div className={styles.container}>
          <h2 className={styles.title}>Book Your Table</h2>

          {isSubmitted && <Alert>Your reservation has been confirmed! We&apos;ll see you soon.</Alert>}

          <form onSubmit={handleSubmit} noValidate>
            <FormField label="Full Name" required placeholder="John Doe" {...field("name")} />
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
              label="Number of Guests"
              type="select"
              required
              options={GUEST_OPTIONS}
              {...field("guests")}
            />
            <FormField
              label="Special Requests (Optional)"
              type="textarea"
              placeholder="Any dietary restrictions, celebrations, or special occasions?"
              {...field("notes")}
            />

            <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Confirm Reservation"}
            </Button>
          </form>

          <p className={styles.note}>* Reservations are typically available 2 weeks in advance</p>
        </div>
      </Section>
    </>
  );
}
