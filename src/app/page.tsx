export default function Home() {
  const shoes = [
    {
      id: 1,
      name: "Running Shoes",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Casual Sneakers",
      price: "$69",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-4">
        Shoes Collection 👟
      </h2>
      <p className="text-center text-gray-600 mb-10">
        High quality shoes – delivered fast
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-4"
          >
            <div className="h-56 flex items-center justify-center bg-gray-100 rounded">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              {shoe.name}
            </h3>
            <p className="text-blue-600 font-bold mt-1">
              {shoe.price}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}