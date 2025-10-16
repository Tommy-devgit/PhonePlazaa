export type Condition = "new" | "slightly used" | "used" | "other";

export type Product = {
  id?: string; // Firestore or local numeric ID
  name: string;
  description: string;
  manufacturedYear?: number;
  priceETB: number;
  condition: Condition;
  category: string;
  features?: string[];
  image: string;
  createdAt?: any;
};
