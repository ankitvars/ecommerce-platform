const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add New Product (Admin only)
router.post("/", async (req, res) => {
  const { name, description, price, imageUrl, countInStock } = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      countInStock,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
