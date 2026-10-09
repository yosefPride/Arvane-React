import { menuImage } from "./images";

const COCKTAIL_ITEMS = [
  {
    id: "cocktails-1",
    name: "Negroni",
    description: "Bittersweet Negroni with gin, Campari, and vermouth.",
    price: 13.0,
    image: "negroni.jpeg",
    category: "cocktails",
  },
  {
    id: "cocktails-2",
    name: "Margarita",
    description: "Bright lime, tequila, and salt for classic refreshment.",
    price: 14.5,
    image: "margarita.jpeg",
    category: "cocktails",
  },
  {
    id: "cocktails-3",
    name: "Aperol Spritz",
    description: "Effervescent Aperol, citrus, prosecco, and soda.",
    price: 11.5,
    image: "aperol-spritz.jpeg",
    category: "cocktails",
  },
  {
    id: "cocktails-4",
    name: "Espresso Martini",
    description: "Vodka, coffee liqueur, and fresh espresso for a smooth kick.",
    price: 18.0,
    image: "espresso-martini.jpeg",
    category: "cocktails",
  },
  {
    id: "cocktails-5",
    name: "Irish Coffee",
    description: "Hot coffee with Irish whiskey and whipped cream.",
    price: 12.5,
    image: "irish-coffe.jpeg",
    category: "cocktails",
  },
  {
    id: "cocktails-6",
    name: "Chocolate Whisky Drink",
    description: "Whisky mixed with chocolate liqueur and cream.",
    price: 13.0,
    image: "chocolate-whisky.jpeg",
    category: "cocktails",
  },
];

export const COCKTAILS = COCKTAIL_ITEMS.map((item) => ({
  ...item,
  image: menuImage(`drinks/${item.image}`),
}));
