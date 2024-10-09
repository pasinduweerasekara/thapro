import axios from "axios";
import React, { useContext, useState } from "react";
import "./checkout.css";
import { cartContext } from "../../context/CartContextProvider";

const Checkout = () => {
  const { cart } = useContext(cartContext);
  const [shipping, setShipping] = useState(450.00);
  const [activePaymentMethod, setActivePaymentMethod] = useState("cod");
  const [useSameAddress, setUseSameAddress] = useState(true); // State for using the same address

  // Shipping address state
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // Billing address state
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    country: "",
  });

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
  }

  // Handle form input changes
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  }

    // Handle order submission
    const handleProceed = () => {
      const finalBillingAddress = useSameAddress ? shippingAddress : billingAddress;
      console.log({
        customer: "65112f75a5b5b7a9e8d0c123",
        guestEmail: "guest@example.com",
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        billingAddress: finalBillingAddress,
        paymentMethod: activePaymentMethod,
        itemsPrice: itemPrice,
        shippingPrice: shipping,
        taxPrice: 5,
        totalPrice: totalPrice,
      });
      
  
      axios
        .post("http://localhost:3000/api/orders", {
          customer: "65112f75a5b5b7a9e8d0c123",
          guestEmail: "guest@example.com",
          orderItems: cartItems,
          shippingAddress: shippingAddress,
          billingAddress: finalBillingAddress,
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
        })
    }

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
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleShippingChange} />
          <input type="text" name="addressLine1" placeholder="Address Line 1" onChange={handleShippingChange} />
          <input type="text" name="addressLine2" placeholder="Address Line 2" onChange={handleShippingChange} />
          <input type="text" name="city" placeholder="City" onChange={handleShippingChange} />
          <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleShippingChange} />
          <input type="text" name="country" placeholder="Country" onChange={handleShippingChange} />

          {/* Option to use the same billing address */}
          <div className="same-address-option">
          <label htmlFor="checkbox">Same billing address as shipping</label>

            <input
              type="checkbox"
              name="checkbox"
              checked={useSameAddress}
              onChange={() => setUseSameAddress(!useSameAddress)}
            />
          </div>

          {!useSameAddress && (
            <>
              <h2>Billing Address</h2>
              <input type="text" name="fullName" placeholder="Full Name" onChange={handleBillingChange} />
              <input type="text" name="addressLine1" placeholder="Address" onChange={handleBillingChange} />
              <input type="text" name="addressLine2" placeholder="Address" onChange={handleBillingChange} />
              <input type="text" name="city" placeholder="City" onChange={handleBillingChange} />
              <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleBillingChange} />
              <input type="text" name="country" placeholder="Country" onChange={handleBillingChange} />
            </>
          )}

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
