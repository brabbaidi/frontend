// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div style={styles.card}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        textAlign: 'center',
    },
};

export default ProductCard;
