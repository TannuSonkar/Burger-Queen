import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { totalPrice } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order Placed Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold mb-8 dark:text-white">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow p-8 rounded-xl"
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          placeholder="Delivery Address"
          rows="4"
          required
          className="w-full border p-3 rounded mb-4"
        ></textarea>

        <h2 className="text-2xl font-bold mb-5 dark:text-white">
          Total Amount: ₹{totalPrice}
        </h2>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;