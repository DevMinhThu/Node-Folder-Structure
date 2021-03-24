const index = (req, res) => {
  res.send("Index user");
};

const create = (req, res) => {
  res.send("create user");
};

const edit = (req, res) => {
  res.send("edit user");
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  delete: deleteUser,
};
