const express = require("express");

const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const auth = require("../middlewares/auth");
module.exports = (app) => {
  app.engine(
    "hbs",
    hbs({
      extname: ".hbs",
    })
  );
  app.set("view engine", "hbs");
  //setup static files
  app.use("/static/", express.static("static"));
  app.use("/js", express.static("js"));
  //setup storage middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(auth());
};
