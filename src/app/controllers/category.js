const CategoryModel = require("../models/category");

const index = async (req, res) => {
  const categories = await CategoryModel.find();

  res.render("admin/category", { categories: categories });
};

const create = (req, res) => {
  res.render("admin/category/add_category");
};

const edit = (req, res) => {
  res.render("admin/category/edit_category");
};

const deleteCategory = (req, res) => {
  res.send("delete categories");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  delete: deleteCategory,
};
