const ProductModel = require("../models/product");
const UserModel = require("../models/user");

const dashboard = async (req, res) => {
  // lay ra tong so products tren database
  const products = await ProductModel.find();
  const totalProducts = products.length;

  const users = await UserModel.find();
  const totalUsers = users.length;

  res.render("admin/index", { totalProducts, totalUsers });
};

module.exports = {
  dashboard: dashboard,
};
