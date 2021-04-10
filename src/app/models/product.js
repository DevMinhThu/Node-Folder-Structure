const mongoose = require("../../common/database")();

const productSchema = mongoose.Schema(
  {
    cat_id: {
      type: mongoose.Types.ObjectId,
      // ref: gọi tới bí danh trong model của collection(bảng) mà product liên kết
      ref: "Category",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: null,
    },

    thumbnail: {
      type: String,
      default: null,
    },

    price: {
      type: Number,
      default: 0,
    },

    // trạng thái tình trạng của hàng
    status: {
      type: String,
      default: null,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    promotion: {
      type: String,
      default: null,
    },

    warranty: {
      type: String,
      default: null,
    },

    accessories: {
      type: String,
      default: null,
    },

    // trạng thái hàng còn hay không
    is_stock: {
      type: Boolean,
      default: true,
    },
  },
  {
    // sẽ tự tạo ra thêm 2 trường createdAt, updatedAt
    timestamps: true,
  }
);

// chuyển thành model
const productModel = mongoose.model("Product", productSchema, "products");

module.exports = productModel;
