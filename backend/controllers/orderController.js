const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc Get all orders with optional filtering and pagination
// @route GET /api/orders
// @access Private/Admin (adjust access level based on your needs)
const getOrders = asyncHandler(async (req, res) => {
  const { skip, limit, customerId, status, startDate, endDate } = req.query;

  let query = {};

  // Build the query for filtering
  if (customerId) {
    query.customer = customerId; // Filter by customer ID
  }

  if (status) {
    query.orderStatus = status; // Filter by order status
  }

  if (startDate || endDate) {
    query.createdAt = {}; // Assuming createdAt is a field in your Order model

    if (startDate) {
      query.createdAt.$gte = new Date(startDate); // Filter for start date (greater than or equal)
    }

    if (endDate) {
      query.createdAt.$lte = new Date(endDate); // Filter for end date (less than or equal)
    }
  }

  // Handle pagination
  const skipValue = parseInt(skip) || 0;
  const limitValue = parseInt(limit) || 0;

  // Fetch the orders based on the constructed query
  const orders = await Order.find(query)
    .skip(skipValue)
    .limit(limitValue);

  res.status(200).json(orders);
})

// @desc Create a new order
// @route POST /api/orders
// @access Public
const createOrder = asyncHandler(async (req, res) => {
  const {
    customer,
    guestEmail,
    orderItems,
    shippingAddress,
    billingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;
console.log(req.body);


  // Validate if there are order items and the required fields
  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  }
  if (!customer && !guestEmail) {
    res.status(400);
    throw new Error("Customer or guest email is required");
  }

  // Create new order
  const order = new Order({
    customer: customer || null,
    guestEmail: guestEmail || null,
    orderItems,
    shippingAddress,
    billingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder._id);
});

// @desc Get order by ID
// @route GET /api/orders/:id
// @access Public
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("customer", "name email");

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  res.json(order);
});

// @desc Get orders by customer ID
// @route GET /api/orders/customer/:customerId
// @access Public
const getOrdersByCustomer = asyncHandler(async (req, res) => {
  const orders = await Order.find({ customer: req.params.customerId });

  if (!orders || orders.length === 0) {
    res.status(404);
    throw new Error("No orders found for this customer");
  }

  res.json(orders);
});

// @desc Update order status
// @route PUT /api/orders/:id/status
// @access Public
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.orderStatus = status;
  await order.save();

  res.json(order);
});

// @desc Delete order by ID
// @route DELETE /api/orders/:id
// @access Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.json({ message: "Order removed" });
});

module.exports = {
  createOrder,
  getOrderById,
  getOrdersByCustomer,
  updateOrderStatus,
  deleteOrder,
  getOrders,
};
