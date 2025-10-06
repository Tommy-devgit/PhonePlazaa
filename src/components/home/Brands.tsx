// src/components/Brands.tsx
import apple from "../../../public/images/iphone15.jpeg";
import samsung from "../../../public/images/galaxyS23.jpeg";
import google from "../../../public/images/pixel8.jpeg";

const brands = [apple, samsung, google];

export default function Brands() {
  return (
    <section className="px-6 md:px-24 py-24 bg-[#110000] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Trusted Brands</h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {brands.map((b, idx) => (
          <img key={idx} src={b} alt={`Brand ${idx}`} className="h-16 object-contain" />
        ))}
      </div>
    </section>
  );
}
