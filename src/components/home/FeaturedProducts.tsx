// src/components/home/FeaturedProducts.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { mobilePhones, chargers, audio, wearables } from "../../data/products";

const featuredProducts = [
  ...mobilePhones.slice(0, 2),
  ...chargers.slice(0, 1),
  ...audio.slice(0, 1),
  ...wearables.slice(0, 2),
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 md:px-24 py-16 bg-black text-white relative overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#c1121f] mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Products
      </motion.h2>

      {/* Products Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              manufacturedYear={product.manufacturedYear ?? 2024}
              priceETB={product.priceETB ?? product.priceETB ?? 0}
              condition={product.condition ?? "new"}
              category={product.category ?? "General"}
              features={product.features ?? []}
              image={product.image}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/products"
          className="bg-[#c1121f] hover:bg-[#a10e1a] transition-all text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
        >
          View All Products →
        </Link>
      </div>

      {/* Background Accent Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c1121f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#c1121f]/10 rounded-full blur-3xl" />
    </section>
  );
}
