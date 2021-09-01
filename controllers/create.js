module.exports = {
  create: (req, res) => {
    res.render("create", { title: "Create CUBE" });
  },
  post: async (req, res) => {
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
  },
};
