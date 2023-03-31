require("dotenv").config();

const connectDB = require("./db/connect");
const clothsProduct = require("./models/clothsProduct");
const ClothsProduct = require("./models/clothsProduct");

const clothsProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    await clothsProduct.deleteMany();
    await ClothsProduct.create(clothsProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
