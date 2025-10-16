import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProductsBanner from "../components/products/ProductsBanner";
import ProductsSection from "../components/products/ProductsSection";
import {
  mobilePhones,
  chargers,
  audio,
  memory,
  wearables,
  gaming,
  networking,
  repair,
  software,
  misc,
} from "../data/products";
import type { Product } from "../types/products";

export default function ProductsPage() {
  const [firestoreProducts, setFirestoreProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCol = collection(db, "products");
        const snapshot = await getDocs(productsCol);
        const list: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        setFirestoreProducts(list);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Combine static + Firestore products
  const allProducts: Product[] = [
    ...mobilePhones.map((p) => ({ ...p, category: "Mobile Phones & Accessories" })),
    ...chargers.map((p) => ({ ...p, category: "Chargers & Power Accessories" })),
    ...audio.map((p) => ({ ...p, category: "Audio & Communication Accessories" })),
    ...memory.map((p) => ({ ...p, category: "Memory & Storage" })),
    ...wearables.map((p) => ({ ...p, category: "Wearables & Smart Devices" })),
    ...gaming.map((p) => ({ ...p, category: "Mobile Gaming & Tech Accessories" })),
    ...networking.map((p) => ({ ...p, category: "Networking & Connectivity" })),
    ...repair.map((p) => ({ ...p, category: "Repair & Maintenance Services / Products" })),
    ...software.map((p) => ({ ...p, category: "Software & Digital Products" })),
    ...misc.map((p) => ({ ...p, category: "Miscellaneous" })),
    ...firestoreProducts,
  ];

  const categories = Array.from(new Set(allProducts.map((p) => p.category)));

  if (loading)
    return <div className="text-center py-24 text-white">Loading products...</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <ProductsBanner />
      <h1 className="text-5xl font-bold text-red-600 text-center py-12">
        Our Products
      </h1>

      {categories.map((category) => {
        const productsInCategory = allProducts.filter(
          (p) => p.category === category
        );
        return (
          <ProductsSection
            key={category}
            title={category}
            products={productsInCategory}
          />
        );
      })}
    </div>
  );
}
