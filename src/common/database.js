const mongoose = require("mongoose");

// connect voi database vietpro_mongodb
module.exports = () => {
    mongoose.connect("mongodb://localhost/vp_shop_project_name", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    return mongoose;
};