// Bước 1: gọi file kết nối tới mongodb, phải có () để thực thi hàm và  lấy được giá trị của return là đối tượng mongoose
const mongoose = require("../../common/database")();

// Bước 2: sử dụng schema để mô tả collection
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // không được để trống, phải nhập
      required: true,
    },

    // biến tiêu đề từ có dấu thành không dấu và liên kết với nhau bằng dấu gạch ngang
    slug: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// Bước 3: Biến lớp user schema thành Model
// có 3 tham số:
// tham số thứ 1: là bí danh của user khi được mô tả sang dạng model (đặt tên gì cũng được)
// tham số thứ 2: là đối tượng schema mới được khởi tạo
// tham số thứ 3: là tến collection mà schema quản lý
const CategoryModel = mongoose.model("Category", categorySchema, "categories");

module.exports = CategoryModel;
