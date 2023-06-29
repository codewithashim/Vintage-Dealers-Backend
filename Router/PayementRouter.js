const express = require("express");
const router = express.Router();

const {
  createPayment,
  getPayment,
  deletePayment,
  createPaymentIntent,
  getPaymentByProductId
} = require("../Controlar/PaymentController/PaymentController");

router.post("/payment-intent", createPaymentIntent);
router.post("/payment", createPayment);
router.get("/payment", getPayment);
router.delete("/payment/:id", deletePayment);
router.get("/payment/:id", getPaymentByProductId);

module.exports = router;
