import { getMenuItem } from "./menu";
import roastedBeans from "@/assets/images/home-page/roasted-beans.jpg";
import chocolate from "@/assets/images/home-page/chocolate.jpg";
import barista from "@/assets/images/home-page/barista.jpg";
import relaxing from "@/assets/images/home-page/relaxing.jpg";

// Featured items come from the menu (one source of truth for name, price and
// photo); `blurb` replaces the short menu description on the home page.
const FEATURED = [
  {
    slug: "double-espresso",
    blurb: "Bold, concentrated, and full-bodied for guests who love their coffee intense and clean.",
  },
  {
    slug: "cold-brew",
    blurb: "Slow-steeped for hours to create a smooth, bold coffee with a crisp refreshing finish.",
  },
  { slug: "honey-cinnamon-latte" },
  {
    slug: "chocolate-croissant",
    blurb: "Buttery layers, crisp edges, and rich melted chocolate make this a daily favorite.",
  },
  { slug: "blueberry-muffin" },
];

export const FEATURED_PRODUCTS = FEATURED.map(({ slug, blurb }) => {
  const item = getMenuItem(slug);
  return blurb ? { ...item, description: blurb } : item;
});

export const BRAND_VALUES = [
  {
    id: "craftsmanship",
    title: "Craftsmanship",
    description: "Beans roasted weekly to guarantee peak freshness and flavor.",
    image: roastedBeans,
  },
  {
    id: "quality",
    title: "Zero Artificial Flavors",
    description: "High-quality milk, real chocolate, and natural vanilla.",
    image: chocolate,
  },
  {
    id: "expertise",
    title: "Expert Baristas",
    description: "Skilled professionals trained to craft the perfect cup.",
    image: barista,
  },
  {
    id: "atmosphere",
    title: "Relaxing Atmosphere",
    description: "Designed to help you focus, relax, or meet with friends.",
    image: relaxing,
  },
];

export const MEMBERSHIP_BENEFITS = [
  {
    title: "Earn On Every Visit",
    description: "Collect points on drinks, pastries, and cafe favorites.",
  },
  {
    title: "Birthday Treats",
    description: "Celebrate with a complimentary reward during your birthday month.",
  },
  {
    title: "Early Access",
    description: "Be first in line for seasonal drinks and exclusive offers.",
  },
];

export const MEMBERSHIP_CARD_PERKS = [
  "Points toward free drinks",
  "Monthly member-only offers",
  "Faster checkout experience",
];
