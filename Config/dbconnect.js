const mongoose = require("mongoose");
require("dotenv").config();

const localDbURI = process.env.LOCAL_URI;

const dbUri = process.env.DB_URI;
mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(`${dbUri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
