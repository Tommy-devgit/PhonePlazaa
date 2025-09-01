import { 
  FaMobileAlt, FaTools, FaShoppingCart, FaShippingFast, 
  FaHeadset, FaSyncAlt, FaCheckCircle, FaShieldAlt 
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From the latest smartphones to expert repairs and reliable accessories, 
          PhonePlazaa has everything you need for a connected lifestyle.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaMobileAlt />, title: "Smartphone Sales", desc: "Latest smartphones at unbeatable prices." },
            { icon: <FaTools />, title: "Phone Repairs", desc: "Cracked screens, batteries, and more fixed fast." },
            { icon: <FaShoppingCart />, title: "Accessories", desc: "Cases, chargers, headphones & more." },
            { icon: <FaShippingFast />, title: "Fast Delivery", desc: "Get your devices delivered right to your door." },
            { icon: <FaHeadset />, title: "Customer Support", desc: "24/7 friendly and responsive assistance." },
            { icon: <FaSyncAlt />, title: "Trade-In Program", desc: "Exchange your old phone for the latest models." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
              <div className="flex justify-center mb-6 text-[#c1121f] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PhonePlazaa?</h2>
          <p className="text-gray-600">We’re more than just a store—we’re your tech partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-[#c1121f] text-3xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Trusted Brands</h3>
              <p className="text-gray-600 text-sm">Only genuine devices and accessories from top manufacturers.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaShieldAlt className="text-[#c1121f] text-3xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Warranty Protection</h3>
              <p className="text-gray-600 text-sm">Enjoy peace of mind with our product warranty and repair guarantee.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHeadset className="text-[#c1121f] text-3xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">We’re here to help before, during, and after your purchase.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaShippingFast className="text-[#c1121f] text-3xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Fast & Reliable</h3>
              <p className="text-gray-600 text-sm">Quick deliveries and efficient service every single time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">We keep it simple and stress-free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Browse Products", "Choose Service", "Place Order", "Enjoy"].map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <div className="text-[#c1121f] font-bold text-4xl mb-3">{idx + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c1121f] py-16 px-6 md:px-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience PhonePlazaa?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you’re upgrading to the latest smartphone or need expert repair services, we’ve got you covered.
        </p>
        <button className="bg-white text-[#c1121f] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
