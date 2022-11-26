const ProductModel = require("../model/product-model");


const registerModel = (db) => {
  // CommentModel.sync({ force: true });
  ProductModel.sync({ alter: true });
  db.sync({ alert: true });
};

module.exports = registerModel;