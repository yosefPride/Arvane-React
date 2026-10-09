import { menuImage } from "./images";

const HOME_BREWING_ITEMS = [
    {
      id: "homebrewing-1",
      name: "Yirgacheffe",
      description: "Bright, floral, citrus; ideal for pour-over",
      price: 17.00,
      image: "yirgacheffe.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-2",
      name: "Colombia Supremo",
      description: "Smooth, balanced, caramel notes",
      price: 15.00,
      image: "colombia.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-3",
      name: "Brazil Santos",
      description: "Chocolatey, nutty, low acidity",
      price: 14.00,
      image: "brazil.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-4",
      name: "Guatemala Antigua",
      description: "Cocoa, spice, medium body",
      price: 16.00,
      image: "guatemala.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-5",
      name: "Roaster's Choice",
      description: "Rotating, limited, unique profiles",
      price: 18.00,
      image: "roaster-choice.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-6",
      name: "Sumatra Mandheling",
      description: "Bold, earthy, full-bodied",
      price: 16.00,
      image: "sumatra.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-7",
      name: "Espresso Blend",
      description: "Rich, balanced, crema-focused",
      price: 15.00,
      image: "espresso-blend.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-8",
      name: "Baratza Encore Grinder",
      description: "Consistent grind for better extraction",
      price: 150.00,
      image: "coffee-grinder.jpeg",
      category: "homebrewing",
    },
  ]

export const HOME_BREWING = HOME_BREWING_ITEMS.map((item) => ({
  ...item,
  image: menuImage(`home-brewing/${item.image}`),
}));
