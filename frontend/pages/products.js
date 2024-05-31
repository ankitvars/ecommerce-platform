import React from "react";
import ProductList from "../components/ProductList";
import Navbar from "@/components/Navbar";

const products = () => {
  const products = [
    { _id: 1, name: "Product 1", description: "Description of Product 1" },
    { _id: 2, name: "Product 2", description: "Description of Product 2" },
    { _id: 3, name: "Product 3", description: "Description of Product 3" },
  ];
  return (
    <div>
      <Navbar />
      <ProductList products={products} />
    </div>
  );
};

export default products;
