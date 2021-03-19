const express = require("express");
const handlerRouter = require("../routers");

// create app from express
const app = express();

app.use(handlerRouter);
app.listen((port = 3000), () => {
  console.log("Server running on port " + port);
});
