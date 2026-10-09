import { Hero, Section } from "@/components/ui";
import { COMMITMENT_PARAGRAPHS, PHILOSOPHY_PARAGRAPHS, STORY_PARAGRAPHS } from "@/data/about";
import heroImage from "@/assets/images/heros/about-hero.jpg";
import styles from "./About.module.css";

const SECTIONS = [
  { eyebrow: "Our Story", title: "Built For Presence", paragraphs: STORY_PARAGRAPHS, variant: "story" },
  { eyebrow: "Our Philosophy", title: "Measured, Calm, Intentional", paragraphs: PHILOSOPHY_PARAGRAPHS },
  { eyebrow: "Our Commitment", title: "A Promise In Practice", paragraphs: COMMITMENT_PARAGRAPHS },
];

export default function About() {
  return (
    <>
      <Hero title="About Arvane" subtitle="Crafted with passion, served with care" image={heroImage} />

      {SECTIONS.map(({ eyebrow, title, paragraphs, variant }) => (
        <Section key={eyebrow}>
          <article className={styles.panel}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2>{title}</h2>
            <div className={variant === "story" ? styles.storyBody : styles.textBody}>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Section>
      ))}
    </>
  );
}
