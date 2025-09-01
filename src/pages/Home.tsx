import ProductCard from "../components/ProductCard"
import iphoneimg from "../assets/images/iphone15.jpeg"
import galaxyimg from "../assets/images/galaxys23.jpeg"
import pixelimg from "../assets/images/pixel8.jpeg"

const products = [
  { name: "iPhone 15 Pro", price: "$999", image: iphoneimg},
  { name: "Samsung Galaxy S23", price: "$899", image: galaxyimg },
  { name: "Google Pixel 8", price: "$799", image: pixelimg },
]

export default function Home() {
  return (
    <div className="space-y-24 bg-gray-50 text-gray-900">

      {/* ===== HERO ===== */}
      <section className="px-6 py-24 md:py-32 text-center min-h-[100vh]">
        <div>
            <h1 className="text-5xl md:text-9xl font-bold text-primary mb-6">
            Welcome to <span className="text-black">PhonePlazaa</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover the latest smartphones, accessories, and repair services—all in one place.
            </p>
            <div className="flex justify-center gap-4">
            <a
                href="/products"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
            >
                Shop Now
            </a>
            <a
                href="/services"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
            >
                Services
            </a>
            </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition">
            <h3 className="text-primary font-bold text-xl mb-2">Latest Phones</h3>
            <p className="text-gray-600">
              Get the newest smartphones from top brands at great prices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition">
            <h3 className="text-primary font-bold text-xl mb-2">Expert Repairs</h3>
            <p className="text-gray-600">
              Fast and reliable repair services for any device.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition">
            <h3 className="text-primary font-bold text-xl mb-2">Accessories</h3>
            <p className="text-gray-600">
              High-quality phone cases, chargers, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Upgrade?</h2>
        <p className="text-gray-600 mb-8">Browse our products or contact us for more info.</p>
        <div className="flex justify-center gap-4">
          <a
            href="/products"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
          >
            Shop Now
          </a>
          <a
            href="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
