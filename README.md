# 🍔 Foodie — Full-Stack Food Delivery App

A full-stack food ordering web application built with **React** on the frontend and **Node.js/Express** on the backend. Users can browse restaurants, search and filter food, add items to a cart, and register/log in with secure authentication.

🔗 **Live Demo:** _(add your deployed link here, if hosted)_

---

## ✨ Features

- 🏠 **Home page** with hero search, category browsing, and featured restaurants/dishes
- 🔍 **Search & filter** — search restaurants or dishes by name/cuisine in real time
- 🍽️ **Restaurant details page** with a dedicated menu per restaurant
- 🛒 **Shopping cart** — add/remove items, adjust quantity, view total, powered by React Context API
- 🔐 **Authentication** — register and login with hashed passwords (bcrypt) and JWT-based sessions
- 📍 **Location selector** with a dropdown of delivery locations
- 🎨 **Responsive, styled UI** with a consistent orange food-delivery theme
- 🧭 **Client-side routing** with React Router (Home, Restaurants, Offers, Cart, Contact, Login, Register)

---

## 🛠️ Tech Stack

**Frontend**
- React (Hooks: `useState`, `useContext`)
- React Router DOM
- Context API (cart state management)
- CSS (custom, no framework)
- Vite (build tool/dev server)

**Backend**
- Node.js
- Express
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- CORS
- dotenv (environment variables)

---

## 📂 Project Structure

```
FoodDeliveryApp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer, RestaurantCard, FoodCard
│   │   ├── context/        # CartContext (global cart state)
│   │   ├── data/           # Restaurant & food data
│   │   ├── pages/          # Home, Restaurants, Offers, Cart, Contact, Login, Register
│   │   └── styles/         # Page-specific CSS
│   └── public/
│
└── server/                 # Express backend
    └── server.js           # API routes: auth (register/login), restaurants
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/foodie-app.git
cd foodie-app
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```
PORT=5000
JWT_SECRET=your_own_secret_key_here
```

Start the server:
```bash
node server.js
```
The API will run on `http://localhost:5000`.

### 3. Set up the frontend
In a new terminal:
```bash
cd client
npm install
npm run dev
```
The app will run on `http://localhost:5173`.

---

## 🔑 API Endpoints

| Method | Endpoint               | Description              |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/register`   | Register a new user       |
| POST   | `/api/auth/login`      | Log in an existing user   |
| GET    | `/api/restaurants`     | Get list of restaurants   |

---

## 📌 Future Improvements

- Persist users in a real database (MongoDB/PostgreSQL) instead of in-memory storage
- Order history and checkout flow
- Restaurant owner/admin dashboard
- Deploy frontend (Vercel/Netlify) and backend (Render/Railway)

---

## 👤 Author

**Your Name**
- GitHub: [Majji Prasad](https://github.com/majjiprasad9949)
- LinkedIn: [Majji Prasad](https://www.linkedin.com/in/prasadmajji9949)

---

## 📄 License

This project is open source and available for learning purposes.