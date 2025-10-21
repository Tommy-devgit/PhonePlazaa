import { motion } from "framer-motion";
import image1 from "../assets/team/kaleabGishu.jpeg";
import image2 from "../assets/team/dagimBedo.jpeg";
import image3 from "../assets/team/tomasMelesse.jpg";
import storeimage from "../assets/back/storeImage.jpg";
import backImage from "../assets/back/backAbout.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 h-[100vh] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
        style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="px-6 py-20 md:py-32 text-center w-3/4 bg-black bg-opacity-70 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#c1121f] mb-4">
            About <span className="text-white">PhonePlazaa</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Your trusted hub for smartphones, accessories, and repair services.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#c1121f] mb-6">Our Mission</h2>
        <p className="text-gray-300">
          At PhonePlazaa, our mission is to make the latest technology accessible to everyone.  
          We provide quality devices, reliable repairs, and customer-first service to keep you connected.
        </p>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="px-6 py-16 md:py-24 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#c1121f] mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              PhonePlazaa started with a simple idea: to bring the latest and greatest smartphones 
              to our community while offering unmatched customer care.
            </p>
            <p className="text-gray-300">
              From flagship smartphones to everyday essentials, we’ve got everything you need 
              in one place. Our commitment to quality and trust has helped us build long-lasting 
              relationships with thousands of happy customers.
            </p>
          </div>
          <img
            src={storeimage}
            alt="PhonePlazaa Store"
            className="rounded-xl shadow-lg h-[75%]"
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="px-6 py-20 md:py-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <h2 className="text-3xl font-bold text-[#c1121f] mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "5k+", label: "Happy Customers" },
            { value: "1k+", label: "Devices Repaired" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-[#c1121f]">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="px-6 py-20 md:py-28 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        <h2 className="text-3xl font-bold text-[#c1121f] text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[image2, image1, image3].map((img, idx) => (
            <div key={idx} className="text-center">
              <img src={img} alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
              <h3 className="text-lg font-semibold text-white">
                {idx === 0 ? "Dagim Bedo" : idx === 1 ? "Kaleab Gishu" : "Tomas Melesse"}
              </h3>
              <p className="text-gray-300">
                {idx === 0 ? "Head of Operations" : idx === 1 ? "Founder & CEO" : "Lead Technician"}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="px-6 py-20 md:py-28 text-center bg-[#c1121f]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Mobile?</h2>
        <p className="text-gray-200 mb-8">
          Explore our wide range of products and services today.  
          PhonePlazaa is here to keep you connected.
        </p>
        <a
          href="/contact"
          className="bg-black text-[#c1121f] px-8 py-3 rounded-lg font-semibold hover:brightness-90 transition"
        >
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
