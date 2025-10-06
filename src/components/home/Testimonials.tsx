// src/components/Testimonials.tsx
const reviews = [
  { name: "Alice", comment: "Great service and fast delivery!" },
  { name: "Bob", comment: "High-quality products, love my new phone!" },
  { name: "Charlie", comment: "Amazing deals and excellent support." },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-24 py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
      <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="bg-[#220000] p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="mb-4">"{r.comment}"</p>
            <h4 className="font-semibold text-red-600">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
