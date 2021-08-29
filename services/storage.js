const Cube = require('../models/Cube')
const fs = require("fs/promises");
const uniqid = require("uniqid");
let data = {};

async function init() {
  try {
    data = JSON.parse(await fs.readFile("./models/data.json"));
  } catch (err) {
    console.error("Error reading database");
  }
  return (req, res, next) => {
    req.storage = {
      getAll,
      getById,
      create,
    };
    next();
  };
}

async function getAll(query) {
  let cubes = Object.entries(data).map(([id, v]) =>
    Object.assign({}, { id }, v)
  );

  //filter cubes
  if (query.search) {
    cubes = cubes.filter((c) =>
      c.name.toLowerCase().includes(query.search.toLowerCase())
    );
  }
  if (query.from) {
    cubes = cubes.filter((c) => c.difficulty >= query.from);
  }
  if (query.to) {
    cubes = cubes.filter((c) => c.difficulty <= query.to);
  }
  return cubes;
}

async function getById(id) {
  return data[id];
}
async function create(cube) {
  const record = new Cube(cube);
  return record.save();
}

module.exports = {
  init,
  getAll,
  getById,
  create,
};
