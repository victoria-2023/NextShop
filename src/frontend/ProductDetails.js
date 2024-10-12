// src/frontend/ProductDetails.js
import React from 'react';
import './ProductDetails.css';
function ProductDetails({ product }) {
  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
