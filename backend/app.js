require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

const connectDb = require("./db/connect");

const product_routes = require("./routes/products");

/*
app.get("/", (req, res) => {
  res.send("Live now.");
});*/

app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_DB);
    app.listen(PORT, () => {
      console.log(`${PORT} connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
