const index = (req, res) => {
  res.send("Index product");
};

const create = (req, res) => {
  res.send("create product");
};

const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit product.");
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
