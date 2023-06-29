const mongoose = require("mongoose");
require("dotenv").config();

const localDbURI = process.env.LOCAL_URI;

const dbUri = process.env.DB_URI || localDbURI;
mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(`${localDbURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
