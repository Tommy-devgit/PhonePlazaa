// src/components/DealOfTheDay.tsx
import { Link } from "react-router-dom";

export default function DealOfTheDay() {
  return (
    <section className="px-6 md:px-24 py-24 bg-red-900 text-white rounded-xl mx-6 md:mx-24 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Deal of the Day</h2>
        <p className="mb-6">Get 20% off on all accessories! Limited time only.</p>
        <Link
          to="/products"
          className="bg-black px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
