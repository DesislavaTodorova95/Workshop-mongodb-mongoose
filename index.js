const express = require("express");

const hbs = require("express-handlebars");

const { init: storage } = require("./models/storage");

start();

async function start() {
  const port = 3000;
  const app = express();
 
  app.use(await storage());
  //set route handlers/controllers
 
  app.listen(port, () => {
    console.log(">> Server listening on port", port);
  });
}
