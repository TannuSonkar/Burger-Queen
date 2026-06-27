import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="relative h-[80vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">

          <h1 className="text-6xl font-bold mb-5">
            Delicious Food Delivered Fast
          </h1>

          <p className="text-xl mb-8">
            Fresh meals, great taste & quick delivery.
          </p>

          <Link
            to="/menu"
            className="bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-xl">
            <h3 className="text-xl font-bold dark:text-white">
              Fast Delivery
            </h3>
            <p className="mt-3 text-gray-500">
              Delivery within 30 minutes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-xl">
            <h3 className="text-xl font-bold dark:text-white">
              Fresh Food
            </h3>
            <p className="mt-3 text-gray-500">
              Prepared with quality ingredients.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-xl">
            <h3 className="text-xl font-bold dark:text-white">
              Best Taste
            </h3>
            <p className="mt-3 text-gray-500">
              Loved by thousands of customers.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;