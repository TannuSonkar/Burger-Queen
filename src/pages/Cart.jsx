import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold mb-8 dark:text-white">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-gray-500 mb-5">
            Your cart is empty.
          </p>

          <Link
            to="/menu"
            className="bg-orange-500 text-white px-5 py-3 rounded"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 shadow p-5 rounded-lg mb-4"
            >
              <div>
                <h3 className="font-bold dark:text-white">
                  {item.name}
                </h3>

                <p className="text-orange-500">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 rounded"
                >
                  -
                </button>

                <span className="dark:text-white">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">

            <h2 className="text-3xl font-bold dark:text-white">
              Total: ₹{totalPrice}
            </h2>

            <Link
              to="/checkout"
              className="inline-block mt-5 bg-green-600 text-white px-8 py-3 rounded-lg"
            >
              Checkout
            </Link>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;