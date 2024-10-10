const Payment = require('../models/paymentModel');

// Controller to handle payment creation
exports.createPayment = async (req, res) => {
  const { amount, currency, customerName, customerEmail, userId,orderId,paymentMethod } = req.body;
  

  // Validate required fields
  if (!amount || !currency || !customerName || !customerEmail || !paymentMethod) {
    return res.status(400).json({
      success: false,
      message: 'All fields (amount, currency, customerName, customerEmail) are required',
    });
  }

  try {
    // Create a new Payment instance
    const payment = new Payment({
      orderId,
      amount,
      currency,
      customerName,
      customerEmail,
      paymentMethod,
      userId: userId || null, // Set userId to null if not provided (for unregistered users)
    });

    // The pre-save hook will generate the hash automatically
    await payment.save();

    // Respond with the created payment object
    res.status(201).json({
      success: true,
      message: 'Payment created successfully',
      paymentId: payment._id,
      hash: payment.hash
    });
    
  } catch (error) {
    // Handle errors and send a failure response
    res.status(500).json({
      success: false,
      message: 'Payment creation failed',
      error: error.message,
    });
  }
};
