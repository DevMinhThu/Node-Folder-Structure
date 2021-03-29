const login = (req, res) => {
  res.render("admin/login", { data: {} });
};

const postLogin = (req, res) => {
  const user = req.body.mail;
  const pass = req.body.pass;
  let err;

  if (user === "" || pass === "") {
    err = "Thông tin không được để trống!";
  } else if (user === "vietpro.edu.vn@gmail.com" && pass === "123456") {
    res.redirect("/admin/dashboard"); // điều hướng tới url khác
  } else {
    err = "Tài khoản không hợp lệ!";
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
