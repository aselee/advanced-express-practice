// # Part 3 - Controllers
// * Create controller files 
// * Import the arrays into the controller
// * Take the code from the routes and put it into the controller
// * create functions for list, show and create
// * Import and use the controller functions in the appropiate Router

let comments = require("../Models/contactModel");

module.exports.list =  function list(request, response) {
    contactModel.find({}).exec()
    .then(contacts => {
        response.json(contacts);
    });
   };
module.exports.show =  function show(request, response) {
    contactModel.findById(request.params.id).exec()
    .then(contacts => {
        res.json(contacts);
    });
   };
module.exports.create =  function create(request, response) {
    const conContacts = new contactModel(request.body);
    conContacts.save()
    .then(savedContacts => {
        response.json(savedContacts);
    });
   };



// module.exports.list =  function list(request, response) {
//     return response.json([contacts]);
//    }
// module.exports.show =  function show(request, response) {
//     return response.json(contacts.find(user => user._id == request.params.id));
//    }
// module.exports.create =  function create(request, response) {
//     const conContact = request.body;
//     contacts.push(conContact);
//     return response.json({conContact});
//    };
// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
// module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }