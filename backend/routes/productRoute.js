const express = require("express");
const router = express.Router();
const {
  getProductsByCategory,
  getProductByIdentifier,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// Route to get all products or products by category
router.route("/").get(getProductsByCategory);

// Route to get products by category
router.route("/:category").get(getProductsByCategory);

// Route to get a product by category and identifier
router.route("/:category/:identifier").get(getProductByIdentifier);

// Route to create a new product
router.route("/").post(createProduct);

// Route to update or delete a product by ID
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
