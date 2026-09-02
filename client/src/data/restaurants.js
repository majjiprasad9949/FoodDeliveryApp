import pizzaPalace from "../assets/pizza-palace.png";
import burgerHouse from "../assets/burger-house.png";
import biryaniPoint from "../assets/biryani-point.png";
import DesertBowl from "../assets/desert-bowl.png";
import spiceKitchen from "../assets/spice-kitchen.png";
import greenGarden from "../assets/green-garden.png";

import chickenBiryani from "../assets/chicken-biryani.png";
import cheeseBurger from "../assets/cheese-burger.png";
import margheritaPizza from "../assets/margherita-pizza.png";
import chickenNoodles from "../assets/chicken-noodles.png";
import chocolateCake from "../assets/chocolate-cake.png";
import grilledChicken from "../assets/grilled-chicken.png";

export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.6,
    time: 25,
    price: "₹350",
    image: pizzaPalace,
    menu: [
      { id: 101, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella and basil", price: 250, rating: 4.7, image: margheritaPizza },
      { id: 102, name: "Cheese Burger", description: "Juicy chicken patty with cheese and fresh vegetables", price: 180, rating: 4.6, image: cheeseBurger },
      { id: 103, name: "Chocolate Cake", description: "Rich and delicious chocolate cake", price: 150, rating: 4.6, image: chocolateCake }
    ]
  },
  {
    id: 2,
    name: "Burger House",
    cuisine: "American, Burgers",
    rating: 4.4,
    time: 20,
    price: "₹150",
    image: burgerHouse,
    menu: [
      { id: 201, name: "Cheese Burger", description: "Juicy chicken patty with cheese and fresh vegetables", price: 180, rating: 4.6, image: cheeseBurger },
      { id: 202, name: "Grilled Chicken", description: "Tender grilled chicken served with fresh vegetables", price: 320, rating: 4.7, image: grilledChicken },
      { id: 203, name: "Chocolate Cake", description: "Rich and delicious chocolate cake", price: 150, rating: 4.6, image: chocolateCake }
    ]
  },
  {
    id: 3,
    name: "Biryani Point",
    cuisine: "Indian, Biryani",
    rating: 4.7,
    time: 30,
    price: "₹410",
    image: biryaniPoint,
    menu: [
      { id: 301, name: "Chicken Biryani", description: "Fragrant basmati rice with tender chicken and spices", price: 280, rating: 4.8, image: chickenBiryani },
      { id: 302, name: "Grilled Chicken", description: "Tender grilled chicken served with fresh vegetables", price: 320, rating: 4.7, image: grilledChicken },
      { id: 303, name: "Chicken Noodles", description: "Stir-fried noodles with chicken and fresh vegetables", price: 200, rating: 4.5, image: chickenNoodles }
    ]
  },
  {
    id: 4,
    name: "desert-bowl",
    cuisine: "Indian,Ice-cream",
    rating: 4.5,
    time: 25,
    price: "₹280",
    image: DesertBowl,
    menu: [
      { id: 401, name: "Chocolate Cake", description: "Rich and delicious chocolate cake", price: 150, rating: 4.6, image: chocolateCake }
    ]
  },
  {
    id: 5,
    name: "Spice Kitchen",
    cuisine: "Indian, South Indian",
    rating: 4.6,
    time: 30,
    price: "₹220",
    image: spiceKitchen,
    menu: [
      { id: 501, name: "Chicken Biryani", description: "Fragrant basmati rice with tender chicken and spices", price: 280, rating: 4.8, image: chickenBiryani },
      { id: 502, name: "Chicken Noodles", description: "Stir-fried noodles with chicken and fresh vegetables", price: 200, rating: 4.5, image: chickenNoodles }
    ]
  },
  {
    id: 6,
    name: "Green Garden",
    cuisine: "Healthy, Vegetarian",
    rating: 4.3,
    time: 20,
    price: "₹180",
    image: greenGarden,
    menu: [
      { id: 601, name: "Fresh Garden Salad", description: "Crisp mixed greens with cherry tomatoes and a light lemon dressing", price: 160, rating: 4.6, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
      { id: 602, name: "Paneer Tikka Bowl", description: "Grilled cottage cheese with peppers and onions, lightly spiced", price: 220, rating: 4.5, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" }
    ]
  }
];

export const foods = [
  { id: 1, name: "Chicken Biryani", description: "Fragrant basmati rice with tender chicken and spices", price: 280, rating: 4.8, image: chickenBiryani },
  { id: 2, name: "Cheese Burger", description: "Juicy chicken patty with cheese and fresh vegetables", price: 180, rating: 4.6, image: cheeseBurger },
  { id: 3, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella and basil", price: 250, rating: 4.7, image: margheritaPizza },
  { id: 4, name: "Chicken Noodles", description: "Stir-fried noodles with chicken and fresh vegetables", price: 200, rating: 4.5, image: chickenNoodles },
  { id: 5, name: "Chocolate Cake", description: "Rich and delicious chocolate cake", price: 150, rating: 4.6, image: chocolateCake },
  { id: 6, name: "Grilled Chicken", description: "Tender grilled chicken served with fresh vegetables", price: 320, rating: 4.7, image: grilledChicken }
];