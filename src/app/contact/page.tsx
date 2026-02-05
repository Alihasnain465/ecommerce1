export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact Us 📞
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Have questions or want to place an order?  
        Fill the form below and we’ll get back to you.
      </p>

      <form className="bg-white shadow rounded-xl p-8 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border rounded px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}