const express = require("express");
const expressConfig = require("./config/express");
const databaseConfig = require("./config/database");
const routeConfig = require("./config/routs");
const  storage = require("./middlewares/storage");
const logger = require("./middlewares/logger");

start();

async function start() {
  const port = 3000;
  const app = express();
app.use(logger())
await databaseConfig(app);
  expressConfig(app);
  
  app.use(await storage());
  routeConfig(app);

  app.listen(port, () => {
    console.log(">> Server listening on port", port);
  });
}
