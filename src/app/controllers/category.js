const index = (req, res) => {
  res.send("Index categories");
};

const create = (req, res) => {
  res.send("create categories");
};

const edit = (req, res) => {
  res.send("edit categories");
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
