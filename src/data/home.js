import { menuImage } from "./menu";
import roastedBeans from "@/assets/images/home-page/roasted-beans.jpg";
import chocolate from "@/assets/images/home-page/chocolate.jpg";
import barista from "@/assets/images/home-page/barista.jpg";
import relaxing from "@/assets/images/home-page/relaxing.jpg";

export const FEATURED_PRODUCTS = [
  {
    id: "double-espresso",
    name: "Double Espresso",
    description:
      "Bold, concentrated, and full-bodied for guests who love their coffee intense and clean.",
    image: menuImage("drinks/double-espresso.jpeg"),
    price: 2.5,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description:
      "Slow-steeped for hours to create a smooth, bold coffee with a crisp refreshing finish.",
    image: menuImage("drinks/cold-brew.jpeg"),
    price: 4.5,
  },
  {
    id: "honey-cinnamon-latte",
    name: "Honey Cinnamon Latte",
    description: "Latte sweetened with honey and cinnamon spice.",
    image: menuImage("drinks/honey-cinnamon-latte.jpeg"),
    price: 6.25,
  },
  {
    id: "chocolate-croissant",
    name: "Chocolate Croissant",
    description:
      "Buttery layers, crisp edges, and rich melted chocolate make this a daily favorite.",
    image: menuImage("food/chocolate-croissant.jpeg"),
    price: 4.25,
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    description: "Soft muffin packed with sweet blueberries.",
    image: menuImage("food/blueberry-muffin.jpeg"),
    price: 4.5,
  },
];

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
