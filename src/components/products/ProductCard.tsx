// src/components/ProductCard.tsx
import { motion } from "framer-motion";

export type ProductCardProps = {
  id?: string;
  name: string;
  description: string;
  manufacturedYear?: number;
  priceETB: number;
  condition: "new" | "slightly used" | "used" | "other";
  category: string;
  features?: string[];
  image: string;
};

export default function ProductCard({
  name,
  description,
  manufacturedYear,
  priceETB,
  condition,
  category,
  features,
  image,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-black text-white rounded-xl shadow-md hover:shadow-red-600/40 transition overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-red-500 mb-1">{name}</h3>
        <p className="text-gray-300 text-sm mb-2">{description}</p>

        <div className="text-sm text-gray-400 mb-3">
          <span className="capitalize">{condition}</span>
          {manufacturedYear && <> • {manufacturedYear}</>}
        </div>

        {features && features.length > 0 && (
          <ul className="text-xs text-gray-400 mb-3 list-disc list-inside">
            {features.slice(0, 3).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold text-white">ETB {priceETB}</span>
          <span className="text-gray-400">{category}</span>
        </div>
      </div>
    </motion.div>
  );
}
