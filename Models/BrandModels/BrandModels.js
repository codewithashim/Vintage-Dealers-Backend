const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  brandName: {
    type: String,
  },
  brandImage: {
    type: String,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
