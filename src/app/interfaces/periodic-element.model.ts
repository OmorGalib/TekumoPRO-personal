export interface PeriodicElement {
    position: number; // Unique identifier or sequence number
    name: string;     // Name of the element
    weight: number;   // Atomic weight or another numerical value
    symbol: string;   // Element symbol or short identifier
    category?: string; // Optional category or group for classification
    discoveredBy?: string; // Optional field for additional metadata
    dateAdded?: string; // Optional field to track when the element was added
  }
  