import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PhonePlazaa</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for the latest smartphones, accessories, and repair services. 
            Bringing technology closer to you with quality and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/products" className="hover:text-primary">Products</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Location */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Addis Ababa, Ethiopia</li>
            <li>Email: <a href="mailto:support@phoneplazaa.com" className="hover:text-primary">support@phoneplazaa.com</a></li>
            <li>Phone: <a href="tel:+251900000000" className="hover:text-primary">+251 900 000 000</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-primary"><FaFacebook /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
            <a href="#" className="hover:text-primary"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PhonePlazaa. All rights reserved.
      </div>
    </footer>
  );
}
