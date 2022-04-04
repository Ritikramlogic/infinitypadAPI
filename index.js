const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

var corsOptions = {
  origin: "*",
};
//Middlware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PORT
const port = process.env.PORT;

// databse connection
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//Routes
require("./Routes/index")(app);

// Listening PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
