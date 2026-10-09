import { Link } from "react-router-dom";
import { Hero } from "@/components/ui";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import styles from "./Legal.module.css";

/**
 * Shared layout for policy pages: compact header, sticky table of contents,
 * and readable long-form content.
 *
 * @param {{ id: string, title: string, content: React.ReactNode }[]} sections
 */
export default function LegalPage({ title, subtitle, updated, sections }) {
  useScrollToHash();

  return (
    <>
      <Hero variant="compact" eyebrow="Legal" title={title} subtitle={subtitle} />

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="On this page">
          <p className={styles.tocTitle}>On this page</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <Link to={{ hash: section.id }}>{section.title}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.content}>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}

          {updated && <p className={styles.updated}>Last updated: {updated}</p>}
        </article>
      </div>
    </>
  );
}
