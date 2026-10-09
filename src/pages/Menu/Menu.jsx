import { useState } from "react";
import { Button, Grid, Hero, Section } from "@/components/ui";
import MenuCard from "@/components/MenuCard/MenuCard";
import { MENU_CATEGORIES } from "@/data/menu";
import heroVideo from "@/assets/images/heros/menu-hero.mp4";
import styles from "./Menu.module.css";

/** Group items by subcategory label, keeping first-seen order. */
function groupBySubcategory(items) {
  return items.reduce((groups, item) => {
    const label = item.subcategoryLabel ?? "";
    (groups[label] ??= []).push(item);
    return groups;
  }, {});
}

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const activeCategory = MENU_CATEGORIES.find((category) => category.id === activeId);
  const groups = Object.entries(groupBySubcategory(activeCategory.items));

  return (
    <>
      <Hero
        title="Our Menu"
        subtitle="Discover our carefully curated selection of coffee, food, and drinks"
        video={heroVideo}
      />

      <Section>
        <div className={styles.tabs} role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeId;
            return (
              <Button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                variant={isActive ? "primary" : "outline"}
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </Button>
            );
          })}
        </div>

        <div role="tabpanel" aria-label={activeCategory.label}>
          {groups.map(([label, items]) => (
            <div key={label} className={label ? styles.group : undefined}>
              {label && <h2 className={styles.groupTitle}>{label}</h2>}
              <Grid columns={5}>
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
