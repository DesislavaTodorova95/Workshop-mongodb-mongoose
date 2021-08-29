const { about } = require("../controllers/about");
const { catalog } = require("../controllers/catalog");
const { create } = require("../controllers/create");
const { post } = require("../controllers/create");
const { details } = require("../controllers/details");
const { notFound } = require("../controllers/notFound");

module.exports = (app) => {
  app.get("/", catalog);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.get("/create", create);
  app.post("/create", post);

  app.all("*", notFound);
};
