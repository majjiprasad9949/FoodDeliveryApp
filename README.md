# 🍔 Foodie — Full-Stack Food Delivery App

A full-stack food ordering web application built with **React** on the frontend and **Node.js/Express** on the backend.

Users can browse restaurants, search and filter food, add items to a cart, and register/log in with secure authentication.

---

## 🚀 Live Demo

- **Frontend:** https://client-9dhul6hs3-majjiprasad9949s-projects.vercel.app/
- **Backend API:** https://fooddeliveryapp-25o1.onrender.com

---

## ✨ Features

- 🏠 **Home Page** — Hero section, search, food categories, and featured restaurants
- 🔍 **Search & Filter** — Search restaurants and food items by name or cuisine
- 🍽️ **Restaurant Details** — View individual restaurants and their food menus
- 🛒 **Shopping Cart** — Add/remove items, increase/decrease quantity, clear cart, and view total price
- 🔐 **Authentication** — User registration and login using bcrypt password hashing and JWT authentication
- 📍 **Location Selector** — Select a delivery location
- 🎨 **Responsive UI** — Clean and responsive food-delivery design
- 🧭 **Client-Side Routing** — Navigation using React Router
- 📱 **Multiple Pages** — Home, Restaurants, Offers, Cart, Contact, Login, Register, and Restaurant Details

---

## 🛠️ Tech Stack

### Frontend

- React
- React Hooks (`useState`, `useContext`)
- React Router DOM
- Context API
- CSS
- Vite

### Backend

- Node.js
- Express.js
- bcryptjs
- JSON Web Token (JWT)
- CORS
- dotenv

### Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Source Code:** GitHub

---

## 📂 Project Structure

```text
FoodDeliveryApp/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── RestaurantCard.jsx
│   │   │   └── FoodCard.jsx
│   │   │
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   │
│   │   ├── data/
│   │   │   └── restaurantData.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Restaurants.jsx
│   │   │   ├── RestaurantDetails.jsx
│   │   │   ├── Offers.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   └── styles/
│   │       └── Page-specific CSS files
│   │
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md



## 👤 Author

**Majji Prasad**

- GitHub: https://github.com/majjiprasad9949
- LinkedIn: https://www.linkedin.com/in/prasadmajji9949