// DeletePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './DeletePage.css';


const DeletePage = () => {
    const [productId, setProductId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // const handleDelete = async () => {
    //     setMessage('');
    //     setError('');
        
    //     try {
    //         const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
    //         setMessage(response.data.message);
    //         setProductId(''); // Clear input field after deletion
    //     } catch (err) {
    //         setError(err.response?.data?.message || 'An error occurred while deleting the product');
    //     }
    // };
    const handleDelete = async () => {
        setMessage('');
        setError('');
        
        if (!productId) {
            setError('Please enter a product ID');
            return;
        }
    
        try {
            const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
            setMessage(response.data.message);
            setProductId(''); // Clear input field after deletion
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while deleting the product');
        }
    };
    

    return (
        <div className="delete-page">
            <h2>Delete Product</h2>
            <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete Product</button>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeletePage;
