const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

///////////////////////////////////////////////
//                Local Import               //
/////////////////////////////////////////////*/
const ConnectDB = require("./Config/dbconnect");
const ServiceRouter = require("./Router/ServiceRouter");
const ProductRouter = require("./Router/ProductRouter");
const CategoryRouter = require("./Router/CategoryRouter");
const UserRouter = require("./Router/UserRouter");
const BrandRouter = require("./Router/BrandRouter");
const BrandSliderRouter = require("./Router/BrandSliderRouter");
const BlogRouter = require("./Router/BlogRouter");
const PhotoGelaryRouter = require("./Router/PhotoGelaryRouter");
const TestDriveRouter = require("./Router/TestDriveRouter");  
const PaymnetRouter = require("./Router/PayementRouter")

///////     End of Local Import      ////////

///////////////////////////////////////////////
//           Middilwaire Use                 //
/////////////////////////////////////////////*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// =========== //

app.use("/api", ServiceRouter);
app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", UserRouter);
app.use("/api", BrandRouter);
app.use("/api", BrandSliderRouter);
app.use("/api", BlogRouter);
app.use("/api", PhotoGelaryRouter);
app.use("/api", TestDriveRouter);
app.use("/api", PaymnetRouter);

///////     End of Middilwaire Use    ////////

///////////////////////////////////////////////
//           DB Connection And Local         //
/////////////////////////////////////////////*/

app.get("/api/v1", (req, res) => {
  res.send("Hey Wellcome to API Server");
});

ConnectDB()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Cannot connect to database", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

///////  End of DB Connection And Local  ////////
