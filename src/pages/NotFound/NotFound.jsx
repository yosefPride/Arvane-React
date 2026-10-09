import { Button, Section, SectionHeading } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Section className={styles.notFound}>
      <SectionHeading
        eyebrow="404"
        title="Page not found"
        description="The page you're looking for doesn't exist or has moved."
      />
      <Button to={ROUTES.home}>Back to Home</Button>
    </Section>
  );
}
