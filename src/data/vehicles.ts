import { Vehicle } from "@/types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Suzuki Wagon R",
    category: "Car",
    image: "/vehicles/wagonr.jpg",
    capacity: 4,
    available: true,
    features: ["Air Conditioning", "Fuel Efficient", "Bluetooth Audio"],
  },
  {
    id: "v2",
    name: "Toyota Axio",
    category: "Car",
    image: "/vehicles/axio.jpg",
    capacity: 5,
    available: true,
    features: ["Premium Interior", "Smooth Ride", "Climate Control"],
  },
  {
    id: "v3",
    name: "Toyota Prius",
    category: "Car",
    image: "/vehicles/prius.jpg",
    capacity: 5,
    available: true,
    features: ["Hybrid Tech", "Eco Friendly", "Large Boot"],
  },
  {
    id: "v4",
    name: "Toyota Hiace KDH",
    category: "Van",
    image: "/vehicles/kdh.jpg",
    capacity: 10,
    available: true,
    features: ["Spacious", "Dual AC", "Group Travel"],
  },
  {
    id: "v5",
    name: "Mitsubishi Rosa",
    category: "Mini Bus",
    image: "/vehicles/rosa.jpg",
    capacity: 22,
    available: true,
    features: ["Luxury Seating", "Full AC", "Guide Available"],
  },
];

