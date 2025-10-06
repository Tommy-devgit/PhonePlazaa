import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">PhonePlazaa</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop shop for the latest smartphones, accessories, and repair services. 
            Bringing technology closer to you with quality and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/products" className="hover:text-red-500 transition">Products</a></li>
            <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Location */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Adama, Ethiopia</li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@phoneplazaa.com"
                className="hover:text-red-500 transition"
              >
                support@phoneplazaa.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+251962800080"
                className="hover:text-red-500 transition"
              >
                +251 962800080
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">PhonePlazaa</span>. All rights reserved.
      </div>
    </footer>
  );
}
