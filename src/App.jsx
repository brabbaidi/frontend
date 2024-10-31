// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";
import GetProductPage from "./pages/GetProductPage"; // Import the new component

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/delete-product" element={<DeletePage />} />
      <Route path="/get-product" element={<GetProductPage />} />
    </Routes>
  </Router>
);

export default App;
