export type VehicleCategory = "Car" | "Van" | "Mini Bus";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  capacity: number;
  pricePerKm: number;
  pricePerDay: number;
  available: boolean;
  features: string[];
}
