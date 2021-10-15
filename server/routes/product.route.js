const router = require("express").Router();
const product = require("../Models/product");
const { verifyTokenAndAdmin } = require("./verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
