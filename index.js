const express = require('express')
const expressConfig = require('./config/express');
const routeConfig = require('./config/routs');
const { init: storage } = require('./models/storage');

start();

async function start() {
  const port = 3000;
  const app = express();
  
  expressConfig(app);
  app.use(await storage());
  routeConfig(app);

  
 
  app.listen(port, () => {
    console.log(">> Server listening on port", port);
  });
}
