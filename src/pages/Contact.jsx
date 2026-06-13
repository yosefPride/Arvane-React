import { useState } from "react";
import HeroSection from "../components/shared/HeroSection";
import FormGroup from "../components/shared/FormGroup";
import { validateForm } from "../utils/validation";
import SITE_CONFIG from "../config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm(formData, [
      "name",
      "email",
      "subject",
      "message",
    ]);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Let’s make your next visit feel personal."
        backgroundImage="src/assets/images/heros/contact-hero.jpg"
        overlay={true}
      />

      {/* Contact Form and Info */}
      <section className="section content-container">
        <div className="grid grid-cols-2 gap-lg" style={{ alignItems: "start" }}>
          {/* Contact Form */}
          <div>
            <h2>Send us a Message</h2>

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
                ✓ Thank you for your message! We'll get back to you within 24 hours.
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
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
                placeholder="What is your inquiry about?"
              />

              <FormGroup
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                placeholder="Tell us more about your inquiry..."
                rows={6}
              />

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2>Get in Touch</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div className="card">
                <h4 style={{ color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  Operating Hours
                </h4>
                <p style={{ margin: 0 }}>{SITE_CONFIG.contact.operatingHours}</p>
              </div>

              <div className="card">
                <h4 style={{ color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  Response Time
                </h4>
                <p style={{ margin: 0 }}>
                  We'll respond to your inquiry within{" "}
                  {SITE_CONFIG.contact.responseTime}
                </p>
              </div>

              <div className="card">
                <h4 style={{ color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  WhatsApp Support
                </h4>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <i className="fa-brands fa-whatsapp" /> Start Chat
                </a>
              </div>

              <div className="card">
                <h4 style={{ color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  Visit Us
                </h4>
                <p style={{ margin: 0, fontSize: "var(--text-sm)" }}>
                  You can also visit any of our locations directly. We're always
                  happy to chat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
