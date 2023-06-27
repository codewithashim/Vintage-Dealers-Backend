const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  blogTitle: {
    type: String,
  },
  blogImage: {
    type: String,
  },
  blogContent: {
    type: String,
  },
  blogAuthor: {
    type: String,
  },
  blogDate: {
    type: String,
  },
  blogComment: {
    type: Array,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);