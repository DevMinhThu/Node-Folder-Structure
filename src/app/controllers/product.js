const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");
const paginate = require("../../common/paginate");
const slug = require("slug");
const fs = require("fs");
const path = require("path");

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
    .limit(limit)
    .sort({ _id: -1 }); // sap xep giam dan theo _id
  // console.log(products);

  res.render("admin/product", {
    products: products,
    page: page,
    totalPage: totalPage,
    skip: skip,
    pages: paginate(page, totalPage),
  });
};

// add product
const create = async (req, res) => {
  const categories = await CategoryModel.find();

  res.render("admin/product/add_product", { categories: categories });
};

const store = async (req, res) => {
  /* 
    - sau khi thuc thi middleware xong 
    -> thuc hien hanh dong chuyen file upload 
    trong thu muc temp ve thu muc da dinh san.
  */

  // cu phap cua multer chu kp cua bodyparser
  const body = req.body; // lay thong tin cua form
  const file = req.file; // lay thong tin file upload
  // console.log("This is body: ", body);
  // console.log("This is file: ", file);

  const product = {
    description: body.description,
    cat_id: body.cat_id,
    price: body.price,
    status: body.status,
    featured: body.featured === "on",
    promotion: body.promotion,
    warranty: body.warranty,
    accessories: body.accessories,
    is_stock: body.is_stock,
    name: body.name,
    slug: slug(body.name),
  };

  if (file) {
    // vao thu muc products/ + name_img
    const thumbnail = "products/" + file.originalname;

    /* 
    // them 1 truong vao trong object product, 
    Cu phap: name_Object["key"] = value. (key: la ten truong se xuat hien trong db)
    Ex: Them truong prd_image voi gia tri la prd_image
    */

    product["thumbnail"] = thumbnail;

    // chuyen file img nhan duoc vao thu muc mong muon
    fs.renameSync(file.path, path.resolve("src/public/images/" + thumbnail));
  }

  const data = new ProductModel(product);
  console.log(data);
  data.save();

  res.redirect("/admin/products");
};

// edit product
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
  store: store,
};
