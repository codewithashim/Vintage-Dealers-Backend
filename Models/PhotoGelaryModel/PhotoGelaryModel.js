const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoGelarySchema = new Schema({
  photoGelaryName: {
    type: String,
  },
  photoGelaryImage: {
    type: String,
  },
});

module.exports = mongoose.model("PhotoGelary", PhotoGelarySchema);
