export default function Home() {
  return (
    <div className="space-y-24">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-secondary text-light px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Welcome to PhonePlazaa
        </h1>
        <p className="text-accent text-lg md:text-xl max-w-2xl mb-8">
          Explore the latest smartphones, accessories, and repair services—all in one place.
        </p>
        <div className="flex gap-4">
          <a
            href="/products"
            className="bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:brightness-125 transition"
          >
            Shop Now
          </a>
          <a
            href="/services"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-light transition"
          >
            Services
          </a>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-4xl font-bold text-light text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-secondary/20 p-6 rounded-xl text-center hover:bg-secondary/30 transition">
            <h3 className="text-primary font-bold text-xl mb-2">Latest Phones</h3>
            <p className="text-accent">
              We carry the newest smartphones from top brands at unbeatable prices.
            </p>
          </div>
          <div className="bg-secondary/20 p-6 rounded-xl text-center hover:bg-secondary/30 transition">
            <h3 className="text-primary font-bold text-xl mb-2">Expert Repairs</h3>
            <p className="text-accent">
              Fast and reliable repair services for any device, anytime.
            </p>
          </div>
          <div className="bg-secondary/20 p-6 rounded-xl text-center hover:bg-secondary/30 transition">
            <h3 className="text-primary font-bold text-xl mb-2">Accessories</h3>
            <p className="text-accent">
              High-quality phone cases, chargers, and more to complete your setup.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OFFERS / PRICING SECTION ===== */}
      <section className="bg-secondary/10 px-6 md:px-24 py-24">
        <h2 className="text-4xl font-bold text-light text-center mb-12">Our Offers</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-secondary p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
            <h3 className="text-primary font-bold text-2xl mb-4">Starter Pack</h3>
            <p className="text-accent mb-6">Phone + Case + Charger</p>
            <span className="text-primary font-bold text-3xl mb-4 block">$499</span>
            <a
              href="/products"
              className="bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:brightness-125 transition"
            >
              Buy Now
            </a>
          </div>
          <div className="bg-secondary p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
            <h3 className="text-primary font-bold text-2xl mb-4">Pro Pack</h3>
            <p className="text-accent mb-6">Phone + Accessories Bundle</p>
            <span className="text-primary font-bold text-3xl mb-4 block">$699</span>
            <a
              href="/products"
              className="bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:brightness-125 transition"
            >
              Buy Now
            </a>
          </div>
          <div className="bg-secondary p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
            <h3 className="text-primary font-bold text-2xl mb-4">Repair Plan</h3>
            <p className="text-accent mb-6">Unlimited repairs for 1 year</p>
            <span className="text-primary font-bold text-3xl mb-4 block">$199</span>
            <a
              href="/services"
              className="bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:brightness-125 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-light mb-6">Ready to Upgrade?</h2>
        <p className="text-accent mb-8">Browse our products or get in touch for more information.</p>
        <div className="flex justify-center gap-4">
          <a
            href="/products"
            className="bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:brightness-125 transition"
          >
            Shop Now
          </a>
          <a
            href="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-light transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
