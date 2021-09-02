const { about } = require('../controllers/about');
const { catalog } = require('../controllers/catalog');
const {post: commentPost} = require('../controllers/comments')
const { create, post: createPost } = require('../controllers/create');
const { details } = require('../controllers/details');
const { edit, post: editPost } = require('../controllers/edit');
const { notFound } = require('../controllers/notFound');

module.exports = (app) => {

  app.get("/", catalog);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.get("/create", create);
  app.get("/edit/:id", edit)
  app.post("/create", createPost);
app.post("/edit/:id", editPost);
app.post('/comments/:cubeId/create', commentPost)
  app.all("*", notFound);
};
