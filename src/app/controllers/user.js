const UserModel = require("../models/user");

const index = async (req, res) => {
  const users = await UserModel.find();
  // console.log(users);

  res.render("admin/user", { users: users });
};

const create = (req, res) => {
  res.render("admin/user/add_user");
};

const edit = (req, res) => {
  res.render("admin/user/edit_user");
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
