import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <p>Add some delicious food to your cart.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>

                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-right">
                  <strong>₹{item.price * item.quantity}</strong>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{totalPrice}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;