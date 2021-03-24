const express = require("express");
const handlerRouter = require("../routers");

// create app from express
const app = express();

// read type data in form: 2 type text - json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(handlerRouter);

// export app để file server www.js sử dụng
module.exports = app;
