// src/components/NewsletterCTA.tsx
export default function NewsletterCTA() {
  return (
    <section className="px-6 md:px-24 py-24 bg-red-900 text-white text-center rounded-xl mx-6 md:mx-24 mt-12">
      <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-6">Subscribe to get the latest deals and updates.</p>
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-black flex-1"
        />
        <button
          type="submit"
          className="bg-black px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
