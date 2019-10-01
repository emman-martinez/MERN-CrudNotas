/* Users: Funciones de Peticiones */

const usersCtrl = {};

// Function: GET - READ (Plural)
usersCtrl.getUsers = (req, res) => res.json({message: []});
// Function: GET - READ (Singular)
usersCtrl.getUser = (req, res) => res.json({title: 'User Specific since Controller'});
// Function: POST - CREATE
usersCtrl.createUser = (req, res) => res.json({message: 'User Saved since Controller'});
// Function: PUT - UPDATE
usersCtrl.updateUser = (req, res) => res.json({message: 'User Updated since Controller'}); 
// Function: DELETE - DELETE
usersCtrl.deleteUser = (req, res) => res.json({message: 'User Deleted since Controller'});

module.exports = usersCtrl;