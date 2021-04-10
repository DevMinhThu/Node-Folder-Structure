const mongoose = require("../../common/database")();

const roomSchema = mongoose.Schema(
  {
    name: {
      type: null,
    },

    type: {
      type: String,
      // không được trùng
      unique: true,
    },

    users: {
      type: Array,
      default: null,
    },
  },
  { timestamps: true }
);

const roomModel = mongoose.model("roomModel", roomSchema, "rooms");

module.exports = roomModel;
