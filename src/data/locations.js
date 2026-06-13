/**
 * Location data for Arvane locations
 * Each location contains details, amenities, and contact info
 */

export const LOCATIONS = [
  {
    id: "downtown",
    name: "Maplewood Downtown",
    address: "1287 Maplewood Drive, Austin, TX 78701",
    phone: "+1 (617) 555-0123",
    hours: "Mon-Sat 8AM-8PM, Sun 9AM-6PM",
    latitude: 30.2672,
    longitude: -97.7431,
    tags: ["Flagship", "Fast-Paced"],
    amenities: ["WiFi", "Seating", "Outdoor Patio"],
    accessibility: ["Wheelchair Accessible", "Accessible Restroom"],
    parking: "Street Parking",
    description:
      "Best for quick coffee runs, work sessions, and downtown meetings.",
  },
  {
    id: "riverside",
    name: "Riverside Commons",
    address: "42 Brookline Avenue, Austin, TX 78704",
    phone: "+1 (617) 555-0124",
    hours: "Mon-Sat 7AM-9PM, Sun 8AM-7PM",
    latitude: 30.244,
    longitude: -97.747,
    tags: ["Neighborhood", "Quiet Corners"],
    amenities: ["WiFi", "Seating", "Outdoor Deck", "Event Space"],
    accessibility: ["Wheelchair Accessible", "Accessible Restroom"],
    parking: "Parking Lot (Free)",
    description:
      "Best for reading breaks, patio coffee, and a slower afternoon rhythm.",
  },
  {
    id: "north-market",
    name: "North Market House",
    address: "761 Cedar Lane, Austin, TX 78757",
    phone: "+1 (617) 555-0125",
    hours: "Mon-Fri 7AM-6PM, Sat 9AM-5PM, Closed Sun",
    latitude: 30.351,
    longitude: -97.733,
    tags: ["Brunch Spot", "Weekend Favorite"],
    amenities: ["WiFi", "Compact Seating", "Counter Service"],
    accessibility: ["Wheelchair Accessible", "Accessible Restroom"],
    parking: "Nearby Public Parking",
    description:
      "Best for group brunches, longer stays, and family-friendly seating.",
  },
  {
    id: "east-grove",
    name: "East Grove",
    address: "204 Willow Street, Austin, TX 78702",
    phone: "+1 (617) 555-0126",
    hours: "Mon-Sat 7AM-8PM, Sun 8AM-6PM",
    latitude: 30.263,
    longitude: -97.713,
    tags: ["Creative", "Spacious"],
    amenities: ["WiFi", "Large Tables", "Outdoor Seating"],
    accessibility: ["Wheelchair Accessible", "Accessible Restroom"],
    parking: "Street Parking",
    description:
      "Best for creative work, casual meetups, and guests who want a little more room.",
  },
  {
    id: "west-hill",
    name: "West Hill Roastery",
    address: "318 Juniper Ridge Road, Austin, TX 78746",
    phone: "+1 (617) 555-0127",
    hours: "Mon-Fri 7AM-7PM, Sat-Sun 8AM-6PM",
    latitude: 30.281,
    longitude: -97.807,
    tags: ["Roastery", "Slow Coffee"],
    amenities: ["WiFi", "Retail Beans", "Tasting Bar"],
    accessibility: ["Wheelchair Accessible"],
    parking: "Parking Lot (Free)",
    description:
      "Best for tasting seasonal beans, slower pour-overs, and bringing coffee home.",
  },
  {
    id: "lakeview",
    name: "Lakeview Terrace",
    address: "905 Lake Austin Boulevard, Austin, TX 78703",
    phone: "+1 (617) 555-0128",
    hours: "Daily 8AM-8PM",
    latitude: 30.2815,
    longitude: -97.768,
    tags: ["Scenic", "Patio"],
    amenities: ["WiFi", "Water View", "Outdoor Patio"],
    accessibility: ["Wheelchair Accessible", "Accessible Restroom"],
    parking: "Nearby Public Parking",
    description:
      "Best for relaxed afternoons, outdoor seating, and coffee with a view.",
  },
];

export default LOCATIONS;
