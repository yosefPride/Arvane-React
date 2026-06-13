/**
 * Consolidated menu data for all categories
 * Organized by category with proper image path handling
 */

const getImagePath = (filename) => `src/assets/images/${filename}`;

const DRINK_CATEGORY_LABELS = {
  espressoClassics: "Espresso Classics",
  specialtyLattes: "Specialty Lattes",
  coldDrinks: "Cold Drinks",
  teaAndMatcha: "Tea & Matcha",
  hotChocolateAndMilkshakes: "Hot Chocolate & Milkshakes",
};

const DRINKS_BY_CATEGORY = {
  espressoClassics: [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and bold single shot coffee.",
      price: 2.5,
      image: "espresso.jpeg",
      altText: "espresso",
    },
    {
      id: 2,
      name: "Double Espresso",
      description: "Two shots of espresso for a stronger flavor.",
      price: 3.5,
      image: "double-espresso.jpeg",
      altText: "double espresso",
    },
    {
      id: 3,
      name: "Americano",
      description: "Espresso diluted with hot water for a smooth coffee.",
      price: 4.0,
      image: "americano.jpeg",
      altText: "americano",
    },
    {
      id: 4,
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam.",
      price: 5.0,
      image: "latte.jpeg",
      altText: "latte",
    },
    {
      id: 5,
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: 4.5,
      image: "cappuccino.jpeg",
      altText: "cappuccino",
    },
    {
      id: 6,
      name: "Flat White",
      description: "Velvety microfoam milk with a double shot of espresso.",
      price: 5.5,
      image: "flat-white.jpeg",
      altText: "flat white",
    },
    {
      id: 7,
      name: "Cortado",
      description: "Equal parts espresso and steamed milk.",
      price: 4.75,
      image: "cortado.jpeg",
      altText: "cortado",
    },
    {
      id: 8,
      name: "Macchiato",
      description: 'Espresso "stained" with a small amount of milk foam.',
      price: 4.0,
      image: "macchiato.jpeg",
      altText: "macchiato",
    },
  ],
  specialtyLattes: [
    {
      id: 9,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: 6.0,
      image: "mocha.jpeg",
      altText: "mocha",
    },
    {
      id: 10,
      name: "White Chocolate Mocha",
      description: "Espresso with white chocolate and steamed milk.",
      price: 6.25,
      image: "white-chocolate-mocha.jpeg",
      altText: "white chocolate mocha",
    },
    {
      id: 11,
      name: "Honey Cinnamon Latte",
      description: "Latte sweetened with honey and cinnamon spice.",
      price: 6.25,
      image: "honey-cinnamon-latte.jpeg",
      altText: "honey cinnamon latte",
    },
    {
      id: 12,
      name: "Pistachio Latte",
      description: "Nutty pistachio flavor blended with espresso and milk.",
      price: 7.0,
      image: "pistachio-latte.jpeg",
      altText: "pistachio latte",
    },
    {
      id: 13,
      name: "Dark Chocolate Mocha",
      description: "Rich dark chocolate blended with espresso.",
      price: 6.5,
      image: "dark-chocolate-mocha.jpeg",
      altText: "dark chocolate mocha",
    },
    {
      id: 14,
      name: "Hazelnut Mocha",
      description: "Chocolate mocha infused with roasted hazelnut flavor.",
      price: 6.75,
      image: "hazelnut-mocha.jpeg",
      altText: "hazelnut mocha",
    },
    {
      id: 15,
      name: "Vanilla Bean Latte",
      description: "Smooth latte flavored with real vanilla.",
      price: 6.25,
      image: "vanilla-bean-latte.jpeg",
      altText: "vanilla bean latte",
    },
    {
      id: 16,
      name: "Caramel Sea Salt Latte",
      description: "Sweet caramel balanced with a hint of sea salt.",
      price: 7.0,
      image: "caramel-sea-salt-latte.jpeg",
      altText: "Caramel Sea Salt Latte",
    },
  ],
  coldDrinks: [
    {
      id: 17,
      name: "Cold Brew",
      description: "Coffee steeped cold for 12-24 hours, smooth and bold.",
      price: 5.5,
      image: "cold-brew.jpeg",
      altText: "Cold Brew",
    },
    {
      id: 18,
      name: "Nitro Cold Brew",
      description: "Cold brew infused with nitrogen for a creamy texture.",
      price: 6.5,
      image: "nitro-cold-brew.jpeg",
      altText: "Nitro Cold Brew",
    },
    {
      id: 19,
      name: "Iced Coffee",
      description: "Chilled brewed coffee served over ice.",
      price: 4.25,
      image: "iced-coffee.jpeg",
      altText: "Iced Coffee",
    },
    {
      id: 20,
      name: "Iced Caramel Latte",
      description: "Iced latte sweetened with caramel syrup.",
      price: 6.0,
      image: "iced-caramel-latte.jpeg",
      altText: "Iced Caramel Latte",
    },
    {
      id: 21,
      name: "Iced Matcha Latte",
      description: "Cold matcha green tea with milk and light sweetness.",
      price: 6.0,
      image: "iced-matcha-latte.jpeg",
      altText: "Iced Matcha Latte",
    },
    {
      id: 22,
      name: "Iced Vanilla Latte",
      description: "Cold espresso drink with vanilla and milk.",
      price: 6.0,
      image: "iced-vanilla-latte.jpeg",
      altText: "iced vanilla latte",
    },
  ],
  teaAndMatcha: [
    {
      id: 23,
      name: "Black Tea",
      description: "Classic full-bodied hot tea.",
      price: 3.25,
      image: "black-tea.jpeg",
      altText: "black tea",
    },
    {
      id: 24,
      name: "Green Tea",
      description: "Light and refreshing traditional green tea.",
      price: 3.25,
      image: "green-tea.jpeg",
      altText: "Green Tea",
    },
    {
      id: 25,
      name: "Chai Latte",
      description: "Spiced Indian tea blended with steamed milk.",
      price: 5.25,
      image: "chai-latte.jpeg",
      altText: "Chai Latte",
    },
    {
      id: 26,
      name: "Matcha Latte",
      description: "Japanese matcha powder whisked with steamed milk.",
      price: 6.5,
      image: "matcha-latte.jpeg",
      altText: "Matcha Latte",
    },
  ],
  hotChocolateAndMilkshakes: [
    {
      id: 27,
      name: "Hot Chocolate",
      description: "Creamy milk with rich melted chocolate.",
      price: 6.0,
      image: "hot-chocolate.jpeg",
      altText: "Hot Chocolate",
    },
    {
      id: 28,
      name: "Belgian Hot Chocolate",
      description: "Premium chocolate drink made with Belgian cocoa.",
      price: 7.25,
      image: "hot-belgian-chocolate.jpeg",
      altText: "Belgian Hot Chocolate",
    },
    {
      id: 29,
      name: "Chocolate Milkshake",
      description: "Thick and creamy with real chocolate.",
      price: 7.5,
      image: "chcolate-milkshake.jpeg",
      altText: "chocolate milkshake",
    },
    {
      id: 30,
      name: "Vanilla Milkshake",
      description: "Classic vanilla flavor, smooth and sweet.",
      price: 7.5,
      image: "vannila-milkshake.jpeg",
      altText: "vanilla milkshake",
    },
  ],
};

