// src/components/ProductCard.tsx
export type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  year?: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  description,
  price,
  year,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-black text-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-red-600 mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">{price}</span>
          {year && <span className="text-gray-400 text-sm">{year}</span>}
        </div>
      </div>
    </div>
  );
}
