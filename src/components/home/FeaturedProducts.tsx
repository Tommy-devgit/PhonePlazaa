// src/components/FeaturedProducts.tsx
import ProductCard from "../products/ProductCard";
import { mobilePhones, chargers, audio, wearables } from "../../data/products";


// Select a few products to feature (can adjust later)
const featuredProducts = [
  ...mobilePhones.slice(0, 2),
  ...chargers.slice(0, 1),
  ...audio.slice(0, 1),
  ...wearables.slice(0, 2),
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 md:px-24 py-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            year={product.year}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
