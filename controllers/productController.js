const {Router} = require('express');
const router = Router();


router.get('/', async (req, res) => {
    const cubes = await req.storage.getAll(req.query);
    const ctx = {
      title: "Cubicle",
      cubes,
      search: req.query.search || "",
      from: req.query.from || "",
      to: req.query.to || "",
    };
    res.render("index", ctx);
  });
router.get('/create',  (req, res) => {
    res.render("create", { title: "Create CUBE" });
  });
  router.post('/create', async (req, res) => {
    const cube = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      difficulty: Number(req.body.difficulty),
    };
    try {
      await req.storage.create(cube);
    } catch (err) {
      if (err.name == "ValidationError") {
        return res.render("create", {
          title: "Create Cube",
          error: "All fields are required. Image URL must be a valid URL",
        });
      }
    }
    res.redirect("/");
  });
  router.get('/details', async (req, res) => {
    const cube = await req.storage.getById(req.params.id);

    if (cube == undefined) {
      res.redirect("/404");
    } else {
      const ctx = {
        title: "Cubicle",
        cube,
      };
      res.render("details", ctx);
    }
  });

module.exports = router