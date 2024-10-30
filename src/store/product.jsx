// src/store/product.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
            if (!res.ok) throw new Error('Network response was not ok');
            const data = await res.json();
            console.log(data); // Log response to check its structure
            setProducts(data.products || data); // Adjust based on response structure
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const createProduct = async (newProduct) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            const data = await res.json();
            setProducts((prev) => [...prev, data]);
            return { success: true, message: 'Product created successfully' };
        } catch (error) {
            console.error('Failed to create product:', error);
            return { success: false, message: 'Product creation failed' };
        }
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
