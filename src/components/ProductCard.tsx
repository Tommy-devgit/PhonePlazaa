type ProductCardProps = {
  name: string
  price: string
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">{name}</h3>
        <p className="text-gray-600 font-semibold">{price}</p>
        <a
          href="/products"
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Buy Now
        </a>
      </div>
    </div>
  )
}
