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
            //setProducts(data.products || data); // Adjust based on response structure
            setProducts(data.products || data.data); // Adjust based on response structure
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const createProduct = async (newProduct) => {
        console.log(import.meta.env.VITE_API_URL);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            console.log(res);
            const data = await res.json();
            setProducts((prev) => [...prev, data]);
            return { success: true, message: 'Product created successfully' };
        } catch (error) {
            console.error('Failed to create product:', error);
            return { success: false, message: 'Product creation failed' };
        }
    };

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Network response was not ok');
            setProducts((prev) => prev.filter((product) => product._id !== id));
            return { success: true, message: 'Product deleted successfully' };
        } catch (error) {
            console.error('Failed to delete product:', error);
            return { success: false, message: 'Product deletion failed' };
        }
    };
    

    return (
        <ProductContext.Provider value={{ products, fetchProducts, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
