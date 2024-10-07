const express = require('express');
const router = express.Router();
const {createPayment} = require('../controllers/paymentController'); // Import the Payment controller

// Route to create a new payment
router.post('/new', createPayment);

module.exports = router;
