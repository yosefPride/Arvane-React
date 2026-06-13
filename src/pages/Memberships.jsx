import HeroSection from "../components/shared/HeroSection";

export default function Memberships() {
  const membershipTiers = [
    {
      id: "starter",
      name: "Starter",
      price: "$9.99",
      period: "/month",
      benefits: [
        "10% discount on all purchases",
        "Free medium drink with every purchase",
        "Monthly exclusive offers",
        "Early access to new products",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19.99",
      period: "/month",
      popular: true,
      benefits: [
        "15% discount on all purchases",
        "Free large drink with every purchase",
        "Weekly exclusive offers",
        "Early access to new products",
        "Free pastry once a week",
        "Priority seating",
        "Free WiFi priority",
      ],
    },
    {
      id: "elite",
      name: "Elite",
      price: "$39.99",
      period: "/month",
      benefits: [
        "20% discount on all purchases",
        "Unlimited free drinks (1 per day)",
        "Daily exclusive offers",
        "Premium event invitations",
        "Free pastry twice a week",
        "Reserved seating",
        "Complimentary gift card ($50/month)",
        "Personal barista consultations",
      ],
    },
  ];

  return (
    <div>
      <HeroSection
        title="Memberships"
        subtitle="Become part of the Arvane family"
        backgroundImage="src/assets/images/heros/membership-hero.jpg"
        overlay={true}
      />

      <section className="section content-container">
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Choose Your Plan
          </h2>
          <p style={{ textAlign: "center", fontSize: "var(--text-lg)" }}>
            Save more, enjoy more. Become a member and unlock exclusive benefits.
          </p>
        </div>

        <div className="grid grid-cols-3">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className="card"
              style={{
                position: "relative",
                border: tier.popular
                  ? "2px solid var(--accent-gold)"
                  : "1px solid var(--border-color)",
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "20px",
                    backgroundColor: "var(--accent-gold)",
                    color: "var(--primary-color)",
                    padding: "0.25rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-xs)",
                    fontWeight: "600",
                  }}
                >
                  POPULAR
                </div>
              )}

              <h3 style={{ marginBottom: "0.5rem" }}>{tier.name}</h3>
              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "var(--accent-gold)",
                  }}
                >
                  {tier.price}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>
                  {tier.period}
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ fontSize: "var(--text-sm)" }}>
                    <span style={{ color: "var(--accent-gold)", marginRight: "0.5rem" }}>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                className={`btn ${tier.popular ? "btn-primary" : "btn-outline"}`}
                style={{ width: "100%" }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
