import coffeeWorkshop from "@/assets/images/events-page/coffee-workshop.jpg";
import jazz from "@/assets/images/events-page/jazz.jpg";
import roastedBeans from "@/assets/images/home-page/roasted-beans.jpg";

export const EVENTS = [
  {
    id: 1,
    title: "Coffee Tasting Evening",
    category: "Tasting",
    date: "2026-06-22",
    time: "6:00 PM",
    location: "Downtown Location",
    description: "Join us for an evening of specialty coffee tasting and education.",
    image: roastedBeans,
  },
  {
    id: 2,
    title: "Latte Art Workshop",
    category: "Workshop",
    date: "2026-06-29",
    time: "4:00 PM",
    location: "Riverside Commons",
    description: "Learn the art of creating beautiful latte designs from our expert baristas.",
    image: coffeeWorkshop,
  },
  {
    id: 3,
    title: "Live Music Night",
    category: "Live Music",
    date: "2026-07-06",
    time: "7:00 PM",
    location: "Downtown Location",
    description: "Enjoy local musicians while sipping your favorite Arvane beverage.",
    image: jazz,
  },
];
