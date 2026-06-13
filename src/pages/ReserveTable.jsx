import { useState } from "react";
import HeroSection from "../components/shared/HeroSection";
import FormGroup from "../components/shared/FormGroup";
import { validateForm } from "../utils/validation";

export default function ReserveTable() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData, [
      "name",
      "phone",
      "email",
      "date",
      "time",
      "guests",
    ]);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "2",
        notes: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const guestOptions = Array.from({ length: 20 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? "Guest" : "Guests"}`,
  }));

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ].map((time) => ({ value: time, label: time }));

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Reserve A Table"
        subtitle="Book your seat at Arvane for a perfect dining experience"
        backgroundImage="src/assets/images/heros/reservation-hero.jpeg"
        overlay={true}
      />

      {/* Reservation Form */}
      <section className="section content-container">
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Book Your Table
          </h2>

          {submitted && (
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "var(--radius-md)",
                marginBottom: "1.5rem",
                border: "1px solid #c3e6cb",
              }}
            >
              ✓ Your reservation has been confirmed! We'll see you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <FormGroup
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
              placeholder="John Doe"
            />

            <FormGroup
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              placeholder="(555) 123-4567"
            />

            <FormGroup
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              placeholder="john@example.com"
            />

            <FormGroup
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
              required
              min={getTodayDate()}
            />

            <FormGroup
              label="Time"
              name="time"
              type="select"
              value={formData.time}
              onChange={handleChange}
              error={errors.time}
              required
              placeholder="Select a time"
              options={timeSlots}
            />

            <FormGroup
              label="Number of Guests"
              name="guests"
              type="select"
              value={formData.guests}
              onChange={handleChange}
              error={errors.guests}
              required
              options={guestOptions}
            />

            <FormGroup
              label="Special Requests (Optional)"
              name="notes"
              type="textarea"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any dietary restrictions, celebrations, or special occasions?"
              rows={4}
            />

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={isSubmitting}
              style={{ width: "100%" }}
            >
              {isSubmitting ? "Booking..." : "Confirm Reservation"}
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
            }}
          >
            * Reservations are typically available 2 weeks in advance
          </p>
        </div>
      </section>
    </div>
  );
}
