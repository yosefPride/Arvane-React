const FOOD_CATEGORY_LABELS = {
    bakery: "Bakery",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner"
};

export const FOOD_BY_CATEGORY = {
    bakery: [
        {
        id: "bakery-1",
        name: "Croissant",
        description: "Buttery, flaky French pastry baked fresh daily.",
        price: 4.0,
        image: "croissant2.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-2",
        name: "Chocolate Croissant",
        description: "Croissant filled with rich melted chocolate.",
        price: 4.25,
        image: "chocolate-croissant.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-3",
        name: "Blueberry Muffin",
        description: "Soft muffin packed with sweet blueberries.",
        price: 4.5,
        image: "blueberry-muffin.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-4",
        name: "Banana Bread",
        description: "Moist loaf cake made with ripe bananas.",
        price: 4.5,
        image: "banana-bread.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-5",
        name: "Cinnamon Roll",
        description: "Sweet roll with cinnamon sugar and glaze.",
        price: 4.5,
        image: "cinnamon-roll.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-6",
        name: "Cheesecake Slice",
        description: "Creamy baked cheesecake on a buttery crust.",
        price: 4.25,
        image: "cheesecake.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-7",
        name: "Chocolate Chip Cookie",
        description: "Soft baked cookie with dark chocolate chips.",
        price: 2.75,
        image: "chocolate-chip-cookie.jpeg",
        category: "bakery",
        },
        {
        id: "bakery-8",
        name: "Lemon Loaf",
        description: "Light cake with bright lemon flavor and glaze.",
        price: 4.50,
        image: "lemon-loaf.jpeg",
        category: "bakery",
        },
    ],

    breakfast: [
        {
        id: "breakfast-1",
        name: "Avocado Toast",
        description: "Toasted artisan bread topped with smashed avocado, olive oil, and sea salt.",
        price: 10.5,
        image: "avocado-toast.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-2",
        name: "Bacon, Egg & Cheese Sandwich",
        description: "Crispy bacon, eggs, and cheese served on toasted bread.",
        price: 13.75,
        image: "bacon-egg-cheese-sandwich.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-3",
        name: "Breakfast Croissant",
        description: "Flaky croissant filled with eggs and melted cheese.",
        price: 11.5,
        image: "breakfast-croissant.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-4",
        name: "Egg & Cheese Sandwich",
        description: "Scrambled eggs and melted cheese on a toasted bun.",
        price: 11.25,
        image: "egg-cheese-sandwich.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-5",
        name: "Breakfast Burrito",
        description: "Warm tortilla filled with eggs, cheese, and breakfast potatoes.",
        price: 15.0,
        image: "breakfast-burrito.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-6",
        name: "Pancake Stack",
        description: "Fluffy pancakes served with maple syrup and butter.",
        price: 14.25,
        image: "pancake-stack.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-7",
        name: "Greek Yogurt Parfait",
        description: "Creamy yogurt layered with granola and fresh fruit.",
        price: 13.75,
        image: "greek-yogurt.jpeg",
        category: "breakfast",
        },
        {
        id: "breakfast-8",
        name: "Oatmeal Bowl",
        description: "Warm oats topped with honey and seasonal fruit.",
        price: 11.0,
        image: "oatmeal.jpeg",
        category: "breakfast",
        },
    ],

    lunch: [
        {
        id: "lunch-1",
        name: "Grilled Chicken Sandwich",
        description: "Grilled chicken breast with lettuce, tomato, and garlic aioli on toasted bread.",
        price: 14.50,
        image: "grilled-chicken.jpeg",
        category: "lunch",
        },
        {
        id: "lunch-2",
        name: "Classic Cheeseburger",
        description: "Grilled beef patty with cheddar cheese, lettuce, tomato, and house sauce.",
        price: 17.50,
        image: "cheeseburger.jpeg",
        category: "lunch",
        },
        {
        id: "lunch-3",
        name: "Patty Melt Sandwich",
        description: "Juicy beef patty with melted cheese on grilled rye bread.",
        price: 16.50,
        image: "patty-melt.jpeg",
        category: "lunch",
        },
        {
        id: "lunch-4",
        name: "Club Sandwich",  
        description: "Triple-layer sandwich with turkey, bacon, lettuce, tomato, and mayo.",
        price: 13.00,
        image: "club-sandwich.jpeg",
        category: "lunch",
        },
    ],

    dinner: [
        {
        id: "dinner-1",
        name: "Sirloin Steak",
        description: "Tender grilled sirloin steak served with sweet potatoes and seasonal vegetables.",
        price: 26.50,
        image: "sirloin-steak.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-2",
        name: "Ribeye Steak Plate",
        description: "Juicy grilled ribeye steak served with roasted potatoes and vegetables.",
        price: 30.00,
        image: "ribeye-steak.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-3",
        name: "Grilled Salmon",  
        description: "Fresh salmon fillet grilled and served with lemon and mixed greens.",  
        price: 20.00,  
        image: "grilled-salmon.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-4",
        name: "Steakhouse Salad",
        description: "Mixed greens topped with sliced steak, cherry tomatoes, and balsamic dressing.",
        price: 18.00,
        image: "steakhouse-salad.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-5",
        name: "Chicken Caesar Salad",
        description: "Romaine lettuce, grilled chicken, parmesan, croutons, and Caesar dressing.",
        price: 13.75,
        image: "chicken-caesar-salad.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-6",
        name: "Roasted Vegetable Bowl",
        description: "Seasonal roasted vegetables served over rice with herb dressing.",
        price: 11.00,
        image: "roasted-vegetables-bowl.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-7",
        name: "Chicken Alfredo",
        description: "Classic Alfredo pasta with grilled chicken and parmesan.",
        price: 19.50,
        image: "chicken-alfredo.jpeg",
        category: "dinner",
        },
        {
        id: "dinner-8",
        name: "Pasta Alfredo",
        description: "Creamy Alfredo pasta topped with parmesan cheese.",  
        price: 16.25,
        image: "pasta-alfredo.jpeg",
        category: "dinner",
        },
    ]
}

const buildItemsForCategory = ([subcategory, items]) =>
    items.map((item) => ({
      ...item,
      id: `food-${item.id}`,
      image: `src/assets/images/food/${item.image}`,
      category: subcategory,
      subcategory,
    }));

export const buildFoodItems = (category) => {
  if (category) {
    return FOOD_BY_CATEGORY[category]
      ? buildItemsForCategory([category, FOOD_BY_CATEGORY[category]])
      : [];
  }

  return Object.entries(FOOD_BY_CATEGORY).flatMap(buildItemsForCategory);
};
