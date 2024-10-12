// src/frontend/Checkout.js
import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {/* Add form fields for billing/shipping info */}
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Address:</label>
        <input type="text" required />
        <label>Credit Card Number:</label>
        <input type="text" required />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
