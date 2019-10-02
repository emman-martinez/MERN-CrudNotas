/* Notes: Funciones de Peticiones */

const notesCtrl = {};

const Note = require('./../models/Note');

// Function: GET - READ (Plural)
notesCtrl.getNotes = async(req, res) => {
    const notes = await Note.find(); // Devuelve arreglo con todas las notas de la Base de Datos
    res.json(notes);
};
// Function: GET - READ (Singular)
notesCtrl.getNote = async(req, res) => {
    //console.log(req.params.id); // req.params => Datos que envia el servidor
    const id = req.params.id;
    const note = await Note.findById(id); // Mongoose => findById() => Busca Id en base de datos
    //console.log(note);
    res.json(note)
};
// Function: POST - CREATE
notesCtrl.createNote = async(req, res) => {
    // console.log(req.body); // req.body => Datos que envia el cliente
    const { title, content, author, date } = req.body;
    //console.log(title, content, author, date);
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    })
    console.log(newNote);
    await newNote.save(); // Mongoose => save => guardar en base de datos
    res.json({ message: 'Note Saved' });
};
// Function: PUT - UPDATE
notesCtrl.updateNote = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const { title, content, author } = req.body;
    console.log(id, body);
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    });
    res.json({ message: 'Note Updated since Controller' });
};
// Function: DELETE - DELETE
notesCtrl.deleteNote = async(req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id); // Mongoose => findByIdAndDelete() => Eliminar en base de datos
    res.json({ message: 'Note Deleted since Controller' });
};

module.exports = notesCtrl;