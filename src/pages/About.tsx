import React from "react";
import { FaUsers, FaCheckCircle, FaRocket, FaMobileAlt } from "react-icons/fa";
import image1 from "../assets/Team/KaleabGishu.jpeg"
import image2 from "../assets/Team/Dagim Bedo.jpeg"
import image3 from "../assets/Team/TomasMelesse.jpg"
import storeimage from "../assets/Back/StoreImage.jpg"
import backImage from "../assets/Back/BackAbout2.jpg"

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="py-20 h-[100vh] items-center justify-center flex">
        <section 
          className="px-6 py-20 md:py-32 text-center items-center justify-center w-3/4  bg-gray-50 rounded-2xl"
          style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            About <span className="text-black">PhonePlazaa</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Your trusted hub for smartphones, accessories, and repair services.
          </p>
        </section>
      </div>

      {/* Mission Section */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At PhonePlazaa, our mission is to make the latest technology accessible to everyone.  
          We provide quality devices, reliable repairs, and customer-first service to keep you connected in the digital era.
        </p>
      </section>

      {/* Story Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              PhonePlazaa started with a simple idea: to bring the latest and greatest smartphones 
              to our community while offering unmatched customer care.  
              Over the years, we’ve grown into a trusted brand for both products and services.
            </p>
            <p className="text-gray-600">
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
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl font-bold text-black mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-primary">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">5k+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">1k+</h3>
            <p className="text-gray-600">Devices Repaired</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">100%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <img src={image2} alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
            <h3 className="text-lg font-semibold text-black">Dagim Bedo</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
          <div className="text-center">
            <img src={image1} alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
            <h3 className="text-lg font-semibold text-black">Kaleab Gishu</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img src={image3} alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
            <h3 className="text-lg font-semibold text-black">Tomas Melesse</h3>
            <p className="text-gray-600">Lead Technician</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 md:py-28 text-center bg-primary text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Mobile?</h2>
        <p className="text-lg mb-8">
          Explore our wide range of products and services today.  
          PhonePlazaa is here to keep you connected.
        </p>
        <a
          href="/contact"
          className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:brightness-90 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
