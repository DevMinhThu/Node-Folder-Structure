const express = require("express");
const router = express.Router();

// controller
const Auth = require("../app/controllers/auth");
const Admin = require("../app/controllers/admin");
const User = require("../app/controllers/user");
const Categories = require("../app/controllers/category");
const Product = require("../app/controllers/product");
const Test = require("../app/controllers/test");

// middleware
const uploadMiddleware = require("../app/middlewares/upload");
const authMiddleware = require("../app/middlewares/auth");

// === test ===
router.get("/test", Test.test);

/**===========Authentication============= */
router.get("/admin/login", authMiddleware.checkLogin, Auth.login);
// res data from method post in form of file auth.js
router.post("/admin/login", authMiddleware.checkLogin, Auth.postLogin);

router.get("/admin/logout", authMiddleware.checkAdmin, Admin.logout);

router.get("/admin", authMiddleware.checkAdmin, Admin.dashboard);

/**===========Users============= */
router.get("/admin/users", authMiddleware.checkAdmin, User.index);

router.get("/admin/users/create", authMiddleware.checkAdmin, User.create);

router.get("/admin/users/edit/:id", authMiddleware.checkAdmin, User.edit);

router.get("/admin/users/delete/:id", authMiddleware.checkAdmin, User.delete);

/**===========Categories============= */
router.get("/admin/categories", authMiddleware.checkAdmin, Categories.index);

router.get(
  "/admin/categories/create",
  authMiddleware.checkAdmin,
  Categories.create
);

router.get(
  "/admin/categories/edit/:id",
  authMiddleware.checkAdmin,
  Categories.edit
);

router.get(
  "/admin/categories/delete/:id",
  authMiddleware.checkAdmin,
  Categories.delete
);

/**===========product============= */
router.get("/admin/products", authMiddleware.checkAdmin, Product.index);

router.get("/admin/products/create", authMiddleware.checkAdmin, Product.create);
router.post(
  "/admin/products/store",
  authMiddleware.checkAdmin,
  uploadMiddleware.single("thumbnail"), // single: upload 1 file
  Product.store
);

router.get("/admin/products/edit/:id", authMiddleware.checkAdmin, Product.edit);

router.get(
  "/admin/products/delete/:id",
  authMiddleware.checkAdmin,
  Product.delete
);

module.exports = router;
