import { useMemo, useRef, useState } from "react";
import { Hero } from "@/components/ui";
import { LOCATIONS } from "@/data/locations";
import { cn } from "@/lib/cn";
import heroImage from "@/assets/images/heros/locations-hero.jpeg";
import styles from "./Locations.module.css";

const SEARCHABLE_FIELDS = ["name", "address", "description"];
const SEARCHABLE_LISTS = ["tags", "amenities"];

function matchesQuery(location, query) {
  return (
    SEARCHABLE_FIELDS.some((field) => location[field]?.toLowerCase().includes(query)) ||
    SEARCHABLE_LISTS.some((list) =>
      location[list]?.some((value) => value.toLowerCase().includes(query))
    )
  );
}

function getMapUrl({ latitude, longitude }) {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
}

export default function Locations() {
  const [selectedId, setSelectedId] = useState(LOCATIONS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const mapRef = useRef(null);

  const filteredLocations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return query ? LOCATIONS.filter((location) => matchesQuery(location, query)) : LOCATIONS;
  }, [searchQuery]);

  // If the selection is filtered out, fall back to the first visible result
  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedId) ??
    filteredLocations[0] ??
    LOCATIONS.find((location) => location.id === selectedId);

  const showOnMap = (id) => {
    setSelectedId(id);
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Hero
        title="Our Locations"
        subtitle="Visit us at any of our welcoming cafes"
        image={heroImage}
      />

      <section className={styles.locationsShowcase}>
        <div className={styles.locationsSidebar}>
          <div className={styles.locationsPreviewPanel}>
            <div className={styles.locationsSearch}>
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Find location"
                aria-label="Search locations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.locationsPreviewList}>
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location) => (
                  <LocationPreview
                    key={location.id}
                    location={location}
                    isActive={location.id === selectedLocation.id}
                    onSelect={() => setSelectedId(location.id)}
                    onShowMap={() => showOnMap(location.id)}
                  />
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>No locations found matching &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.locationsMapPanel} ref={mapRef}>
          <div className={styles.mapCard}>
            <div className={styles.mapFrame}>
              <iframe
                title={`Map of ${selectedLocation.name}`}
                src={getMapUrl(selectedLocation)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <LocationDetails location={selectedLocation} />
        </div>
      </section>
    </>
  );
}

function LocationPreview({ location, isActive, onSelect, onShowMap }) {
  return (
    <article
      className={cn(styles.locationPreviewItem, isActive && styles.active)}
      onClick={onSelect}
    >
      <div className={styles.locationPreviewCopy}>
        {location.tags?.length > 0 && (
          <div className={styles.locationTagRow}>
            {location.tags.map((tag, index) => (
              <span key={tag} className={cn(styles.locationTag, index > 0 && styles.muted)}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2>{location.name}</h2>
        <p className={styles.locationAddress}>{location.address}</p>
        {location.description && <p>{location.description}</p>}
      </div>
      <button
        type="button"
        className={styles.locationLink}
        onClick={(event) => {
          event.stopPropagation();
          onShowMap();
        }}
      >
        View Map <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
    </article>
  );
}

function LocationDetails({ location }) {
  return (
    <dl className={styles.selectedLocationDetails}>
      <div className={styles.detailItem}>
        <dt>Address</dt>
        <dd>{location.address}</dd>
      </div>

      <div className={styles.detailItem}>
        <dt>Phone</dt>
        <dd>
          <a href={`tel:${location.phone}`}>{location.phone}</a>
        </dd>
      </div>

      <div className={styles.detailItem}>
        <dt>Hours</dt>
        <dd>{location.hours}</dd>
      </div>

      <div className={styles.detailItem}>
        <dt>Parking</dt>
        <dd>{location.parking}</dd>
      </div>

      {location.amenities?.length > 0 && (
        <div className={styles.detailItem}>
          <dt>Amenities</dt>
          <dd>
            <ul className={styles.detailList}>
              {location.amenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          </dd>
        </div>
      )}

      {location.accessibility?.length > 0 && (
        <div className={styles.detailItem}>
          <dt>Accessibility</dt>
          <dd>
            <ul className={styles.detailList}>
              {location.accessibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}
