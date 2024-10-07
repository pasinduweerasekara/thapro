const mongoose = require('mongoose');
const crypto = require('crypto');
require('dotenv').config(); // To load environment variables

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: function () {
      return this._id.toString(); // Use MongoDB's ObjectId as orderId
    },
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null, // Null for unregistered users
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hash: {
    type: String,
  },
});

// Pre-save hook to generate the secret hash
paymentSchema.pre('save', function (next) {
  const merchantId = process.env.MERCHANT_ID; // Fetch merchantId from the environment
  const merchantSecret = process.env.MERCHANT_SECRET; // Fetch merchantSecret from the environment

  // Hash generation logic
  const hashData = merchantId + this.orderId + this.amount + this.currency;
  const secretHash = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
  const hash = crypto.createHash('md5').update(hashData + secretHash).digest('hex').toUpperCase();
  
  this.hash = hash; // Set the generated hash in the document
  next(); // Proceed with the save
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
