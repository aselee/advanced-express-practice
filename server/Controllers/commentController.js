// # Part 3 - Controllers
// * Create controller files 
// * Import the arrays into the controller
// * Take the code from the routes and put it into the controller
// * create functions for list, show and create
// * Import and use the controller functions in the appropiate Router

let comments = require("../Models/commentModel");

module.exports.list =  function list(request, response) {
    commentModel.find({}).exec()
    .then(comments => {
        response.json(comments);
    });
   };
module.exports.show =  function show(request, response) {
    commentModel.findById(request.params.id).exec()
    .then(comments => {
        res.json(comments);
    });
   };
module.exports.create =  function create(request, response) {
    const conComments = new commentModel(request.body);
    conComments.save()
    .then(savedComments => {
        response.json(savedComments);
    });
   };







// module.exports.list =  function list(request, response) {
//     return response.json(comments);
//    }
// module.exports.show =  function show(request, response) {
//     return response.json(comments.find(user => user._id == request.params.id));
//    }
// module.exports.create =  function create(request, response) {
//     const conComments = request.body;
//     comments.push(conComments);
//     return response.json({conComments});
//    };
// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
// module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }