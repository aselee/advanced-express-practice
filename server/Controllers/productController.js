// # Part 3 - Controllers
// * Create controller files 
// * Import the arrays into the controller
// * Take the code from the routes and put it into the controller
// * create functions for list, show and create
// * Import and use the controller functions in the appropiate Router

let comments = require("../Models/productModel");

module.exports.list =  function list(request, response) {
    productModel.find({}).exec()
    .then(products => {
        response.json(products);
    });
   };
module.exports.show =  function show(request, response) {
    productModel.findById(request.params.id).exec()
    .then(products => {
        res.json(products);
    });
   };
module.exports.create =  function create(request, response) {
    const conProducts = new productModel(request.body);
    conProducts.save()
    .then(savedProducts => {
        response.json(savedProducts);
    });
   };


// module.exports.list =  function list(request, response) {
//     return response.json([products]);
//    }
// module.exports.show =  function show(request, response) {
//     return response.json(products.find(user => user._id == request.params.id));
//    }
// module.exports.create =  function create(request, response) {
//     const conProducts = request.body;
//     comments.push(conProducts);
//     return response.json({conProducts});
//    };
// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
// module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }