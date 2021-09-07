const { about } = require("../controllers/about");


const { post: commentPost } = require("../controllers/comments");

const { attach, attachPost } = require("../controllers/details");
const accessoryController = require('../controllers/accessoryController')
const { notFound } = require("../controllers/notFound");
const productController = require('../controllers/productController');

module.exports = (app) => {
  app.get("/", (req, res)=>res.redirect('/products'));
  app.get("/about", about);
  app.use("/products", productController);
  app.use("/accessory", accessoryController)
 
  app.get("/details/:id/attach", attach);
  // app.get("/accessory/create", createAccessory);
  // app.post("/accessory/create", postAccessory);
  app.post("/details/:cubeId/attach", attachPost);

  
 
  app.post("/comments/:cubeId/create", commentPost);
  app.all("*", notFound);
};
