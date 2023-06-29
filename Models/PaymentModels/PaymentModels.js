const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
  },
  paymentAmount: {
    type: Number,
  },
  paymentStatus: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  paymentDate: {
    type: Date,
  },
  paymentProduct: {
    type: String,
  },
  paymentUser: {
    type: String,
  },
  customerName: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
