const express = require("express");
const router = express.Router();

/**===========Authentication============= */
router.get("/admin/login", (req, res) => {
  res.send("Login");
});

router.get("/admin/logout", (req, res) => {
  res.send("Logout");
});

router.get("/admin/dashboard", (req, res) => {
  res.send("Dashboard");
});

/**===========Users============= */
router.get("/admin/users", (req, res) => {
  res.send("User");
});

router.get("/admin/users/create", (req, res) => {
  res.send("Create");
});

router.get("/admin/users/edit/:id", (req, res) => {
  console.log(req.params);
  res.send("Edit user by param id " + req.params.id);
});

router.get("/admin/users/delete/:id", (req, res) => {
  console.log(req.params);
  res.send("Delete user by param id " + req.params.id);
});

/**===========Categories============= */
router.get("/admin/categories", (req, res) => {
  res.send("Categories");
});

router.get("/admin/categories/create", (req, res) => {
  res.send("Create Categories");
});

router.get("/admin/categories/edit/:id", (req, res) => {
  console.log(req.params);
  res.send("Edit category by param id " + req.params.id);
});

router.get("/admin/categories/delete/:id", (req, res) => {
  console.log(req.params);
  res.send("Delete category by param id " + req.params.id);
});

/**===========product============= */
router.get("/admin/products", (req, res) => {
  res.send("products");
});

router.get("/admin/products/create", (req, res) => {
  res.send("Create products");
});

router.get("/admin/products/edit/:id", (req, res) => {
  console.log(req.params);
  res.send("Edit products by param id " + req.params.id);
});

router.get("/admin/products/delete/:id", (req, res) => {
  console.log(req.params);
  res.send("delete products by param id " + req.params.id);
});

module.exports = router;
