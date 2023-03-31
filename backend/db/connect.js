const mongoose = require("mongoose");

//const url = "mongodb://localhost:27017/Clothproducts";

const connectDb = (url) => {
  return mongoose
    .connect(url, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongoDb");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
