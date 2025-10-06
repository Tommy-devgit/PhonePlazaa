// src/components/Categories.tsx
import { FaMobileAlt, FaHeadphones, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { name: "Phones", icon: FaMobileAlt, href: "/products" },
  { name: "Accessories", icon: FaHeadphones, href: "/products" },
  { name: "Deals", icon: FaGift, href: "/products" },
];

export default function Categories() {
  return (
    <section className="px-6 md:px-24 py-24 bg-[#110000] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.href}
            className="bg-[#220000] hover:bg-red-700 transition flex flex-col items-center justify-center p-8 rounded-2xl"
          >
            <cat.icon className="text-red-600 text-4xl mb-4" />
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
