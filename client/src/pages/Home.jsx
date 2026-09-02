import { useState } from "react";
import "../styles/Home.css";

import pizza from "../assets/pizza.png";
import burger from "../assets/burger.png";
import noodles from "../assets/noodles.png";
import biryani from "../assets/biryani.jpg";
import dessert from "../assets/dessert.png";
import healthy from "../assets/healthy.png";

import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";
import { restaurants, foods } from "../data/restaurants";

function Home() {
  const locations = [
    "Hyderabad, Telangana",
    "Bangalore, Karnataka",
    "Mumbai, Maharashtra",
    "Chennai, Tamil Nadu"
  ];

  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFoods = foods.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToResults = () => {
    document.getElementById("restaurants-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8QX5sc1qB2DwOuwHApy2Yt4UOp4pr2Nt5WDOdPMaBA&s=10"
            alt="Noodles"
            className="side-img side-img-1"
          />
          <img src={healthy} alt="Healthy food" className="side-img side-img-2" />
          <img
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
            alt="Noodles"
            className="side-img side-img-3"
          />
        </div>

        <div className="hero-right-images">
          <img src={pizza} alt="Pizza" className="side-img side-img-4" />
          <img src={dessert} alt="Dessert" className="side-img side-img-5" />
          <img src={burger} alt="Burger" className="side-img side-img-6" />
        </div>

        <div className="hero-content">
          <h1>
            Order food & discover
            <br />
            the best restaurants
          </h1>

          <p>Delicious meals delivered fresh to your doorstep.</p>

          <div className="hero-search">
            <div className="location-box">
              <span className="location-icon">📍</span>

              <input
                type="text"
                placeholder="Enter your delivery location"
                value={selectedLocation}
                readOnly
                onClick={() => setShowLocations((prev) => !prev)}
              />

              <span className="arrow" onClick={() => setShowLocations((prev) => !prev)}>
                {showLocations ? "▲" : "▼"}
              </span>

              {showLocations && (
                <ul className="location-dropdown">
                  {locations.map((loc) => (
                    <li
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocations(false);
                      }}
                    >
                      📍 {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="food-search">
              <input
                type="text"
                placeholder="Search for restaurant, food or more"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button onClick={scrollToResults}>🔍</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>

        <div className="category-list">
          <div className="category-card">
            <img src={pizza} alt="pizza" />
            <p>Pizza</p>
          </div>
          <div className="category-card">
            <img src={burger} alt="Burgers" />
            <p>Burgers</p>
          </div>
          <div className="category-card">
            <img src={noodles} alt="noodles" />
            <p>Noodles</p>
          </div>
          <div className="category-card">
            <img src={biryani} alt="Biryani" />
            <p>Biryani</p>
          </div>
          <div className="category-card">
            <img src={dessert} alt="Desserts" />
            <p>Desserts</p>
          </div>
          <div className="category-card">
            <img src={healthy} alt="Healthy" />
            <p>Healthy</p>
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="restaurants" id="restaurants-section">
        <h2>Popular Restaurants</h2>

        <div className="restaurant-list">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>No restaurants match your search.</p>
          )}
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="foods" id="foods-section">
        <h2>Popular Dishes</h2>

        <div className="food-list">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => <FoodCard key={food.id} food={food} />)
          ) : (
            <p>No dishes match your search.</p>
          )}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-section">
        <div className="promo-content">
          <p className="promo-label">SPECIAL OFFER</p>
          <h2>Get 30% OFF on your first order</h2>
          <p>
            Order your favorite food today and enjoy delicious meals delivered
            straight to your door.
          </p>

          <button
            className="promo-btn"
            onClick={() =>
              document.getElementById("foods-section").scrollIntoView({ behavior: "smooth" })
            }
          >
            Order Now
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;