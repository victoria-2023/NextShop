// src/frontend/Home.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Home.css';  // Import your styles for the Home page

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to NextShop</h1>
        <p>Experience a personalized shopping journey.</p>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          

        </nav>
      </header>
      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
