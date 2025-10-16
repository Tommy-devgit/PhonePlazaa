import { FaMobileAlt, FaTools, FaShoppingCart, FaShippingFast, FaHeadset, FaSyncAlt, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Services() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <motion.section
        className="py-20 px-6 md:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#c1121f] mb-4">Our Services</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From the latest smartphones to expert repairs and reliable accessories, 
          PhonePlazaa has everything you need for a connected lifestyle.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-16 px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaMobileAlt />, title: "Smartphone Sales", desc: "Latest smartphones at unbeatable prices." },
            { icon: <FaTools />, title: "Phone Repairs", desc: "Cracked screens, batteries, and more fixed fast." },
            { icon: <FaShoppingCart />, title: "Accessories", desc: "Cases, chargers, headphones & more." },
            { icon: <FaShippingFast />, title: "Fast Delivery", desc: "Get your devices delivered right to your door." },
            { icon: <FaHeadset />, title: "Customer Support", desc: "24/7 friendly and responsive assistance." },
            { icon: <FaSyncAlt />, title: "Trade-In Program", desc: "Exchange your old phone for the latest models." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
              custom={idx}
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6 text-[#c1121f] text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="bg-gray-900 py-20 px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#c1121f] mb-4">Why Choose PhonePlazaa?</h2>
          <p className="text-gray-300">We’re more than just a store—we’re your tech partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { icon: <FaCheckCircle />, title: "Trusted Brands", desc: "Only genuine devices and accessories from top manufacturers." },
            { icon: <FaShieldAlt />, title: "Warranty Protection", desc: "Enjoy peace of mind with our product warranty and repair guarantee." },
            { icon: <FaHeadset />, title: "Dedicated Support", desc: "We’re here to help before, during, and after your purchase." },
            { icon: <FaShippingFast />, title: "Fast & Reliable", desc: "Quick deliveries and efficient service every single time." },
          ].map((item, idx) => (
            <motion.div key={idx} className="flex items-start gap-4" custom={idx} variants={fadeInUp}>
              <div className="text-[#c1121f] text-3xl">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section
        className="py-20 px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#c1121f] mb-4">How It Works</h2>
          <p className="text-gray-300">We keep it simple and stress-free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Browse Products", "Choose Service", "Place Order", "Enjoy"].map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              custom={idx}
              variants={fadeInUp}
            >
              <div className="text-[#c1121f] font-bold text-4xl mb-3">{idx + 1}</div>
              <h3 className="text-lg font-semibold text-white">{step}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-[#c1121f] py-16 px-6 md:px-16 text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Experience PhonePlazaa?</h2>
        <p className="mb-6 max-w-xl mx-auto">Whether upgrading to the latest smartphone or needing expert repairs, we’ve got you covered.</p>
        <button className="bg-black text-[#c1121f] font-semibold px-6 py-3 rounded-lg shadow hover:brightness-110 transition">
          Get Started
        </button>
      </motion.section>
    </div>
  );
}
