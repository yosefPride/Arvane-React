/**
 * Consolidated menu data for all categories
 * Organized by category with proper image path handling
 */

import { buildTrendingItems } from "./trending";
import { buildDrinkItems } from "./drinks";
import { buildFoodItems } from "./food";
import { buildCocktailItems } from "./cocktails";
import { buildHomeBrewingItems } from "./homebrewing";

export const MENU_CATEGORIES = [
  "trending",
  "drinks",
  "bakery",
  "breakfast",
  "lunch",
  "dinner",
  "cocktails",
  "homebrewing",
];

export const MENU_DATA = {
  trending: buildTrendingItems(),
  drinks: buildDrinkItems(),
  bakery: buildFoodItems("bakery"),
  breakfast: buildFoodItems("breakfast"),
  lunch: buildFoodItems("lunch"),
  dinner: buildFoodItems("dinner"),
  cocktails: buildCocktailItems(),
  homebrewing: buildHomeBrewingItems(),
};

/**
 * Get menu items by category
 * @param {string} category - Category name
 * @returns {Array} Menu items for the category
 */
export const getMenuByCategory = (category) => {
  return MENU_DATA[category] || [];
};

/**
 * Get all menu items
 * @returns {Array} All menu items across all categories
 */
export const getAllMenuItems = () => {
  return Object.values(MENU_DATA).flat();
};

/**
 * Search menu items
 * @param {string} query - Search query
 * @returns {Array} Matching menu items
 */
export const searchMenu = (query) => {
  const lowerQuery = query.toLowerCase();
  return getAllMenuItems().filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery)
  );
};

export default MENU_DATA;
