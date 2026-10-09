/** Every path in the app. Use these instead of hard-coded strings. */
export const ROUTES = {
  home: "/",
  menu: "/menu",
  menuItem: "/menu/:itemSlug",
  cart: "/cart",
  locations: "/locations",
  contact: "/contact",
  reserve: "/reserve",
  about: "/about",
  events: "/events",
  giftCards: "/gift-cards",
  joinTeam: "/join-team",
  memberships: "/memberships",
  termsPrivacy: "/terms-privacy",
  notice: "/notice",
};

/** /menu/honey-cinnamon-latte */
export const menuItemPath = (slug) => `${ROUTES.menu}/${slug}`;

/** /menu?category=drinks — the menu opens on that tab */
export const menuCategoryPath = (categoryId) => `${ROUTES.menu}?category=${categoryId}`;
