import { useState, useMemo } from "react";
import HeroSection from "../components/shared/HeroSection";
import { LOCATIONS } from "../data/locations";
import styles from "./Locations.module.css";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter locations based on search query
  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) {
      return LOCATIONS;
    }

    const query = searchQuery.toLowerCase();
    return LOCATIONS.filter((location) => {
      // Search in name, address, tags, description, and amenities
      return (
        location.name.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query) ||
        (location.tags && location.tags.some((tag) => tag.toLowerCase().includes(query))) ||
        (location.description && location.description.toLowerCase().includes(query)) ||
        (location.amenities && location.amenities.some((amenity) => amenity.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery]);

  // Update selected location if it's filtered out
  const isSelectedLocationVisible = filteredLocations.some((loc) => loc.id === selectedLocation.id);
  if (!isSelectedLocationVisible && filteredLocations.length > 0) {
    setSelectedLocation(filteredLocations[0]);
  }

  const mapUrl = `https://www.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}&z=15&output=embed`;

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Locations"
        subtitle="Visit us at any of our welcoming cafes"
        backgroundImage="src/assets/images/heros/locations-hero.jpeg"
        overlay={true}
      />

      {/* Locations Showcase */}
      <section className={styles.locationsShowcase}>
        {/* Sidebar */}
        <div className={styles.locationsSidebar}>
          <div className={styles.locationsPreviewPanel}>
            {/* Search Bar */}
            <div className={styles.locationsSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Find location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Locations List */}
            <div className={styles.locationsPreviewList}>
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location) => (
                  <article
                    key={location.id}
                    className={`${styles.locationPreviewItem} ${
                      selectedLocation.id === location.id ? styles.active : ""
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={styles.locationPreviewCopy}>
                      {location.tags && location.tags.length > 0 && (
                        <div className={styles.locationTagRow}>
                          {location.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`${styles.locationTag} ${idx > 0 ? styles.muted : ""}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2>{location.name}</h2>
                      <p className={styles.locationAddress}>{location.address}</p>
                      {location.description && <p>{location.description}</p>}
                    </div>
                    <a href="#locations-map" className={styles.locationLink}>
                      View Map <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>No locations found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Panel */}
        <div className={styles.locationsMapPanel} id="locations-map">
          <div className={styles.mapCard}>
            <div className={styles.mapFrame}>
              <iframe
                title="Arvane locations map"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>

          {/* Selected Location Details */}
          <div className={styles.selectedLocationDetails}>
            <div className={styles.detailItem}>
              <strong>Address</strong>
              <p>{selectedLocation.address}</p>
            </div>

            <div className={styles.detailItem}>
              <strong>Phone</strong>
              <a href={`tel:${selectedLocation.phone}`}>{selectedLocation.phone}</a>
            </div>

            <div className={styles.detailItem}>
              <strong>Hours</strong>
              <p>{selectedLocation.hours}</p>
            </div>

            <div className={styles.detailItem}>
              <strong>Parking</strong>
              <p>{selectedLocation.parking}</p>
            </div>

            {selectedLocation.amenities && selectedLocation.amenities.length > 0 && (
              <div className={styles.detailItem}>
                <strong>Amenities</strong>
                <ul className={styles.amenitiesList}>
                  {selectedLocation.amenities.map((amenity, idx) => (
                    <li key={idx}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedLocation.accessibility && selectedLocation.accessibility.length > 0 && (
              <div className={styles.detailItem}>
                <strong>Accessibility</strong>
                <ul className={styles.accessibilityList}>
                  {selectedLocation.accessibility.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
