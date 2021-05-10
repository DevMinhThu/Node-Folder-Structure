var multer = require("multer");
const config = require("config");

// config folder temp chua file khi upload len (temp: la file tam)
const upload = multer({
  dest: config.get("app").temp,
});

module.exports = upload;
