export const MAX_GUESTS = 20;

export const GUEST_OPTIONS = Array.from({ length: MAX_GUESTS }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 0 ? "Guest" : "Guests"}`,
}));

export const TIME_SLOTS = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
].map((time) => ({ value: time, label: time }));
