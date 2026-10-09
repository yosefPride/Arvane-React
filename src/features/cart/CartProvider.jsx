import { useEffect, useMemo, useReducer } from "react";
import { getMenuItem } from "@/data/menu";
import { CartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";

const STORAGE_KEY = "arvane-cart";

/** Restore the saved cart, dropping anything no longer on the menu. */
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(saved)
      ? saved.filter((line) => getMenuItem(line?.slug) && line.quantity > 0)
      : [];
  } catch {
    return [];
  }
}

export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable (private mode, quota): the cart still works for this visit
    }
  }, [items]);

  const value = useMemo(() => {
    const lines = items.map((line) => {
      const item = getMenuItem(line.slug);
      return { ...line, item, total: item.price * line.quantity };
    });

    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.total, 0),
      getQuantity: (slug) => items.find((line) => line.slug === slug)?.quantity ?? 0,
      addItem: (slug, quantity = 1) => dispatch({ type: "add", slug, quantity }),
      setQuantity: (slug, quantity) => dispatch({ type: "setQuantity", slug, quantity }),
      removeItem: (slug) => dispatch({ type: "remove", slug }),
      clearCart: () => dispatch({ type: "clear" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
