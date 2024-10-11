import React, { useEffect, useState } from 'react';
import axios from 'axios';
import saveOrderAndPayment from '../../helpers/saveOrderAndPayment';

const Payhere = (props) => {
  const [paymentHash, setPaymentHash] = useState('')
  const {errors,cart,validateForm,tel1,tel2,email,shippingAddress,finalBillingAddress,itemPrice,shipping,taxPrice,totalPrice,toast,setPaymentStart} = props
  
  
  
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
        toast.warn("Payment Cancelled")
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
  const handlePayment = async () => {
    setPaymentStart(true)
    
    if (!validateForm()) {
      setPaymentStart(false)
      return}

    if (Object.keys(errors).length ===0) { 
      const response = await saveOrderAndPayment(
        "65112f75a5b5b7a9e8d0c123",
        cart,
        shippingAddress,
        email,
        tel1,
        tel2,
        'payhere',
        totalPrice,
        shipping,
        5,
        itemPrice,
        finalBillingAddress)
        setPaymentHash(response)
        if (response) {
          toast.success("Order Saved!")
        }
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