const buildDrinkItems = () =>
  Object.entries(DRINKS_BY_CATEGORY).flatMap(([subcategory, items]) =>
    items.map((item) => ({
      ...item,
      id: `drinks-${item.id}`,
      image: `src/assets/images/drinks/${item.image}`,
      category: "drinks",
      subcategory,
      subcategoryLabel: DRINK_CATEGORY_LABELS[subcategory],
    }))
  );

export const MENU_CATEGORIES = [
  "trending",
  "drinks",
  "bakery",
  "breakfast",
  "lunch",
  "dinner",
  "cocktails",
  "homebrewing",
];

export const MENU_DATA = {
  trending: [
    {
      id: "trending-1",
      name: "Espresso",
      description: "Strong and bold single shot coffee.",
      price: 2.5,
      image: "src/assets/images/drinks/espresso.jpeg",
      category: "trending",
    },
    {
      id: "trending-2",
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: 4.5,
      image: "src/assets/images/drinks/cappuccino.jpeg",
      category: "trending",
    },
    {
      id: "trending-3",
      name: "Chocolate Milkshake",
      description: "Thick and creamy with real chocolate.",
      price: 7.5,
      image: "src/assets/images/drinks/chcolate-milkshake.jpeg",
      category: "trending",
    },
    {
      id: "trending-4",
      name: "Vanilla Milkshake",
      description: "Classic vanilla flavor, smooth and sweet.",
      price: 7.5,
      image: "src/assets/images/drinks/vannila-milkshake.jpeg",
      category: "trending",
    },
  ],

  drinks: buildDrinkItems(),

  bakery: [
    {
      id: "bakery-1",
      name: "Croissant",
      description: "Buttery, flaky French pastry baked fresh daily.",
      price: 4.0,
      image: "src/assets/images/food/croissant2.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-2",
      name: "Chocolate Croissant",
      description: "Croissant filled with rich melted chocolate.",
      price: 4.25,
      image: "src/assets/images/food/chocolate-croissant.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-3",
      name: "Blueberry Muffin",
      description: "Soft muffin packed with sweet blueberries.",
      price: 4.5,
      image: "src/assets/images/food/blueberry-muffin.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-4",
      name: "Banana Bread",
      description: "Moist loaf cake made with ripe bananas.",
      price: 4.5,
      image: "src/assets/images/food/banana-bread.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-5",
      name: "Cinnamon Roll",
      description: "Sweet roll with cinnamon sugar and glaze.",
      price: 4.5,
      image: "src/assets/images/food/cinnamon-roll.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-6",
      name: "Cheesecake Slice",
      description: "Creamy baked cheesecake on a buttery crust.",
      price: 4.25,
      image: "src/assets/images/food/cheesecake.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-7",
      name: "Chocolate Chip Cookie",
      description: "Soft baked cookie with dark chocolate chips.",
      price: 2.75,
      image: "src/assets/images/food/chocolate-chip-cookie.jpeg",
      category: "bakery",
    },
    {
      id: "bakery-8",
      name: "Lemon Loaf",
      description: "Light cake with bright lemon flavor and glaze.",
      price: 4.50,
      image: "src/assets/images/food/lemon-loaf.jpeg",
      category: "bakery",
    },
  ],

  breakfast: [
    {
      id: "breakfast-1",
      name: "Avocado Toast",
      description: "Toasted artisan bread topped with smashed avocado, olive oil, and sea salt.",
      price: 10.5,
      image: "src/assets/images/food/avocado-toast.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-2",
      name: "Bacon, Egg & Cheese Sandwich",
      description: "Crispy bacon, eggs, and cheese served on toasted bread.",
      price: 13.75,
      image: "src/assets/images/food/bacon-egg-cheese-sandwich.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-3",
      name: "Breakfast Croissant",
      description: "Flaky croissant filled with eggs and melted cheese.",
      price: 11.5,
      image: "src/assets/images/food/breakfast-croissant.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-4",
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and melted cheese on a toasted bun.",
      price: 11.25,
      image: "src/assets/images/food/egg-cheese-sandwich.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-5",
      name: "Breakfast Burrito",
      description: "Warm tortilla filled with eggs, cheese, and breakfast potatoes.",
      price: 15.0,
      image: "src/assets/images/food/breakfast-burrito.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-6",
      name: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup and butter.",
      price: 14.25,
      image: "src/assets/images/food/pancake-stack.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-7",
      name: "Greek Yogurt Parfait",
      description: "Creamy yogurt layered with granola and fresh fruit.",
      price: 13.75,
      image: "src/assets/images/food/greek-yogurt.jpeg",
      category: "breakfast",
    },
    {
      id: "breakfast-8",
      name: "Oatmeal Bowl",
      description: "Warm oats topped with honey and seasonal fruit.",
      price: 11.0,
      image: "src/assets/images/food/oatmeal.jpeg",
      category: "breakfast",
    },
  ],

  lunch: [
    {
      id: "lunch-1",
      name: "Grilled Chicken Sandwich",
      description: "Grilled chicken breast with lettuce, tomato, and garlic aioli on toasted bread.",
      price: 14.50,
      image: "src/assets/images/food/grilled-chicken.jpeg",
      category: "lunch",
    },
    {
      id: "lunch-2",
      name: "Classic Cheeseburger",
      description: "Grilled beef patty with cheddar cheese, lettuce, tomato, and house sauce.",
      price: 17.50,
      image: "src/assets/images/food/cheeseburger.jpeg",
      category: "lunch",
    },
    {
      id: "lunch-3",
      name: "Patty Melt Sandwich",
      description: "Juicy beef patty with melted cheese on grilled rye bread.",
      price: 16.50,
      image: "src/assets/images/food/patty-melt.jpeg",
      category: "lunch",
    },
    {
      id: "lunch-4",
      name: "Club Sandwich",  
      description: "Triple-layer sandwich with turkey, bacon, lettuce, tomato, and mayo.",
      price: 13.00,
      image: "src/assets/images/food/club-sandwich.jpeg",
      category: "lunch",
    },
  ],

  dinner: [
    {
      id: "dinner-1",
      name: "Sirloin Steak",
      description: "Tender grilled sirloin steak served with sweet potatoes and seasonal vegetables.",
      price: 26.50,
      image: "src/assets/images/food/sirloin-steak.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-2",
      name: "Ribeye Steak Plate",
      description: "Juicy grilled ribeye steak served with roasted potatoes and vegetables.",
      price: 30.00,
      image: "src/assets/images/food/ribeye-steak.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-3",
      name: "Grilled Salmon",  
      description: "Fresh salmon fillet grilled and served with lemon and mixed greens.",  
      price: 20.00,  
      image: "src/assets/images/food/grilled-salmon.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-4",
      name: "Steakhouse Salad",
      description: "Mixed greens topped with sliced steak, cherry tomatoes, and balsamic dressing.",
      price: 18.00,
      image: "src/assets/images/food/steakhouse-salad.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-5",
      name: "Chicken Caesar Salad",
      description: "Romaine lettuce, grilled chicken, parmesan, croutons, and Caesar dressing.",
      price: 13.75,
      image: "src/assets/images/food/chicken-caesar-salad.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-6",
      name: "Roasted Vegetable Bowl",
      description: "Seasonal roasted vegetables served over rice with herb dressing.",
      price: 11.00,
      image: "src/assets/images/food/roasted-vegetables-bowl.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-7",
      name: "Chicken Alfredo",
      description: "Classic Alfredo pasta with grilled chicken and parmesan.",
      price: 19.50,
      image: "src/assets/images/food/chicken-alfredo.jpeg",
      category: "dinner",
    },
    {
      id: "dinner-8",
      name: "Pasta Alfredo",
      description: "Creamy Alfredo pasta topped with parmesan cheese.",  
      price: 16.25,
      image: "src/assets/images/food/pasta-alfredo.jpeg",
      category: "dinner",
    },
  ],

  cocktails: [
    {
      id: "cocktails-1",
      name: "Negroni",
      description: "Bittersweet Negroni: gin, Campari, vermouth harmony.",
      price: 13.00,
      image: "src/assets/images/drinks/negroni.jpeg",
      category: "cocktails",
    },
    {
      id: "cocktails-2",
      name: "Margarita",
      description: "Bright lime, tequila, salt—classic margarita refreshment.",
      price: 14.50,
      image: "src/assets/images/drinks/margarita.jpeg",
      category: "cocktails",
    },
    {
      id: "cocktails-3",
      name: "Aperol Spritz",
      description: "Effervescent Aperol spritz, bittersweet citrus, bright summer refreshment.",
      price: 11.50,
      image: "src/assets/images/drinks/aperol-spritz.jpeg",
      category: "cocktails",
    },
    {
      id: "cocktails-4",
      name: "Espresso Martini",
      description: "Vodka, Kahlúa, and fresh espresso for a smooth kick.",  
      price: 18.00,  
      image: "src/assets/images/drinks/espresso-martini.jpeg",
      category: "cocktails",
    },
    {
      id: "cocktails-5",
      name: "Irish Coffee",
      description: "Hot coffee with Irish whiskey and whipped cream.",
      price: 12.5,
      image: getImagePath("irish-coffee.jpeg"),
      category: "cocktails",
    },
    {
      id: "cocktails-7",
      name: "Chocolate Whiskey Drink",
      description: "Whiskey mixed with chocolate liqueur and cream.",
      price: 13.0,
      image: getImagePath("chocolate-whiskey.jpeg"),
      category: "cocktails",
    },
  ],

  homebrewing: [
    {
      id: "homebrewing-1",
      name: "Yirgacheffe",
      description: "Bright, floral, citrus; ideal for pour-over",
      price: 17.00,
      image: "src/assets/images/home-brewing/yirgacheffe.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-2",
      name: "Colombia Supremo",
      description: "Smooth, balanced, caramel notes",
      price: 15.00,
      image: "src/assets/images/home-brewing/colombia.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-3",
      name: "Brazil Santos",
      description: "Chocolatey, nutty, low acidity",
      price: 14.00,
      image: "src/assets/images/home-brewing/brazil.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-4",
      name: "Guatemala Antigua",
      description: "Cocoa, spice, medium body",
      price: 16.00,
      image: "src/assets/images/home-brewing/guatemala.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-5",
      name: "Roaster's Choice",
      description: "Rotating, limited, unique profiles",
      price: 18.00,
      image: "src/assets/images/home-brewing/roaster-choice.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-6",
      name: "Sumatra Mandheling",
      description: "Bold, earthy, full-bodied",
      price: 16.00,
      image: "src/assets/images/home-brewing/sumatra.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-7",
      name: "Espresso Blend",
      description: "Rich, balanced, crema-focused",
      price: 15.00,
      image: "src/assets/images/home-brewing/espresso-blend.jpeg",
      category: "homebrewing",
    },
    {
      id: "homebrewing-8",
      name: "Baratza Encore Grinder",
      description: "Consistent grind for better extraction",
      price: 150.00,
      image: "src/assets/images/home-brewing/coffee-grinder.jpeg",
      category: "homebrewing",
    },
  ],
};

/**
 * Get menu items by category
 * @param {string} category - Category name
 * @returns {Array} Menu items for the category
 */
export const getMenuByCategory = (category) => {
  return MENU_DATA[category] || [];
};

/**
 * Get all menu items
 * @returns {Array} All menu items across all categories
 */
export const getAllMenuItems = () => {
  return Object.values(MENU_DATA).flat();
};

/**
 * Search menu items
 * @param {string} query - Search query
 * @returns {Array} Matching menu items
 */
export const searchMenu = (query) => {
  const lowerQuery = query.toLowerCase();
  return getAllMenuItems().filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery)
  );
};

export default MENU_DATA;
