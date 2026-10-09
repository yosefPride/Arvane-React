export const MAX_QUANTITY = 20;

const clamp = (quantity) => Math.min(Math.max(quantity, 0), MAX_QUANTITY);

/**
 * Cart state is a list of { slug, quantity }. Item details (name, price,
 * image) are looked up from the menu when rendering, so they never go stale.
 */
export function cartReducer(items, action) {
  switch (action.type) {
    case "add": {
      const existing = items.find((line) => line.slug === action.slug);
      if (existing) {
        return items.map((line) =>
          line.slug === action.slug
            ? { ...line, quantity: clamp(line.quantity + action.quantity) }
            : line
        );
      }
      return [...items, { slug: action.slug, quantity: clamp(action.quantity) }];
    }
    case "setQuantity": {
      const quantity = clamp(action.quantity);
      return quantity === 0
        ? items.filter((line) => line.slug !== action.slug)
        : items.map((line) => (line.slug === action.slug ? { ...line, quantity } : line));
    }
    case "remove":
      return items.filter((line) => line.slug !== action.slug);
    case "clear":
      return [];
    default:
      throw new Error(`Unknown cart action: ${action.type}`);
  }
}
