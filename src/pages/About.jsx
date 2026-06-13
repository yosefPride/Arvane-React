import HeroSection from "../components/shared/HeroSection";
import styles from "./About.module.css";

const storyParagraphs = [
  "Arvane was created to redefine the cafe experience by removing the noise, the excess, and the ordinary.",
  "Modern cafes have become louder, faster, and increasingly transactional. Spaces designed for convenience rather than presence. Coffee reduced to routine. Environments filled, but rarely considered.",
  "Arvane was built in response to that.",
  "From the beginning, the goal was not to follow trends, but to establish a different standard: one rooted in clarity, restraint, and purpose. A place where every element serves a role, and nothing exists without reason.",
  "This philosophy shapes everything.",
  "The coffee is not rushed. Each cup is prepared with measured precision, with timing, temperature, and balance treated as essential variables, not afterthoughts. What is served is deliberate, consistent, and repeatable.",
  "The space follows the same principle. Lighting is softened to create focus, not distraction. Materials are chosen for their presence, not excess. The layout is structured to feel open, yet contained, allowing movement without noise.",
  "Arvane does not aim to offer everything. It aims to offer what matters: refined, reduced, and executed at a higher level. A menu that is curated rather than expanded. An environment that is designed rather than filled.",
  "Because a better experience is not created by adding more, but by removing what does not belong.",
  "At its core, Arvane is built on the belief that small details, when treated with care, transform the entire experience.",
  "Arvane exists to elevate the everyday.",
];

const philosophyParagraphs = [
  "Our philosophy begins with restraint. We believe a cafe should not overwhelm the guest. It should give them room to arrive, settle, and enjoy what is in front of them.",
  "Craftsmanship is treated as a daily practice, not a slogan. Beans are selected with care, drinks are prepared with consistency, and each recipe is designed around balance rather than excess.",
  "Quality also means honesty. We favor real ingredients, clean flavors, and a focused menu that can be prepared well every time.",
  "The atmosphere matters as much as the cup. Light, sound, seating, and service all work together to create a place that feels calm, useful, and considered.",
];

const commitmentParagraphs = [
  "Our commitment is to keep Arvane thoughtful as it grows. Every detail, from sourcing to service, should support the same promise: a refined experience that still feels warm and human.",
  "We are committed to consistency, sustainability, and community. That means responsible choices where they matter, dependable quality in what we serve, and a space where guests feel welcome without the experience feeling ordinary.",
  "Arvane is built around small decisions made with care, because those decisions shape how the whole visit feels.",
];

export default function About() {
  return (
    <div>
      <HeroSection
        title="About Arvane"
        subtitle="Crafted with passion, served with care"
        backgroundImage="src/assets/images/heros/about-hero.jpg"
        overlay={true}
      />

      <section className={`section content-container ${styles.storySection}`}>
        <article className={styles.story}>
          <span className={styles.eyebrow}>Our Story</span>
          <h2>Built For Presence</h2>
          <div className={styles.storyBody}>
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className={`section content-container ${styles.textSection}`}>
        <article className={styles.textPanel}>
          <span className={styles.eyebrow}>Our Philosophy</span>
          <h2>Measured, Calm, Intentional</h2>
          <div className={styles.textBody}>
            {philosophyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className={`section content-container ${styles.storySection}`}>
        <article className={styles.textPanel}>
          <span className={styles.eyebrow}>Our Commitment</span>
          <h2>A Promise In Practice</h2>
          <div className={styles.textBody}>
            {commitmentParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
