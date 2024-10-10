const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer", // Refers to the Customer model
    },
    guestEmail: {
      type: String,
      validate: {
        validator: function (v) {
          // Only validate if guestEmail is provided
          return !v || /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
        },
        message: "Invalid email format",
      },
    },
    contactNumber1:{
      type:String,
      required:true
    },
    contactNumber2:{
      type:String,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Refers to the Product model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true, // Price at the time of purchase
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    billingAddress: {
      fullName: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ["credit card", "payhere", "cod"],
      required: true,
    },
    // Adding a reference to the Payment model
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment', // Refers to the Payment model
      required: false, // Can be set later when the payment is processed
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0, // Total price of the items in the order
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0, // Shipping cost
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0, // Tax amount
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0, // Final price (itemsPrice + shippingPrice + taxPrice)
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

module.exports = mongoose.model("Order", orderSchema);
