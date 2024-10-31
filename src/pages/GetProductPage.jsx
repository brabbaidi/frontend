// src/pages/GetProductPage.jsx
import React, { useEffect, useState } from "react";

const GetProductPage = () => {
  const [products, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the product:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>No product found.</div>;
  }

  return (
    <>
    {products.map(product=>(
      <div style={styles.container}>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} style={styles.image} />
        <p>Price: ${product.price}</p>
      </div>
      ))};
    </>
  );
};

const styles = {
  container: { padding: "20px" },
  image: { maxWidth: "300px", height: "auto" },
};

export default GetProductPage;
