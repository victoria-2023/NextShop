// src/frontend/Cart.js
import React from 'react';
import './Cart.css';
function Cart() {
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {/* Cart items would be rendered here */}
      <p>No items in the cart.</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
