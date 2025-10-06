// src/pages/ProductsPage.tsx
import ProductsBanner from "../components/products/ProductsBanner";
import ProductsSection from "../components/products/ProductsSection";
import { mobilePhones, chargers, audio, memory, wearables, gaming, networking, repair, software, misc } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ProductsBanner />
      <h1 className="text-5xl font-bold text-red-600 text-center py-12">Our Products</h1>

      <ProductsSection title="Mobile Phones & Accessories" products={mobilePhones} />
      <ProductsSection title="Chargers & Power Accessories" products={chargers} />
      <ProductsSection title="Audio & Communication Accessories" products={audio} />
      <ProductsSection title="Memory & Storage" products={memory} />
      <ProductsSection title="Wearables & Smart Devices" products={wearables} />
      <ProductsSection title="Mobile Gaming & Tech Accessories" products={gaming} />
      <ProductsSection title="Networking & Connectivity" products={networking} />
      <ProductsSection title="Repair & Maintenance Services / Products" products={repair} />
      <ProductsSection title="Software & Digital Products" products={software} />
      <ProductsSection title="Miscellaneous" products={misc} />
    </div>
  );
}
