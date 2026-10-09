import { useSearchParams } from "react-router-dom";
import { Button, Grid, Hero, Section } from "@/components/ui";
import MenuCard from "@/components/MenuCard/MenuCard";
import { DEFAULT_CATEGORY_ID, MENU_CATEGORIES, getMenuCategory } from "@/data/menu";
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
  // The active tab lives in the URL (?category=drinks) so Back and links restore it
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory =
    getMenuCategory(searchParams.get("category")) ?? getMenuCategory(DEFAULT_CATEGORY_ID);
  const activeId = activeCategory.id;
  const setActiveId = (id) =>
    setSearchParams(id === DEFAULT_CATEGORY_ID ? {} : { category: id }, {
      replace: true,
      preventScrollReset: true,
    });
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
              {label && (
                <h2 className={styles.groupTitle}>
                  {label}
                  <span className={styles.count}>
                    {items.length}
                    <span className="sr-only"> items</span>
                  </span>
                </h2>
              )}
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
