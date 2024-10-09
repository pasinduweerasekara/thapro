import axios from "axios";
import React, { useContext, useState } from "react";
import "./checkout.css";
import { cartContext } from "../../context/CartContextProvider";

const Checkout = () => {
  const { cart } = useContext(cartContext);
  const [shipping, setShipping] = useState(450.00);
  const [activePaymentMethod, setActivePaymentMethod] = useState(null);

  // Calculate the total item price
  const itemPrice = parseFloat(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );

  // Map cart items for order submission
  const cartItems = cart.map((item) => ({
    product: item._id,
    quantity: item.quantity,
    price: item.price * item.quantity,
  }));

  // Calculate the total price including shipping
  const totalPrice = parseFloat((itemPrice + shipping).toFixed(2));

  // Toggle the selected payment method
  const togglePaymentMethod = (method) => {
    setActivePaymentMethod(method);
  };

  // Handle order submission
  const handleProceed = () => {
    axios
      .post("http://localhost:3000/api/orders", {
        customer: "65112f75a5b5b7a9e8d0c123",
        guestEmail: "guest@example.com",
        orderItems: cartItems,
        shippingAddress: {
          fullName: "John Doe",
          addressLine1: "123 Main Street",
          addressLine2: "Apartment 4B",
          city: "New York",
          postalCode: "10001",
          country: "USA",
        },
        paymentMethod: activePaymentMethod,
        itemsPrice: itemPrice,
        shippingPrice: shipping,
        taxPrice: 5,
        totalPrice: totalPrice,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Contact Information</h2>
          <input type="email" placeholder="Email" />

          <h2>Shipping Address</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code" />
          <input type="text" placeholder="Country" />

          {/* Payment Method Selection */}
          <div className="checkout-section">
            <h2>Payment Method</h2>
            <div
              className={`payment-option ${activePaymentMethod === "cod" ? "active" : ""}`}
              onClick={() => togglePaymentMethod("cod")}
            >
              Cash on Delivery
            </div>
            <div
              className={`payment-option ${activePaymentMethod === "payhere" ? "active" : ""}`}
              onClick={() => togglePaymentMethod("payhere")}
            >
              Payhere
            </div>
          </div>

          <button className="btn-primary" onClick={handleProceed}>
            Proceed
          </button>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cart.map((product, index) => (
            <div className="summary-item" key={index}>
              <div className="thumbnail-container">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="thumbnail"
                />
                <div className="quantity-bubble">{product.quantity}</div>
              </div>
              <span>{product.name}</span>
              <span>LKR: {(product.price * product.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="summary-total">
            <span>Price</span>
            <span>LKR: {itemPrice.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Shipping</span>
            <span>LKR: {shipping.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>LKR: {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
