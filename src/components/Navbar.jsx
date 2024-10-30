// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={styles.nav}>
        <h2 style={styles.logo}>Product Store 🛒</h2>
        <div>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/create" style={styles.link}>Create Product</Link>
        </div>
    </nav>
);

const styles = {
    nav: { padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' },
    logo: { fontSize: '24px', fontWeight: 'bold' },
    link: { margin: '0 10px', textDecoration: 'none', color: '#007bff' },
};

export default Navbar;
