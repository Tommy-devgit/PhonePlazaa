// src/components/ProductsBanner.tsx
export default function ProductsBanner() {
  return (
    <section className="bg-gradient-to-r min-h-[100vh] from-black via-red-900 to-black text-white py-24 px-6 md:px-24 text-center rounded-b-3xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Explore Our Premium Products
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
        From the latest smartphones and accessories to cutting-edge wearables, 
        find everything you need in one place. Quality, style, and innovation at your fingertips.
      </p>
      <a
        href="#featured"
        className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
      >
        Browse Featured
      </a>
    </section>
  );
}
