const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getOrdersByCustomer,
  updateOrderStatus,
  deleteOrder,
  getOrders,
} = require("../controllers/orderController");

// Route to get all orders with optional pagination
router.get("/", getOrders);

// Route to create a new order
router.post("/", createOrder);

// Route to get a specific order by ID
router.get("/:id", getOrderById);

// Route to get all orders by a specific customer
router.get("/customer/:customerId", getOrdersByCustomer);

// Route to update the status of an order
router.put("/:id/status", updateOrderStatus);

// Route to delete an order by ID
router.delete("/:id", deleteOrder);

module.exports = router;
