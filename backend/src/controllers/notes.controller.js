/* Notes: Funciones de Peticiones */

const notesCtrl = {};

// Function: GET - READ (Plural)
notesCtrl.getNotes = (req, res) => res.json({message: []});
// Function: GET - READ (Singular)
notesCtrl.getNote = (req, res) => res.json({title: 'Note Specific since Controller'});
// Function: POST - CREATE
notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved since Controller'});
// Function: PUT - UPDATE
notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated since Controller'});
// Function: DELETE - DELETE
notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted since Controller'});

module.exports = notesCtrl;