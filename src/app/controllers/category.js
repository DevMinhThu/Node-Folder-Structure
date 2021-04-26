const CategoryModel = require("../models/category");
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
  const total = await CategoryModel.find().countDocuments();

  // tính tổng số trang.
  // ví dụ: tính tổng xem có bao nhiêu trang con trong trang user
  const totalPage = Math.ceil(total / limit);

  const categories = await CategoryModel.find().skip(skip).limit(limit);

  res.render("admin/category", {
    categories: categories,
    page: page,
    totalPage: totalPage,
    skip: skip,
    pages: paginate(page, totalPage),
  });
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
