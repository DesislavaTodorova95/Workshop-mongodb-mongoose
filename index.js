const express = require("express");
//setup handlebars
const hbs = require("express-handlebars");
const { about } = require("./controllers/about");
const { catalog } = require("./controllers/catalog");
const { create } = require("./controllers/create");
const { post } = require("./controllers/create");
const { details } = require("./controllers/details");
const { notFound } = require("./controllers/notFound");
const { init: storage } = require("./models/storage");

start();

async function start() {
  const port = 3000;
  const app = express();
  app.engine(
    "hbs",
    hbs({
      extname: ".hbs",
    })
  );
  app.set("view engine", "hbs");
  //setup static files
  app.use("/static/", express.static("static"));
  app.use('/js', express.static('js'))
  //setup storage middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(await storage());
  
  //set route handlers/controllers
  app.get("/", catalog);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.get("/create", create);
  app.post("/create", post);

  app.all("*", notFound);

  app.listen(port, () => {
    console.log(">> Server listening on port", port);
  });
}
