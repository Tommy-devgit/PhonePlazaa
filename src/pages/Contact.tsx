import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Questions about our products, services, or support? We’re here to help.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-black mb-1">Our Location</h2>
            <p className="text-gray-600">Bole Road, Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaPhone className="text-primary text-2xl mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-black mb-1">Call Us</h2>
            <p className="text-gray-600">+251 900 000 000</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaEnvelope className="text-primary text-2xl mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-black mb-1">Email</h2>
            <p className="text-gray-600">support@phoneplazaa.com</p>
          </div>
        </div>
      </div>

      {/* Support Hours */}
      <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-black mb-2">Support Hours</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li>Sat: 10:00 AM - 4:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-black mb-2">Follow Us</h2>
          <div className="flex gap-4 text-primary text-2xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Send us a Message
        </h2>
        <form className="grid gap-6 bg-white shadow-lg rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-black text-center mb-6">Find Us</h2>
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.123456789!2d38.758!3d9.010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c2a8f6f6a1%3A0x7bb123456789abcd!2sBole%20Road%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1693456123456"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
        </div>


      {/* Newsletter Signup */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-black mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest deals, promotions, and updates from PhonePlazaa.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-auto focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-black text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-4">
              “PhonePlazaa fixed my phone in record time! Excellent service and friendly staff.”
            </p>
            <h3 className="font-semibold text-black">Selam A.</h3>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-4">
              “I always get the latest phones here. Reliable, fast, and trustworthy.”
            </p>
            <h3 className="font-semibold text-black">Daniel M.</h3>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-4">
              “Great customer service and helpful recommendations. Highly recommend!”
            </p>
            <h3 className="font-semibold text-black">Fatima K.</h3>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-primary text-white text-center rounded-xl mx-6 md:mx-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Visit Our Store Today!
        </h2>
        <p className="text-lg mb-6">Experience the best phones, accessories, and repairs in one place.</p>
        <a
          href="/contact"
          className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:brightness-90 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
