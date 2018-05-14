// # Part 4 - Database
// * In src/index.js, import and use mongoose. Connect to a database "advanced-express-practice" 
// * Create the mongoose models for Contact, Vehicle, Comment Product
// * CommentModel - body
// * ContactModel - name, occupation, avatar
// * VehicleModel - year, make, model
// * ProductModel - name, description
// * Change the code in the controllers to use the Models instead of hard coded arrays

let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
   required: true,
   type: String
 },
});

module.exports =  mongoose.model("Products", schema);