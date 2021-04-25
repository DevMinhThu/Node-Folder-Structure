// import model user vao controller auth
const UserModel = require("../models/user");

const login = (req, res) => {
  /**
   * 2 params:
   * - 1: đường dẫn tới view ejs muốn render
   * - 2: truyền tham số sang bên views ejs, phải xuất ra 1 object.
   */
  res.render("admin/login", { data: {} });
};

// su dung async await xu ly dong bo
const postLogin = async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  let err;

  /**
   * email,password: là tên 2 trường trong collection user
   * lay data tu UserModel va luu vao bien user
   */
  const user = await UserModel.find({ email: mail, password: pass });
  // console.log(user);

  if (user === "" || pass === "") {
    err = "Information cannot be empty!";
  } else if (user.length > 0) {
    res.redirect("/admin"); // điều hướng tới url khác
  } else {
    err = "This account is Invalid!";
  }

  // truyền data err sang cho view để hiển thị ra lỗi
  res.render("admin/login", { data: { error: err } });
};

const logout = (req, res) => {
  res.send("Logout");
};

module.exports = {
  login: login,
  logout: logout,
  postLogin: postLogin,
};
