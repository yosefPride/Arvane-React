/**
 * Site-wide settings: brand, contact details, social links and navigation.
 * Page content lives in src/data. Values that differ per deployment come from
 * environment variables (see .env.example).
 */
import { ROUTES } from "@/constants/routes";

export const SITE_CONFIG = {
  name: "Arvane",
  tagline: "Craft Coffee. Thoughtful Food.",
  description: "Fresh coffee, warm pastries, and a calm place to think.",
  copyright: "Refined coffee. Timeless experience.",

  contact: {
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
    responseTime: "Within 24 hours",
    operatingHours: "Mon-Sat, 8AM-8PM",
  },

  social: [
    {
      label: "Facebook",
      icon: "fa-facebook",
      url: import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/arvanecafe",
    },
    {
      label: "Instagram",
      icon: "fa-instagram",
      url: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/arvanecafe",
    },
    {
      label: "X (Twitter)",
      icon: "fa-x-twitter",
      url: import.meta.env.VITE_TWITTER_URL || "https://www.twitter.com/arvanecafe",
    },
    {
      label: "TikTok",
      icon: "fa-tiktok",
      url: import.meta.env.VITE_TIKTOK_URL || "https://www.tiktok.com/@arvanecafe",
    },
  ],

  navigation: [
    { label: "Menu", to: ROUTES.menu },
    { label: "Locations", to: ROUTES.locations },
    { label: "Reserve Table", to: ROUTES.reserve },
    { label: "Contact Us", to: ROUTES.contact },
  ],

  footerNavigation: [
    {
      title: "Explore",
      links: [
        { label: "Menu", to: ROUTES.menu },
        { label: "Locations", to: ROUTES.locations },
        { label: "Reserve Table", to: ROUTES.reserve },
        { label: "Events", to: ROUTES.events },
      ],
    },
    {
      title: "Experience",
      links: [
        { label: "Gift Cards", to: ROUTES.giftCards },
        { label: "Membership", to: ROUTES.memberships },
        { label: "Testimonials", to: `${ROUTES.home}#testimonials` },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: ROUTES.about },
        { label: "Careers", to: ROUTES.joinTeam },
        { label: "Contact Us", to: ROUTES.contact },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Privacy", to: ROUTES.termsPrivacy },
        { label: "Refund Policy", to: `${ROUTES.notice}#refund-policy` },
        { label: "Accessibility", to: `${ROUTES.notice}#accessibility` },
        { label: "Site Map", to: `${ROUTES.notice}#site-map` },
      ],
    },
  ],
};
