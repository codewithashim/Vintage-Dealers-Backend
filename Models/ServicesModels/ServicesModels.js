const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  services: {
    type: String,
  },
  details: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Service", ServicesSchema, "Services");
