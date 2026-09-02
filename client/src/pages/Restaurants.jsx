import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";
import "../styles/Restaurants.css";

function Restaurants() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="restaurants-page">
      {/* Page Header */}
      <section className="restaurants-header">
        <h1>Explore Restaurants</h1>
        <p>Discover the best restaurants and delicious food near you.</p>

        <div className="restaurant-search">
          <input
            type="text"
            placeholder="Search restaurants or cuisine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      </section>

      {/* Filters */}
      <section className="restaurant-filters">
        <button className="filter active">All</button>
        <button className="filter">Pizza</button>
        <button className="filter">Burgers</button>
        <button className="filter">Biryani</button>
        <button className="filter">Indian</button>
        <button className="filter">Healthy</button>
      </section>

      {/* Restaurant List */}
      <section className="all-restaurants">
        <div className="restaurants-title">
          <h2>All Restaurants</h2>
          <span>{filteredRestaurants.length} restaurants</span>
        </div>

        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="no-results">
            <h3>No restaurants found</h3>
            <p>Try searching for another restaurant or cuisine.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Restaurants;