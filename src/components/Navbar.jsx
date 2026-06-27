import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          FoodieHub
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium dark:text-white"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="font-medium dark:text-white"
          >
            Menu
          </Link>

          <Link
            to="/cart"
            className="relative font-medium dark:text-white"
          >
            Cart

            {cartItems.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;