import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/foodie-icon.svg" alt="Foodie logo" className="logo-img" />
          Foodie
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
          <NavLink to="/restaurants" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Restaurants
          </NavLink>
          <NavLink to="/offers" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Offers
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact Us
          </NavLink>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn">
            🛒 Cart
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;