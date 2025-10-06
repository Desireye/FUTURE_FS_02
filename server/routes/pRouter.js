const express = require("express");
const productModel = require('./models/product.js');

const pRouter = express.Router();

pRouter.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default pRouter;