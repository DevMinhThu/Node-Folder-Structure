const ProductModel = require("../models/product");

const index = async (req, res) => {
  const products = await ProductModel.find().populate({ path: "cat_id" });
  // console.log(products);

  res.render("admin/product", { products: products });
};

const create = (req, res) => {
  res.render("admin/product/add_product");
};

const edit = (req, res) => {
  console.log(req.params);
  res.render("admin/product/edit_product");
};

const deleteProduct = (req, res) => {
  res.send("delete product");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  delete: deleteProduct,
};
