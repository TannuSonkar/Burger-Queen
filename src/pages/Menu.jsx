import foods from "../data/Food";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold mb-10 dark:text-white">
        Our Menu
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>
    </div>
  );
};

export default Menu;