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
const [ users, notes ] = [require('./routes/users'), require('./routes/notes')];
app.use('/api/users', users);
app.use('/api/notes', notes); 


module.exports = app;