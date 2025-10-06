type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  year?: number;
  image: string;
};


const ProductCard = ({ name, description, price, year, image }: ProductCardProps) => {
  return (
    <div className="bg-black border border-red-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-red-600/40 transition transform">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold text-red-500 mb-2">{name}</h3>
        {description && <p className="text-gray-400 text-sm mb-3">{description}</p>}
        {year && <p className="text-gray-500 text-xs mb-2">Released: {year}</p>}
        <p className="text-lg font-semibold text-red-400 mb-4">${price}</p>
        <button className="w-full py-2 bg-red-600 rounded-md font-semibold hover:bg-red-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
