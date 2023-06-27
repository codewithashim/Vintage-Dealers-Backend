const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSliderSchema = new Schema({
  brandSliderName: {
    type: String,
  },
  brandSliderImage: {
    type: String,
  },
});

module.exports = mongoose.model("BrandSlider", BrandSliderSchema);
