import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold dark:text-white">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {food.category}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-orange-500 font-bold text-lg">
            ₹{food.price}
          </span>

          <button
            onClick={() => addToCart(food)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;