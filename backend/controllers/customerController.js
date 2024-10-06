const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

// Helper function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc Register a new customer
// @route POST /api/customer/register
// @access Public
const registerCustomer = asyncHandler(async (req, res) => {
  const { fullName, email, password, phoneNumber, shippingAddress } = req.body;

  // Check if customer already exists
  const customerExists = await Customer.findOne({ email });
  if (customerExists) {
    res.status(400);
    throw new Error("Customer already exists");
  }

  // Create new customer
  const customer = await Customer.create({
    fullName,
    email,
    password, // Ensure password is hashed in the model's pre-save hook
    phoneNumber,
    shippingAddress,
  });

  if (customer) {
    res.status(201).json({
      _id: customer._id,
      fullName: customer.fullName,
      email: customer.email,
      isVIP: customer.isVIP,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid customer data");
  }
});

// @desc Login a customer
// @route POST /api/customer/login
// @access Public
const loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const customer = await Customer.findOne({ email });

  if (customer && (await customer.matchPassword(password))) {
    res.json({
      _id: customer._id,
      fullName: customer.fullName,
      email: customer.email,
      isVIP: customer.isVIP,
      token: generateToken(customer._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get customer profile
// @route GET /api/customer/profile/:id
// @access Private
const getCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    res.json({
      _id: customer._id,
      fullName: customer.fullName,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      shippingAddress: customer.shippingAddress,
      billingAddress: customer.billingAddress,
      orderHistory: customer.orderHistory,
      isVIP: customer.isVIP,
    });
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

// @desc Update customer profile
// @route PUT /api/customer/profile/:id
// @access Private
const updateCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    customer.fullName = req.body.fullName || customer.fullName;
    customer.email = req.body.email || customer.email;
    customer.phoneNumber = req.body.phoneNumber || customer.phoneNumber;
    customer.shippingAddress = req.body.shippingAddress || customer.shippingAddress;
    customer.billingAddress = req.body.billingAddress || customer.billingAddress;

    if (req.body.password) {
      customer.password = req.body.password; // Ensure password is hashed in the model's pre-save hook
    }

    const updatedCustomer = await customer.save();

    res.json({
      _id: updatedCustomer._id,
      fullName: updatedCustomer.fullName,
      email: updatedCustomer.email,
      phoneNumber: updatedCustomer.phoneNumber,
      shippingAddress: updatedCustomer.shippingAddress,
      billingAddress: updatedCustomer.billingAddress,
      isVIP: updatedCustomer.isVIP,
      token: generateToken(updatedCustomer._id),
    });
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

// @desc Get all customers
// @route GET /api/customer/all
// @access Private/Admin
const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({});
  res.json(customers);
});

module.exports = {
  registerCustomer,
  loginCustomer,
  getCustomerProfile,
  updateCustomerProfile,
  getAllCustomers,
};
