// Bước 1: gọi file kết nối tới mongoose, phải có () để có thể sử dụng dược đối tượng mongoose
const mongoose = require("../../common/database")();

// Bước 2: sử dụng schema để mô tả collection muốn ánh xạ
const userSchema = mongoose.Schema({
  full_name: {
    type: String,

    // không được để trống
    default: null,
  },

  email: {
    type: String,
    // không được trùng
    unique: true,
  },

  password: {
    type: String,
    default: null,
  },

  role: {
    type: String,
    // người dùng chỉ được phép nhập giá trị thuộc tập mảng enum
    enum: ["member", "admin"],
    default: "member",
  },
});

// Bước 3: Chuyển lớp user schema thành model
const UserModel = mongoose.model("userModel", userSchema, "users");

module.exports = UserModel;
