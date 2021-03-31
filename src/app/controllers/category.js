const index = (req, res) => {
  res.render("admin/category");
};

const create = (req, res) => {
  res.render("admin/add_category");
};

const edit = (req, res) => {
  res.render("admin/edit_category");
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
