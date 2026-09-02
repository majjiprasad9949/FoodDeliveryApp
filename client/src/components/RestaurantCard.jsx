import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } });
  };

  return (
    <div className="restaurant-card" onClick={handleClick}>
      <img src={restaurant.image} alt={restaurant.name} />

      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.cuisine}</p>

        <div className="restaurant-details">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.time} min</span>
        </div>

        <p className="restaurant-price">{restaurant.price}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;