import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payhere = (props) => {
  const [paymentHash, setPaymentHash] = useState('')
  const {errors,cart,validateForm,tel1,tel2,email,shippingAddress,finalBillingAddress,itemPrice,shipping,taxPrice,totalPrice,toast} = props
  
  
  
  // Define the payment object
  const payment = {
    "sandbox": true, // Use sandbox mode during testing
    "merchant_id": "121XXXX", // Replace your Merchant ID
    "return_url": undefined, // Can be your redirect URL after payment
    "cancel_url": undefined, // Can be your redirect URL after cancel
    "notify_url": "http://sample.com/notify", // Your server's notification URL
    "order_id": "orderId", // Unique order ID
    "items": "Door bell wireless", // Item description
    "amount": totalPrice, // Payment amount
    "currency": "LKR", // Currency type
    "hash": paymentHash, // Replace with generated hash from backend
    "first_name": shippingAddress.fullName.split(' ')[0], 
    "last_name": shippingAddress.fullName.split(' ').slice(-1),
    "email": email, 
    "phone": tel1,
    "address": finalBillingAddress.addressLine1+", "+finalBillingAddress.addressLine2, 
    "city": finalBillingAddress.city, 
    "country": finalBillingAddress.country,
    "delivery_address": shippingAddress.addressLine1+", "+shippingAddress.addressLine2, 
    "delivery_city": shippingAddress.city,
    "delivery_country": shippingAddress.country,
    "custom_1": "", 
    "custom_2": ""
  };

  // Load the PayHere script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.payhere.lk/lib/payhere.js"; // PayHere SDK
    script.async = true;
    document.body.appendChild(script);

    // Add event listeners for payment actions
    script.onload = () => {
      payhere.onCompleted = function (orderId) {
        console.log("Payment completed. OrderID:", orderId);
        // Handle payment success logic here (e.g., redirect or show success message)
      };

      payhere.onDismissed = function () {
        console.log("Payment dismissed");
        // Handle when the payment window is closed without completing
      };

      payhere.onError = function (error) {
        console.log("Error:", error);
        // Handle payment error logic here
      };
    };

    return () => {
      // Cleanup the script tag if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  // Trigger payment
  const handlePayment = () => {
    
    if (!validateForm()) return;

    if (Object.keys(errors).length ===0) {
      axios
      .post("http://localhost:3000/api/orders", {
        customer: "65112f75a5b5b7a9e8d0c123",
        guestEmail: email, // Use email from state
        orderItems: cart,
        contactNumber1: tel1,
        contactNumber2: tel2,
        shippingAddress: shippingAddress,
        billingAddress: finalBillingAddress,
        paymentMethod: "payhere",
        itemsPrice: itemPrice,
        shippingPrice: shipping,
        taxPrice: 5,
        totalPrice: totalPrice,
      })
      .then((response) => {
        const orderId = response.data._id; // Extract order_id
        return axios.post("http://localhost:3000/api/payment/new", {
          orderId: orderId,
          customerName: shippingAddress.fullName,
          amount: totalPrice,
          currency: "LKR",
          customerEmail: email,
          paymentMethod: "payhere",
        });
      })
      .then((paymentResponse) => {
        const hash = paymentResponse.data.hash
        setPaymentHash(hash)
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      });
      payhere.startPayment(payment)
    }
    // Start payment when button is clicked
  };

  return (
    <div>
      <button type="submit" id="payhere-payment" className="btn-primary" onClick={handlePayment} >
        PayHere Pay
      </button>
    </div>
  );
};

export default Payhere;