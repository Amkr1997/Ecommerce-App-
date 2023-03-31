const ClothProduct = require("../models/clothsProduct");

const getAllProducts = async (req, res) => {
  const {
    stock,
    color,
    category,
    subCategory,
    name,
    price,
    reviews,
    stars,
    bestSellers,
    topMens,
    newArivals,
    dealOfTheDay,
    sort,
    select,
  } = req.query;

  const queryObject = {};

  if (stock) {
    queryObject.stock = stock;
    console.log(queryObject.stock);
  }

  if (color) {
    queryObject.color = color;
    console.log(queryObject.color);
  }

  if (category) {
    queryObject.category = category;
    console.log(queryObject.category);
  }

  if (subCategory) {
    queryObject.subCategory = subCategory;
    console.log(queryObject.subCategory);
  }

  if (name) {
    queryObject.name = name;
    console.log(queryObject.name);
  }

  if (reviews) {
    queryObject.reviews = reviews;
    console.log(queryObject.reviews);
  }

  if (price) {
    queryObject.price = pricey;
    console.log(queryObject.price);
  }

  if (price) {
    queryObject.price = price;
    console.log(queryObject.price);
  }

  if (stars) {
    queryObject.stars = stars;
    console.log(queryObject.stars);
  }

  if (dealOfTheDay) {
    queryObject.dealOfTheDay = dealOfTheDay;
    console.log(queryObject.dealOfTheDay);
  }

  if (topMens) {
    queryObject.topMens = topMens;
    console.log(queryObject.topMens);
  }

  if (newArivals) {
    queryObject.newArivals = newArivals;
    console.log(queryObject.newArivals);
  }

  if (bestSellers) {
    queryObject.bestSellers = bestSellers;
    console.log(queryObject.bestSellers);
  }

  let apiData = ClothProduct.find(queryObject);

  if (sort) {
    let sortFix = sort.replaceAll(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.replaceAll(",", " ");
    apiData = apiData.select(selectFix);
  }

  let page = +req.query.page || 1;
  let limit = +req.query.limit || 10;

  let skip = (page - 1) * limit;

  if (skip) {
    apiData = apiData.skip(skip).limit(limit);
  }

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  /*
  const { stock, color, dealOfTheDay, sort, select } = req.query;
  const queryObject = {};

  if (stock) {
    queryObject.stock = stock;
    console.log(queryObject.stock);
  }

  if (color) {
    queryObject.color = { $regex: color, $options: "i" };
    console.log(queryObject.color);
  }

  if (dealOfTheDay) {
    queryObject.dealOfTheDay = dealOfTheDay;
    console.log(queryObject.dealOfTheDay);
  }

  let apiData = ClothProduct.find(queryObject);

  if (sort) {
    let sortFix = sort.replaceAll(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.replaceAll(",", " ");
    apiData = apiData.select(selectFix);
  }

  let page = +req.query.page;
  let limit = +req.query.limit;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(req.query);*/

  const myData = await ClothProduct.find({});
  res.status(200).json({ msg: "my tested data" });
};

module.exports = { getAllProducts, getAllProductsTesting };
