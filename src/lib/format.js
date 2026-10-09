export function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

/** Today's date as YYYY-MM-DD in the user's local timezone (for <input type="date" min>). */
export function getLocalISODate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Split a YYYY-MM-DD date into display parts without timezone shifts.
 * parseISODate("2026-06-22") -> { day: "22", month: "Jun", weekday: "Monday", long: "June 22, 2026" }
 */
export function parseISODate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return {
    day: String(day),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    long: date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
  };
}
