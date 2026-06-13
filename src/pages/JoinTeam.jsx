import { useState } from "react";
import HeroSection from "../components/shared/HeroSection";
import FormGroup from "../components/shared/FormGroup";
import { validateForm } from "../utils/validation";

export default function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
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
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData, ["name", "email", "phone", "position"]);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", position: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const positions = [
    { value: "barista", label: "Barista" },
    { value: "manager", label: "Café Manager" },
    { value: "chef", label: "Chef" },
    { value: "pastry", label: "Pastry Chef" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <HeroSection
        title="Join Our Team"
        subtitle="Be part of something great"
        backgroundImage="src/assets/images/heros/join-team-hero.jpg"
        overlay={true}
      />

      <section className="section content-container">
        <div className="grid grid-cols-2 gap-lg">
          <div>
            <h2>Why Work With Us</h2>
            <ul style={{ lineHeight: "var(--line-height-relaxed)" }}>
              <li>Competitive compensation and benefits</li>
              <li>Professional development opportunities</li>
              <li>Flexible scheduling</li>
              <li>Team-oriented work environment</li>
              <li>Free coffee and meals on your shift</li>
              <li>Growth opportunities within the company</li>
            </ul>
          </div>

          <div>
            <h2>Apply Now</h2>
            {submitted && (
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "1.5rem",
                }}
              >
                ✓ Thank you for applying! We'll be in touch soon.
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
              />

              <FormGroup
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <FormGroup
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                required
              />

              <FormGroup
                label="Position Interested"
                name="position"
                type="select"
                value={formData.position}
                onChange={handleChange}
                error={errors.position}
                required
                options={positions}
              />

              <FormGroup
                label="Tell us about yourself"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to join Arvane?"
                rows={4}
              />

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
