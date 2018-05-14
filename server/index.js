// # Part 1 - Server

// ### Body
// * Add body parser middleware to express

// ### Create express routes to get all things
// * Add .get() routes for /contacts, /vehicles, /comments, /products
// * response.json() the appropriate array

// ### Create express routes to get one thing
// * Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
// * add a path variable for id
// * use the params.id to .find() the item from the appropriate array
// * response.json() the item found

// ### Create express routes to create one thing
// * Add .post() routes for /contacts, /vehicles, /comments, /products
// * Add the information from the body to the appropriate array

// Once completed, the web page should be able to list out the information, create new information and view one item of the information.


// # Part 2 - Routes
// * Create route files
// * Organize the routes for /contacts, /vehicles, /comments, /products using express Router
// * Import and use the Routers in index.js

// # Part 3 - Controllers
// * Create controller files 
// * Import the arrays into the controller
// * Take the code from the routes and put it into the controller
// * create functions for list, show and create
// * Import and use the controller functions in the appropiate Router

// # Part 4 - Database
// * In src/index.js, import and use mongoose. Connect to a database "advanced-express-practice" 
// * Create the mongoose models for Contact, Vehicle, Comment Product
// * CommentModel - body
// * ContactModel - name, occupation, avatar
// * VehicleModel - year, make, model
// * ProductModel - name, description
// * Change the code in the controllers to use the Models instead of hard coded arrays

let express = require("express");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://aselee:Mminer!7412@ds121950.mlab.com:21950/advanced-express-practice");
const app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());

let ContactRoutes = require("./routes/contactRoutes");
app.use(ContactRoutes);

let VehicleRoutes = require("./routes/vehicleRoutes");
app.use(VehicleRoutes);

let CommentRoutes = require("./routes/commentRoutes");
app.use(CommentRoutes);

let ProductRoutes = require("./routes/productRoutes");
app.use(ProductRoutes);


// Using app.listen to retrieve server
app.listen(2222, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now live on 2222");
    });
