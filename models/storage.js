//load data file
//provide ability to
//-read all entries
//-read single entry by ID
//-add new entry
//**bonus get matching entries by search criteria */
const fs = require("fs/promises");
const uniqid = require("uniqid");
let data = {};

/*model structure 
{
    "tkofsd": {
   "Name": "string",
   "Description": "string", 
   "Image URL": "string",
   "Difficulty Level": "number"

    }
} */
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
  if(query.search){
    cubes = cubes.filter(c=> c.name.toLowerCase().includes(query.search.toLowerCase()))
  }
  if(query.from){
    cubes = cubes.filter(c=> c.difficulty >=query.from)
  }
  if(query.to){
    cubes = cubes.filter(c=> c.difficulty <= query.to)
  }
  return cubes; 
}

async function getById(id) {
  return data[id];
}
async function create(cube) {
  const id = uniqid();
  data[id] = cube;
  try {
    fs.writeFile("./models/data.json", JSON.stringify(data, null, 2));
    console.log(">> created new record");
  } catch (err) {
    console.error("Error writing out database");
  }
}

module.exports = {
  init,
  getAll,
  getById,
  create,
};
