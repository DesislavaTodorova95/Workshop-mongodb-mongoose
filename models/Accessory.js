const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true, maxlength: 500 },
  imageUrl: { type: String, require: true, match: /^https?:\/\// },
});
module.exports = model("Accessory", schema);
