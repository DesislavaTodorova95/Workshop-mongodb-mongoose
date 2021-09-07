const { post: commentPost } = require("../controllers/comments");
const accessoryController = require("../controllers/accessoryController");

const productController = require("../controllers/productController");
const homeController = require("../controllers/homeController");
const authController = require('../controllers/authController')
module.exports = (app) => {
  app.use("/products", productController);
  app.use("/accessory", accessoryController);
app.use('/auth', authController)
  app.post("/comments/:cubeId/create", commentPost);
  app.use("/", homeController);
};
