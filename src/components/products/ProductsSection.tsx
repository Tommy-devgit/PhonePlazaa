// src/components/ProductsSection.tsx
import ProductCard, { type ProductCardProps } from "./ProductCard";

type ProductsSectionProps = {
  title: string;
  products: ProductCardProps[];
};

export default function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-red-600 mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
