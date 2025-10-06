const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black via-red-950 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          Have questions or need help? Reach out to us anytime. We're here to make 
          your experience smooth and enjoyable.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-600"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-600"
          ></textarea>
          <button className="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
