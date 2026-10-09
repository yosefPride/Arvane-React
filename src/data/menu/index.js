/**
 * Menu categories in display order, each with its items.
 */
import { TRENDING } from "./trending";
import { DRINKS } from "./drinks";
import { getFoodItems } from "./food";
import { COCKTAILS } from "./cocktails";
import { HOME_BREWING } from "./homebrewing";
import { menuImage } from "./images";

export { menuImage };

export const MENU_CATEGORIES = [
  { id: "trending", label: "Trending", items: TRENDING },
  { id: "drinks", label: "Drinks", items: DRINKS },
  { id: "bakery", label: "Bakery", items: getFoodItems("bakery") },
  { id: "breakfast", label: "Breakfast", items: getFoodItems("breakfast") },
  { id: "lunch", label: "Lunch", items: getFoodItems("lunch") },
  { id: "dinner", label: "Dinner", items: getFoodItems("dinner") },
  { id: "cocktails", label: "Cocktails", items: COCKTAILS },
  { id: "homebrewing", label: "Homebrewing", items: HOME_BREWING },
];
