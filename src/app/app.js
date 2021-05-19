const express = require("express");
const handlerRouter = require("../routers");
const config = require("config");
const session = require("express-session");

// create app from express
const app = express();

// config ejs template engine
app.set("views", config.get("app").views_folder);
app.set("view engine", config.get("app").view_engine);

// setup file static (css/html)
app.use("/static", express.static(config.get("app").static_folder));

// read type data in form: 2 type text - json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config session
app.set("trust proxy", 1); // trust first proxy
app.use(
    session({
        secret: config.get("app").session_key,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: config.get("app").session_secure },
    })
);

app.use(handlerRouter);

// export app để file server www.js sử dụng
module.exports = app;