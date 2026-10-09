import { ROUTES } from "@/constants/routes";

export const CUSTOM_AMOUNT = "custom";

export const GIFT_CARD_OPTIONS = [
  { id: 1, amount: 25, description: "Perfect for a coffee lover" },
  { id: 2, amount: 50, description: "Great for multiple visits" },
  { id: 3, amount: 100, description: "Premium gift option" },
  { id: 4, amount: 250, description: "Generous for regular customers" },
  { id: 5, amount: CUSTOM_AMOUNT, description: "Choose a custom amount" },
];

export const GIFT_CARD_HIGHLIGHTS = [
  { id: 1, text: "Instant Delivery", icon: "fa-shipping-fast" },
  { id: 2, text: "No Expiration", icon: "fa-hourglass-end" },
  { id: 3, text: "All Locations", icon: "fa-location-dot" },
  { id: 4, text: "Digital & Physical", icon: "fa-file-download" },
];

export const PAYMENT_METHODS = [
  { id: "card", label: "Card", icon: "fa-credit-card" },
  { id: "applepay", label: "Apple Pay", icon: "fa-apple" },
  { id: "paypal", label: "PayPal", icon: "fa-paypal" },
];

export const GIFT_CARD_SUPPORT = [
  {
    id: "received",
    title: "Received a gift card?",
    subtitle: "Check your balance, or view terms.",
    actions: [
      { label: "Check Balance", to: ROUTES.notice },
      { label: "View Terms", to: ROUTES.notice },
    ],
  },
  {
    id: "sent",
    title: "Sent a gift card?",
    subtitle: "Track delivery, or resend.",
    actions: [
      { label: "Track Delivery", to: ROUTES.notice },
      { label: "Resend Gift Card", to: ROUTES.notice },
    ],
  },
];
