const TRENDING = [
    {
      id: "trending-1",
      name: "Espresso",
      description: "Strong and bold single shot coffee.",
      price: 2.5,
      image: "espresso.jpeg",
      category: "trending",
    },
    {
      id: "trending-2",
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: 4.5,
      image: "cappuccino.jpeg",
      category: "trending",
    },
    {
      id: "trending-3",
      name: "Chocolate Milkshake",
      description: "Thick and creamy with real chocolate.",
      price: 7.5,
      image: "chcolate-milkshake.jpeg",
      category: "trending",
    },
    {
      id: "trending-4",
      name: "Vanilla Milkshake",
      description: "Classic vanilla flavor, smooth and sweet.",
      price: 7.5,
      image: "vannila-milkshake.jpeg",
      category: "trending",
    },
]

export const buildTrendingItems = () => TRENDING.map((item) => ({
      ...item,
      id: `trending-${item.id}`,
      image: `src/assets/images/drinks/${item.image}`,
      category: "trending",
}));