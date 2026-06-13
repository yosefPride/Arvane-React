import HeroSection from "../components/shared/HeroSection";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Coffee Tasting Evening",
      date: "June 22, 2026",
      time: "6:00 PM",
      location: "Downtown Location",
      description: "Join us for an evening of specialty coffee tasting and education.",
    },
    {
      id: 2,
      title: "Latte Art Workshop",
      date: "June 29, 2026",
      time: "4:00 PM",
      location: "Riverside Commons",
      description: "Learn the art of creating beautiful latte designs from our expert baristas.",
    },
    {
      id: 3,
      title: "Live Music Night",
      date: "July 6, 2026",
      time: "7:00 PM",
      location: "Downtown Location",
      description: "Enjoy local musicians while sipping your favorite Arvane beverage.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Events"
        subtitle="Join us for special experiences and celebrations"
        backgroundImage="src/assets/images/heros/events-hero.jpg"
        overlay={true}
      />

      <section className="section content-container">
        <div className="grid grid-cols-1">
          {events.map((event) => (
            <div key={event.id} className="card">
              <h3>{event.title}</h3>
              <div style={{ display: "flex", gap: "2rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <div>
                  <strong>Date:</strong>
                  <p style={{ margin: 0 }}>{event.date}</p>
                </div>
                <div>
                  <strong>Time:</strong>
                  <p style={{ margin: 0 }}>{event.time}</p>
                </div>
                <div>
                  <strong>Location:</strong>
                  <p style={{ margin: 0 }}>{event.location}</p>
                </div>
              </div>
              <p>{event.description}</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
