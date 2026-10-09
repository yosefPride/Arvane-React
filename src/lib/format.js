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
