/**
 * Centralized site configuration
 * All business data, contact info, and site settings are defined here
 * Makes it easy to update across the entire app
 * 
 * Sensitive values like phone numbers and URLs are loaded from environment variables
 * See .env.example for configuration instructions
 */

export const SITE_CONFIG = {
  siteName: "Arvane",
  tagline: "Craft Coffee. Thoughtful Food.",
  description: "Fresh coffee, warm pastries, and a calm place to think.",

  // Contact Information
  contact: {
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "+972-50-7331829",
    responseTime: "Within 24 hours",
    operatingHours: "Mon-Sat, 8AM-8PM",
    timezone: "Asia/Jerusalem",
  },

  // Social Media Links
  social: {
    facebook: import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/arvanecafe",
    instagram: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/arvanecafe",
    tiktok: import.meta.env.VITE_TIKTOK_URL || "https://www.tiktok.com/@arvanecafe",
    twitter: import.meta.env.VITE_TWITTER_URL || "https://www.twitter.com/arvanecafe",
  },

  // Navigation Items
  navigation: [
    { label: "Menu", path: "/menu" },
    { label: "Locations", path: "/locations" },
    { label: "Reserve Table", path: "/reserve" },
    { label: "Contact Us", path: "/contact" },
  ],

  // Footer Navigation
  footerLinks: {
    company: [
      { label: "About", path: "/about" },
      { label: "Events", path: "/events" },
      { label: "Careers", path: "/join-team" },
      { label: "Contact", path: "/contact" },
    ],
    products: [
      { label: "Menu", path: "/menu" },
      { label: "Gift Cards", path: "/gift-cards" },
      { label: "Memberships", path: "/memberships" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/terms-privacy" },
      { label: "Terms of Service", path: "/terms-privacy" },
      { label: "Notices", path: "/notice" },
    ],
  },

  // Brand Philosophy/Values
  values: [
    {
      id: "craftsmanship",
      title: "Craftsmanship",
      description: "Beans roasted weekly to guarantee peak freshness and flavor.",
      image: "roasted-beans.jpg",
    },
    {
      id: "quality",
      title: "Zero Artificial Flavors",
      description: "High-quality milk, real chocolate, and natural vanilla.",
      image: "chocolate.jpg",
    },
    {
      id: "expertise",
      title: "Expert Baristas",
      description: "Skilled professionals trained to craft the perfect cup.",
      image: "barista.jpg",
    },
    {
      id: "atmosphere",
      title: "Relaxing Atmosphere",
      description: "Designed to help you focus, relax, or meet with friends.",
      image: "relaxing.jpg",
    },
  ],

  // Featured Products (Homepage)
  featuredProducts: [
    {
      id: "double-espresso",
      name: "Double Espresso",
      description:
        "Bold, concentrated, and full-bodied for guests who love their coffee intense and clean.",
      image: "src/assets/images/drinks/double-espresso.jpeg",
      price: 2.5,
      category: "drinks",
    },
    {
      id: "cold-brew",
      name: "Cold Brew",
      description:
        "Slow-steeped for hours to create a smooth, bold coffee with a crisp refreshing finish.",
      image: "src/assets/images/drinks/cold-brew.jpeg",
      price: 4.5,
      category: "drinks",
    },
    {
      id: "honey-cinnamon-latte",
      name: "Honey Cinnamon Latte",
      description: "Latte sweetened with honey and cinnamon spice.",
      price: 6.25,
      image: "src/assets/images/drinks/honey-cinnamon-latte.jpeg",
      category: "drinks",
    },
    {
      id: "chocolate-croissant",
      name: "Chocolate Croissant",
      description:
        "Buttery layers, crisp edges, and rich melted chocolate make this a daily favorite.",
      image: "src/assets/images/food/chocolate-croissant.jpeg",
      price: 4.25,
      category: "bakery",
    },
    {
      id: "bluberry-muffin",
      name: "Blueberry Muffin",
      description: "Soft muffin packed with sweet blueberries.",
      price: 4.5,
      image: "src/assets/images/food/blueberry-muffin.jpeg",
      category: "bakery",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      text: "Great coffee, quick service, and a calm atmosphere. It's a reliable place to relax or get work done without distractions.",
      author: "Michael Carter",
    },
    {
      id: 2,
      text: "What stands out most is the consistency across locations. Whether it's a busy morning or a slower afternoon, the service remains smooth and professional. The food tastes fresh, the coffee is excellent, and the overall experience always feels reliable.",
      author: "Emily Johnson",
    },
    {
      id: 3,
      text: "I've visited multiple locations, and the experience is always consistent. The coffee is rich, the food is fresh, and the staff are attentive without being intrusive.",
      author: "Sarah Mitchell",
    },
    {
      id: 4,
      text: "The café strikes a perfect balance between quality and comfort. The design feels modern yet welcoming, and the menu is clearly well thought out. It's become a regular spot for both meetings and quiet time.",
      author: "Daniel Brooks",
    },
    {
      id: 5,
      text: "I've started coming here regularly because it's dependable. The menu has enough variety without being overwhelming, and everything I've tried has been well prepared. It's a solid choice for any time of day.",
      author: "Olivia Parker",
    },
    {
      id: 6,
      text: "I appreciate how consistent everything is. The service is quick without feeling rushed, and the overall atmosphere makes it easy to focus or just take a break.",
      author: "Ryan Thompson",
    },
    {
      id: 7,
      text: "Really impressed by the quality here. The coffee is smooth, the food tastes fresh, and the space is comfortable enough to stay longer than planned.",
      author: "Jason Miller",
    },
  ],
};

export default SITE_CONFIG;
