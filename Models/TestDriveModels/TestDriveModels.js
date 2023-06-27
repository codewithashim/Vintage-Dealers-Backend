const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestDriveSchema = new Schema({
  date: {
    type: Date,
  },
  customerName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  productName: {
    type: String,
  },
});

module.exports = mongoose.model("TestDrive", TestDriveSchema);
