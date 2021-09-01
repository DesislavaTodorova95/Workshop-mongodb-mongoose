const Cube = require("../models/Cube");

async function init() {
  return (req, res, next) => {
    req.storage = {
      getAll,
      getById,
      create,
      edit,
    };
    next();
  };
}

async function getAll(query) {
  
const options = {};

  // filter cubes
  if (query.search) {
    options.name = { $regex: query.search, $options: 'i'};
 
  }
  if (query.from) {
    options.difficulty = {$gte: Number(query.from)}
   
  if (query.to) {
    options.difficulty = options.difficulty || {}
    options.difficulty.$lte = Number(query.to);

    }
    options.difficulty = {$lte: Number(query.to)}
   
  }
  const cubes = Cube.find(options).lean();
  return cubes;
}

async function getById(id) {
  const cube = await Cube.findById(id).lean();

  if (cube) {
    return cube;
  } else {
    return undefined;
  }
}
async function edit(id, cube) {
  const existingC = await Cube.findById(id);

  if (!existingC) {
    throw new ReferenceError("No such ID in database");
  }
  Object.assign(existingC, cube);
  return existingC.save();
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
