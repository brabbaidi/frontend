// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const Navbar = () => (
  <nav className="nav"> {/* Use className instead of style */}
    <h2 className="logo">Product Store 🛒</h2>
    <div>
      <Link to="/" className="link"> {/* Use className instead of style */}
        Home
      </Link>
      <Link to="/create" className="link"> {/* Use className instead of style */}
        Create Product
      </Link>
      <Link to="/delete-product" className="link"> {/* Add className */}
        Delete Product
      </Link>
      <Link to="/get-product" className="link"> {/* Add className */}
        Get Product
      </Link>
    </div>
  </nav>
);

export default Navbar;
