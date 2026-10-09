import { Button, Eyebrow, Hero, Panel, Section, SectionHeading } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { EVENTS } from "@/data/events";
import { parseISODate } from "@/lib/format";
import heroImage from "@/assets/images/heros/events-hero.jpg";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <>
      <Hero
        title="Events"
        subtitle="Join us for special experiences and celebrations"
        image={heroImage}
      />

      <Section>
        <SectionHeading
          eyebrow="Upcoming at Arvane"
          title="Gather, Taste, and Listen"
          description="Small-format evenings and workshops hosted across our cafes."
        />

        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Section>
        <Panel variant="dark" className={styles.cta}>
          <div>
            <Eyebrow>Private Events</Eyebrow>
            <h2>Hosting something of your own?</h2>
            <p>Tell us about your gathering and we&apos;ll help you find the right space.</p>
          </div>
          <Button to={ROUTES.contact} size="lg">
            Get in Touch
          </Button>
        </Panel>
      </Section>
    </>
  );
}

function EventCard({ event }) {
  const date = parseISODate(event.date);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={event.image} alt="" loading="lazy" />
        <time className={styles.dateBadge} dateTime={event.date}>
          <span className={styles.day}>{date.day}</span>
          <span className={styles.month}>{date.month}</span>
        </time>
        <span className={styles.category}>{event.category}</span>
      </div>

      <div className={styles.body}>
        <h3>{event.title}</h3>

        <ul className={styles.meta}>
          <li>
            <i className="fa-regular fa-calendar" aria-hidden="true" />
            {date.weekday}, {date.long}
          </li>
          <li>
            <i className="fa-regular fa-clock" aria-hidden="true" />
            {event.time}
          </li>
          <li>
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
            {event.location}
          </li>
        </ul>

        <p className={styles.description}>{event.description}</p>

        <Button to={ROUTES.reserve} variant="outline" className={styles.action}>
          Reserve a Spot
        </Button>
      </div>
    </article>
  );
}
