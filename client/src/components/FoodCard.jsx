import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "./FoodCard.css";

function FoodCard({ food }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-card">

      <img
        src={food.image}
        alt={food.name}
      />

      <div className="food-info">

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">

          <span className="food-price">
            ₹{food.price}
          </span>

          <span className="food-rating">
            ⭐ {food.rating}
          </span>

        </div>

        <button
          className="add-btn"
          onClick={() => addToCart(food)}
        >
          + Add
        </button>

      </div>

    </div>
  );
}

export default FoodCard;