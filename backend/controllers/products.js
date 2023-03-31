const ClothProduct = require("../models/clothsProduct");

const getAllProducts = async (req, res) => {
  const myData = await ClothProduct.find({});
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
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

  console.log(req.query);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

module.exports = { getAllProducts, getAllProductsTesting };
