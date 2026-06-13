import styles from "./LocationCard.module.css";

/**
 * Location Card Component
 * Displays a location with details, hours, and amenities
 */
export default function LocationCard({ location, onSelect }) {
  return (
    <div className={`card ${styles.locationCard}`}>
      <h3>{location.name}</h3>
      <p className={styles.address}>{location.address}</p>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <strong>Phone:</strong>
          <a href={`tel:${location.phone}`}>{location.phone}</a>
        </div>

        <div className={styles.infoItem}>
          <strong>Hours:</strong>
          <p>{location.hours}</p>
        </div>

        {location.amenities && location.amenities.length > 0 && (
          <div className={styles.amenities}>
            <strong>Amenities:</strong>
            <ul>
              {location.amenities.map((amenity, idx) => (
                <li key={idx}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}

        {location.accessibility && location.accessibility.length > 0 && (
          <div className={styles.accessibility}>
            <strong>Accessibility:</strong>
            <ul>
              {location.accessibility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {location.parking && (
          <div className={styles.infoItem}>
            <strong>Parking:</strong>
            <p>{location.parking}</p>
          </div>
        )}

        {location.description && (
          <p className={styles.description}>{location.description}</p>
        )}
      </div>

      {onSelect && (
        <button className="btn btn-primary" onClick={() => onSelect(location)}>
          View on Map
        </button>
      )}
    </div>
  );
}
