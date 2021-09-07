const express = require("express");
const expressConfig = require("./config/express");
const databaseConfig = require("./config/database");
const routeConfig = require("./config/routs");
const { init: storage } = require("./middlewares/storage");

start();

async function start() {
  const port = 3000;
  const app = express();

  expressConfig(app);
  await databaseConfig(app);
  app.use(await storage());
  routeConfig(app);

  app.listen(port, () => {
    console.log(">> Server listening on port", port);
  });
}
