const UserModel = require("../models/user");
const paginate = require("../../common/paginate");

const index = async (req, res) => {
  // lấy trang hiện tại, nếu không có thì là trang 1
  const page = parseInt(req.query.page) || 1;

  // giới hạn số phần tử trên 1 trang
  const limit = 3;

  // tính số phần tử sẽ bỏ qua
  // ví dụ: mỗi trang có 3 phần tử, nếu muốn sang trang thứ 2 thì ta phải bỏ qua 3 phần tử
  const skip = page * limit - limit;

  // lấy ra tổng số phần tử
  const total = await UserModel.find().countDocuments();

  // tính tổng số trang.
  // ví dụ: tính tổng xem có bao nhiêu trang con trong trang user
  const totalPage = Math.ceil(total / limit);

  const users = await UserModel.find().skip(skip).limit(limit);

  res.render("admin/user", {
    users: users,
    page: page,
    totalPage: totalPage,
    skip: skip,
    pages: paginate(page, totalPage),
  });
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
