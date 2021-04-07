const mongoose = require("mongoose");

// connect voi database vp_shop_project_name
module.exports = () => {
  mongoose.connect("mongodb://localhost/vp_shop_project_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  return mongoose;
};
