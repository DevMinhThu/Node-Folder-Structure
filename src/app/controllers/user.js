const index = (req, res) => {
  res.render("admin/user");
};

const create = (req, res) => {
  res.render("admin/add_user");
};

const edit = (req, res) => {
  res.render("admin/edit_user");
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
