const checkLogin = (req, res, next) => {
  // kiem tra neu ton tai session mail va pass thi cho vao trang chu
  if (req.session.mail && req.session.pass) {
    return res.redirect("/admin");
  }
  next();
  /* 
    - Cơ chế: sau khi thực hiện các kiểm tra bên trên. 
    - thì hàm next() sẽ được gọi tới va chuyển hướng đến controller thực hiện
  */
};

const checkAdmin = (req, res, next) => {
  /* 
    - Check quyen Admin. 
    - Neu co session thi moi duoc truy cap vao cac page de xem thong tin
    - Neu khong ton tai session thi redirect ve login
*/
  if (!req.session.mail && !req.session.pass) {
    return res.redirect("/admin/login");
  }
  next();
};

module.exports = {
  checkAdmin: checkAdmin,
  checkLogin: checkLogin,
};
