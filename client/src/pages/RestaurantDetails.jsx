import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/RestaurantDetails.css";

function RestaurantDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const restaurant = state?.restaurant;

  if (!restaurant) {
    return (
      <main className="restaurant-details-page">
        <p>Restaurant not found.</p>
        <button onClick={() => navigate("/")}>Go Home</button>
      </main>
    );
  }

  return (
    <main className="restaurant-details-page">
      <img src={restaurant.image} alt={restaurant.name} className="details-banner" />

      <div className="details-info">
        <h1>{restaurant.name}</h1>
        <p className="details-cuisine">{restaurant.cuisine}</p>

        <div className="details-meta">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.time} min delivery</span>
          <span>Avg for two: {restaurant.price}</span>
        </div>
      </div>

      <div className="details-menu">
        <h2>Menu</h2>

        <div className="menu-list">
          {restaurant.menu && restaurant.menu.length > 0 ? (
            restaurant.menu.map((item) => (
              <div className="menu-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="menu-item-bottom">
                    <span>₹{item.price}</span>
                    <span>⭐ {item.rating}</span>
                  </div>

                  <button onClick={() => addToCart(item)}>+ Add</button>
                </div>
              </div>
            ))
          ) : (
            <p>No menu items available yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default RestaurantDetails;