/*•	Id - number
•	Name - string
•	Description - string 
•	Image URL - string
•	Difficulty Level - number


•	Name - (String, required)
•	Description - (String, required, max length validation)
•	ImageUrl - (String, required, http/https validation)
•	Difficulty Level - (Number, required, min and max valid range)
•	Accessories - (ObjectId, ref Accessories Model)
*/

const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficulty: Number
});

module.exports= model('Cube', schema)