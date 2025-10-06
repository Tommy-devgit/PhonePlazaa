const Hero = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-red-950 to-black text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Welcome to <span className="text-red-600">PhonePlazaa</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        Discover the latest smartphones and accessories, built to fit your lifestyle.
      </p>
      <button className="px-8 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
