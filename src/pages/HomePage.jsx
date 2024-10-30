// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useProductContext } from '../store/product';
import ProductCard from "../components/ProductCart"; // Ensure the filename matches

const HomePage = () => {
    const { products, fetchProducts } = useProductContext();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]); // Add fetchProducts to dependency array

    return (
        <div style={styles.container}>
            <h1>All Products</h1>
            <div style={styles.grid}>
                {Array.isArray(products) && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '20px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' },
};

export default HomePage;
