const ProductModel = require("../models/product");
const UserModel = require("../models/user");

const dashboard = async (req, res) => {
  /* 
    - Truoc khi de co the vao dashboard
    - Ta can kiem tra phien dang nhap
    - Neu khong ton tai mail va pass thi redirect ve login
    - Nguoc lai thi cho vao dashboard
    */
  if (!req.session.mail || !req.session.pass) {
    return redirect("/admin/login");
  }

  // lay ra tong so products tren database
  const products = await ProductModel.find();
  const totalProducts = products.length;

  const users = await UserModel.find();
  const totalUsers = users.length;

  res.render("admin/index", { totalProducts, totalUsers });
};

const logout = (req, res) => {
  /*  
		- Khi dang xuat ta can huy session
	*/
  req.session.destroy();

  return res.redirect("/admin/login");
};

module.exports = {
  dashboard: dashboard,
  logout: logout,
};
