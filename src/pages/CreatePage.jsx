// src/pages/CreatePage.jsx
import React, { useState } from 'react';
import { useProductContext } from '../store/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
    const { createProduct } = useProductContext();

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        alert(success ? `Success: ${message}` : `Error: ${message}`);
        setNewProduct({ name: '', price: '', image: '' });
    };

    return (
        <div style={styles.container}>
            <h1>Create New Product</h1>
            <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={styles.input}
            />
            <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={styles.input}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                style={styles.input}
            />
            <button onClick={handleAddProduct} style={styles.button}>Add Product</button>
        </div>
    );
};

const styles = {
    container: { padding: '20px', maxWidth: '500px', margin: 'auto' },
    input: { margin: '10px 0', padding: '10px', width: '100%' },
    button: { padding: '10px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};

export default CreatePage;
