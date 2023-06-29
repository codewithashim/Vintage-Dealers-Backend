const Payment = require("../../Models/PaymentModels/PaymentModels");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY_SK}`);
const uuid = require("uuid").v4;
const nodemailer = require("nodemailer");

const createPaymentIntent = async (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product[0]?.productPrice * 100);

  const price = product[0]?.productPrice * 100;

  const idempotencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase of ${product[0]?.productName}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) =>
      res.status(200).json({
        success: true,
        message: "Payment successful",
        data: result,
      })
    )
    .catch((error) => console.log(error));
};

const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const newPayment = new Payment(paymentData);
    await newPayment.save();

    res.status(200).json({
      success: true,
      message: "Payment successful",
      data: newPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
};

const getPayment = async (req, res) => {
  try {
    const payment = await Payment.find();
    res.status(200).json({
      success: true,
      message: "Success payment",
      data: payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
};

const deletePayment = async (req, res) => {
  try {
    const id = req.params.id;
    const deletePaymentRequest = await Payment.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: "Payment deleted successfully",
      data: deletePaymentRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
};

//paymentProductId

const getPaymentByProductId = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.find({ productId: id });
    res.status(200).json({
      success: true,
      message: "Success payment",
      data: payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
};

module.exports = {
  createPayment,
  getPayment,
  deletePayment,
  createPaymentIntent,
  getPaymentByProductId,
};
