const ProductModel = require("../models/product");
const paginate = require("../../common/paginate");

const index = async (req, res) => {
  // lấy trang hiện tại, nếu không có thì là trang 1
  const page = parseInt(req.query.page) || 1;

  // giới hạn số phần tử trên 1 trang
  const limit = 10;

  // tính số phần tử sẽ bỏ qua
  // ví dụ: mỗi trang có 3 phần tử, nếu muốn sang trang thứ 2 thì ta phải bỏ qua 3 phần tử
  const skip = page * limit - limit;

  // lấy ra tổng số phần tử
  const total = await ProductModel.find().countDocuments();

  // tính tổng số trang.
  // ví dụ: tính tổng xem có bao nhiêu trang con trong trang user
  const totalPage = Math.ceil(total / limit);

  const products = await ProductModel.find()
    .populate({ path: "cat_id" })
    .skip(skip)
    .limit(limit);
  // console.log(products);

  res.render("admin/product", {
    products: products,
    page: page,
    totalPage: totalPage,
    skip: skip,
    pages: paginate(page, totalPage),
  });
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
