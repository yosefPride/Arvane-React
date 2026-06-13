import { useState } from "react";
import HeroSection from "../components/shared/HeroSection";
import MenuCard from "../components/shared/MenuCard";
import { MENU_DATA, MENU_CATEGORIES } from "../data/menu";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("trending");

  const currentMenuItems = MENU_DATA[activeCategory] || [];
  const groupedMenuItems = currentMenuItems.reduce((groups, item) => {
    const groupName = item.subcategoryLabel || "";

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(item);
    return groups;
  }, {});
  const shouldGroupItems = Object.keys(groupedMenuItems).some(Boolean);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Menu"
        subtitle="Discover our carefully curated selection of coffee, food, and drinks"
        backgroundVideo="src/assets/images/heros/menu-hero.mp4"
        overlay={true}
      />

      {/* Menu Categories and Items */}
      <section className="section content-container">
        {/* Category Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`btn ${
                activeCategory === category ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {shouldGroupItems ? (
          Object.entries(groupedMenuItems).map(([groupName, items]) => (
            <div key={groupName} style={{ marginBottom: "3rem" }}>
              <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                {groupName}
              </h2>
              <div className="grid grid-cols-5">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-5">
            {currentMenuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
