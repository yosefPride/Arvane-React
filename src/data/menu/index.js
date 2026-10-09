/**
 * Menu categories in display order, each with its items, plus lookups for
 * individual item pages.
 */
import { slugify } from "@/lib/slug";
import { TRENDING } from "./trending";
import { DRINKS } from "./drinks";
import { getFoodItems } from "./food";
import { COCKTAILS } from "./cocktails";
import { HOME_BREWING } from "./homebrewing";
import { menuImage } from "./images";

export { menuImage };

const withSlug = (items) => items.map((item) => ({ ...item, slug: slugify(item.name) }));

export const MENU_CATEGORIES = [
  { id: "trending", label: "Trending", items: withSlug(TRENDING) },
  { id: "drinks", label: "Drinks", items: withSlug(DRINKS) },
  { id: "bakery", label: "Bakery", items: withSlug(getFoodItems("bakery")) },
  { id: "breakfast", label: "Breakfast", items: withSlug(getFoodItems("breakfast")) },
  { id: "lunch", label: "Lunch", items: withSlug(getFoodItems("lunch")) },
  { id: "dinner", label: "Dinner", items: withSlug(getFoodItems("dinner")) },
  { id: "cocktails", label: "Cocktails", items: withSlug(COCKTAILS) },
  { id: "homebrewing", label: "Homebrewing", items: withSlug(HOME_BREWING) },
];

export const DEFAULT_CATEGORY_ID = MENU_CATEGORIES[0].id;

// Trending repeats items from other categories, so it's indexed last and
// every slug resolves to the item's home category.
const ITEMS_BY_SLUG = new Map();
for (const category of [...MENU_CATEGORIES.slice(1), MENU_CATEGORIES[0]]) {
  for (const item of category.items) {
    if (!ITEMS_BY_SLUG.has(item.slug)) ITEMS_BY_SLUG.set(item.slug, item);
  }
}

export function getMenuCategory(id) {
  return MENU_CATEGORIES.find((category) => category.id === id);
}

export function getMenuItem(slug) {
  return ITEMS_BY_SLUG.get(slug);
}

/** Other items from the same subcategory (or category), for "More like this". */
export function getRelatedItems(item, limit = 4) {
  const siblings = getMenuCategory(item.category)?.items ?? [];
  const sameGroup = siblings.filter(
    (other) => other.slug !== item.slug && other.subcategoryLabel === item.subcategoryLabel
  );
  const rest = siblings.filter((other) => other.slug !== item.slug && !sameGroup.includes(other));
  return [...sameGroup, ...rest].slice(0, limit);
}
