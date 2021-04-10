// Bước 1: gọi file kết nối tới mongodb, phải có () để thực thi hàm và  lấy được giá trị của return là đối tượng mongoose
const mongoose = require("../../common/database")();

// Bước 2: sử dụng schema để mô tả collection
const commentSchema = mongoose.Schema(
  {
    prd_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    email: {
      type: String,
      // không được trùng
      unique: true,
    },

    body: {
      type: String,
      default: null,
    },

    full_name: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model(
  "commentModel",
  commentSchema,
  "categories"
);

module.exports = CommentModel;
