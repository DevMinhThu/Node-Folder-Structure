const UserModel = require("../models/user");

const test = (req, res) => {
  res.render("test");

  // thêm data
  //   const UserInsert = new UserModel({
  //     full_name: "Nguyễn Văn Test",
  //     email: "nguyenvantest@gmail.com",
  //     password: "123456",
  //     role: "member",
  //   });
  //   UserInsert.save();
};

module.exports = {
  test: test,
};
