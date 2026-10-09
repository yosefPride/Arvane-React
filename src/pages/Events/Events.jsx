import { Button, Card, Grid, Hero, Section } from "@/components/ui";
import { EVENTS } from "@/data/events";
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
        <Grid columns={1}>
          {EVENTS.map((event) => (
            <Card key={event.id} as="article">
              <h3>{event.title}</h3>
              <dl className={styles.meta}>
                <div>
                  <dt>Date:</dt>
                  <dd>{event.date}</dd>
                </div>
                <div>
                  <dt>Time:</dt>
                  <dd>{event.time}</dd>
                </div>
                <div>
                  <dt>Location:</dt>
                  <dd>{event.location}</dd>
                </div>
              </dl>
              <p>{event.description}</p>
              <Button>Learn More</Button>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
