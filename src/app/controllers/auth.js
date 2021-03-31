const login = (req, res) => {
  /**
   * 2 params:
   * - 1: đường dẫn tới view ejs muốn render
   * - 2: truyền tham số sang bên views ejs, phải xuất ra 1 object.
   */
  res.render("admin/login", { data: {} });
};

const postLogin = (req, res) => {
  const user = req.body.mail;
  const pass = req.body.pass;
  let err;

  if (user === "" || pass === "") {
    err = "Information cannot be empty!";
  } else if (user === "vietpro.edu.vn@gmail.com" && pass === "123456") {
    res.redirect("/admin/dashboard"); // điều hướng tới url khác
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
