const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  categories: {
    type: String,
  },
  categoryImage: {
    type: String,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
