/* Users: Funciones de Peticiones */

const usersCtrl = {};

const User = require('./../models/User');

// Function: GET - READ (Plural)
usersCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
};
// Function: GET - READ (Singular)
usersCtrl.getUser = (req, res) => res.json({ title: 'User Specific since Controller' });
// Function: POST - CREATE
usersCtrl.createUser = async(req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({ message: 'User Created' });
};
// Function: PUT - UPDATE
usersCtrl.updateUser = (req, res) => res.json({ message: 'User Updated since Controller' });
// Function: DELETE - DELETE
usersCtrl.deleteUser = async(req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User Deleted' })
};

module.exports = usersCtrl;