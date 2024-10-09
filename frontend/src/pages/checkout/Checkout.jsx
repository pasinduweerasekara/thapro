import React, { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import "./checkout.css";
import { cartContext } from "../../context/CartContextProvider";
import validator from 'validator';
import { isValidPhoneNumber } from 'libphonenumber-js';

const Checkout = () => {
  const { cart } = useContext(cartContext);
  const [shipping, setShipping] = useState(450.00);
  const [activePaymentMethod, setActivePaymentMethod] = useState("cod");
  const [useSameAddress, setUseSameAddress] = useState(true);

  const [errors, setErrors] = useState({}); 

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [email, setEmail] = useState(""); // State for email
  const [tel1, setTel1] = useState(""); // State for tel1
  const [tel2, setTel2] = useState(""); // State for tel1

  const itemPrice = parseFloat(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );
  
  const cartItems = cart.map((item) => ({
    product: item._id,
    quantity: item.quantity,
    price: item.price * item.quantity,
  }));

  const totalPrice = parseFloat((itemPrice + shipping).toFixed(2));

  const togglePaymentMethod = (method) => {
    setActivePaymentMethod(method);
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      toast.error("Email is required");
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email format";
      toast.error("Invalid email format");
    }

    // Tel1 validation
    if (!tel1) {
      newErrors.tel1 = "Contact Number 1 is required";
      toast.error("Contact Number 1 is required");
    } else if (!isValidPhoneNumber(tel1, 'LK')) {
      newErrors.tel1 = "Invalid phone number 1";
      toast.error("Invalid phone number 1");
    }

    // Tel2 validation
    console.log(tel2.length);
    if(tel2.length>0){
      
      if(!isValidPhoneNumber(tel2, 'LK')) {
        newErrors.tel2 = "Invalid phone number 2";
        toast.error("Invalid phone number 2");
      }
    }
    

    // Shipping address validation
    if (!shippingAddress.fullName) {
      newErrors.fullName = "Full Name is required";
      toast.error("Full Name is required");
    }
    if (!shippingAddress.addressLine1) {
      newErrors.addressLine1 = "Address Line 1 is required";
      toast.error("Address Line 1 is required");
    }
    if (!shippingAddress.city) {
      newErrors.city = "City is required";
      toast.error("City is required");
    }
    if (!shippingAddress.postalCode) {
      newErrors.postalCode = "Postal Code is required";
      toast.error("Postal Code is required");
    }
    if (!shippingAddress.country) {
      newErrors.country = "Country is required";
      toast.error("Country is required");
    }

    // Billing address validation if using a different address
    if (!useSameAddress) {
      if (!billingAddress.fullName) {
        newErrors.billingFullName = "Full Name is required";
        toast.error("Billing Full Name is required");
      }
      if (!billingAddress.addressLine1) {
        newErrors.billingAddressLine1 = "Address Line 1 is required";
        toast.error("Billing Address Line 1 is required");
      }
      if (!billingAddress.city) {
        newErrors.billingCity = "City is required";
        toast.error("Billing City is required");
      }
      if (!billingAddress.postalCode) {
        newErrors.billingPostalCode = "Postal Code is required";
        toast.error("Billing Postal Code is required");
      }
      if (!billingAddress.country) {
        newErrors.billingCountry = "Country is required";
        toast.error("Billing Country is required");
      }
    }

    // Payment method validation
    if (!activePaymentMethod) {
      newErrors.paymentMethod = "Payment method is required";
      toast.error("Payment method is required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    const finalBillingAddress = useSameAddress ? shippingAddress : billingAddress;

    if (!validateForm()) return;

    axios
      .post("http://localhost:3000/api/orders", {
        customer: "65112f75a5b5b7a9e8d0c123",
        guestEmail: email, // Use email from state
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
        toast.success("Order placed successfully!");
      })
      .catch((error) => {
        toast.error("Order failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="checkout-container">
      <ToastContainer /> {/* Include the ToastContainer in your component */}
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Contact Information</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <input
            type="tel"
            placeholder="Contact Number 1"
            value={tel1}
            onChange={(e) => setTel1(e.target.value)} // Update tel1 state
          />
          <input
          type="tel"
          placeholder="Contact Number 2"
          value={tel2}
          onChange={(e) => setTel2(e.target.value)} // Update tel1 state
          />

          <h2>Shipping Address</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleShippingChange}
          />

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
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleBillingChange}
              />
              <input
                type="text"
                name="addressLine1"
                placeholder="Address Line 1"
                onChange={handleBillingChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleBillingChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleBillingChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleBillingChange}
              />
            </>
          )}

          <div className="checkout-section">
            <h2>Payment Method</h2>
            <div
              className={`payment-option ${
                activePaymentMethod === "cod" ? "active" : ""
              }`}
              onClick={() => togglePaymentMethod("cod")}
            >
              Cash on Delivery
            </div>
            <div
              className={`payment-option ${
                activePaymentMethod === "payhere" ? "active" : ""
              }`}
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
