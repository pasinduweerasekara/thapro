import axios from "axios";

export default async function saveOrderAndPayment(
  customer,
  cart,
  shippingAddress,
  email,
  tel1,
  tel2,
  activePaymentMethod,
  totalPrice,
  shipping,
  taxPrice,
  itemPrice,
  finalBillingAddress
) {
  try {
    const orderResponse = await axios.post("http://localhost:3000/api/orders", {
      customer: customer,
      guestEmail: email,
      orderItems: cart,
      contactNumber1: tel1,
      contactNumber2: tel2,
      shippingAddress: shippingAddress,
      billingAddress: finalBillingAddress,
      paymentMethod: activePaymentMethod,
      itemsPrice: itemPrice,
      shippingPrice: shipping,
      taxPrice: taxPrice,
      totalPrice: totalPrice,
    });
    const orderId = orderResponse.data._id;

    const paymentResponse = await axios.post(
      "http://localhost:3000/api/payment/new",
      {
        orderId: orderId,
        customerName: shippingAddress.fullName,
        amount: totalPrice,
        currency: "LKR",
        customerEmail: email,
        paymentMethod: activePaymentMethod,
      }
    );
    return paymentResponse.data.hash
  } catch {
    (error) => {
      if (error.response) {
        console.error("Response Error:", error.response.data);
      } else if (error.request) {
        console.error("Request Error:", error.request);
      } else {
        console.error("General Error:", error.message);
      }
      return false;
    };
  }
}
