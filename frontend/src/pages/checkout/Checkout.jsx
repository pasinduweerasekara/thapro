import React, { useState } from "react";
import "./checkout.css";

const Checkout = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState(null);

  const togglePaymentMethod = (method) => {
    setActivePaymentMethod(method);
  };

  // Sample products with thumbnail images
  const products = [
    {
      name: "Product 1",
      price: 50.00,
      imageUrl: "https://via.placeholder.com/50" // Replace with your image URL
    },
    {
      name: "Product 2",
      price: 75.00,
      imageUrl: "https://via.placeholder.com/50" // Replace with your image URL
    }
  ];

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

          {/* Payment Method with Highlighted Selection */}
          <div className="checkout-section">
            <h2>Payment Method</h2>
            {/* Cash on Delivery Option */}
            <div
              className={`payment-option ${activePaymentMethod === 'cod' ? 'active' : ''}`}
              onClick={() => togglePaymentMethod('cod')}
            >
              Cash on Delivery
            </div>
            {/* Payhere Option */}
            <div
              className={`payment-option ${activePaymentMethod === 'payhere' ? 'active' : ''}`}
              onClick={() => togglePaymentMethod('payhere')}
            >
              Payhere
            </div>
          </div>

          <button className="btn-primary">Proceed</button>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {products.map((product, index) => (
            <div className="summary-item" key={index}>
              <img src={product.imageUrl} alt={product.name} className="thumbnail" />
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <span>${products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
