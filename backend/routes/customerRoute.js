const express = require("express");
const router = express.Router();
const {
  registerCustomer,
  loginCustomer,
  getCustomerProfile,
  updateCustomerProfile,
  getAllCustomers,
} = require("../controllers/customerController");

// Route to register a new customer
router.post("/register", registerCustomer);

// Route to login a customer
router.post("/login", loginCustomer);

// Route to get customer profile
router.get("/profile/:id", getCustomerProfile);

// Route to update customer profile
router.put("/profile/:id", updateCustomerProfile);

// Route to get all customers
router.get("/all", getAllCustomers);

module.exports = router;
