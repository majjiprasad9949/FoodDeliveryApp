import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import RestaurantDetails from "./pages/RestaurantDetails";

function AppContent() {
  const location = useLocation();

  // Hide Navbar and Footer on Login and Register pages
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;