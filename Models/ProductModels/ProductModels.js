const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productImage: {
    type: String,
  },
  productBrand: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  productCategoryId: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productRating: {
    type: Number,
  },
  productReview: {
    type: Number,
  },
  productType: {
    type: String,
  },
  productQuantity: {
    type: Number,
  },
  fuelType: {
    type: String,
  },
  ccEngine: {
    type: String,
  },
  era: {
    type: String,
  },
  speed: {
    type: String,
  },
  tank: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
