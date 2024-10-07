import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Navbar from "@/components/Navbar";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5001/api/products", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <ProductList
        products={products}
        setProducts={setProducts}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default Products;
