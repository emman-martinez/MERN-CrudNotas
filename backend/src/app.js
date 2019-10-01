/* ***** Express ***** */

const express = require('express');
const app = express();
const cors = require('cors'); // Permite la comunicación entre 2 servidores
const json = express.json();

// Settings: Configurar Servidor
app.set('port', process.env.PORT || 4000);

// Middleware: Definir funciones para ejecutar antes de que lleguen las rutas
app.use(cors());
app.use(json);

// Routes: urls que la aplicación puede visitar
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));


module.exports = app;