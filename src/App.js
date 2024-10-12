import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './frontend/Home';
import Login from './frontend/Login';
import ProductDetails from './frontend/ProductDetails';
import Cart from './frontend/Cart';
import Checkout from './frontend/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
