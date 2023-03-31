const mongoose = require("mongoose");

const clothProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
  },
  reviews: {
    type: Number,
    default: 4.9,
  },
  stars: {
    type: Number,
    default: 5,
  },
  description: {
    type: String,
    required: true,
  },
  dealOfTheDay: {
    type: Boolean,
    required: false,
  },
  topMens: {
    type: Boolean,
    required: false,
  },
  bestSellers: {
    type: Boolean,
    required: false,
  },
  newArivals: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("ClothProduct", clothProductSchema);
