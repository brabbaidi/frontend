// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="image" />
            <p>{product.price}</p>

            <p>Price: ${product.price}</p>
        </div>
    );
};



export default ProductCard;
