export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        About ShoeStore 👟
      </h1>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        ShoeStore is a modern online shoe shop built for comfort, style,
        and trust. We provide premium shoes that fit your lifestyle.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Quality</h3>
          <p className="text-gray-600">
            High-quality shoes made with durable materials.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Comfort</h3>
          <p className="text-gray-600">
            Designed for daily wear and long-lasting comfort.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Quick and reliable delivery at your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}