// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './store/product';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <App />
    </ProductProvider>
);
