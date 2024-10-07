import React, { useEffect } from 'react';

const Payhere = () => {

  // Define the payment object
  const payment = {
    "sandbox": true, // Use sandbox mode during testing
    "merchant_id": "121XXXX", // Replace your Merchant ID
    "return_url": undefined, // Can be your redirect URL after payment
    "cancel_url": undefined, // Can be your redirect URL after cancel
    "notify_url": "http://sample.com/notify", // Your server's notification URL
    "order_id": "ItemNo12345", // Unique order ID
    "items": "Door bell wireless", // Item description
    "amount": "1000.00", // Payment amount
    "currency": "LKR", // Currency type
    "hash": "45D3CBA93E9F2189BD630ADFE19AA6DC", // Replace with generated hash from backend
    "first_name": "Saman", 
    "last_name": "Perera",
    "email": "samanp@gmail.com", 
    "phone": "0771234567",
    "address": "No.1, Galle Road", 
    "city": "Colombo", 
    "country": "Sri Lanka",
    "delivery_address": "No. 46, Galle road, Kalutara South", 
    "delivery_city": "Kalutara",
    "delivery_country": "Sri Lanka",
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
    payhere.startPayment(payment); // Start payment when button is clicked
  };

  return (
    <div>
      <button type="submit" id="payhere-payment" className="purchase-button" onClick={handlePayment}>
        PayHere Pay
      </button>
    </div>
  );
};

export default Payhere;