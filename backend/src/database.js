/* ***** Conexión a Base de Datos: MongoDB ***** */
const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mernstack'; 
//const URI = 'mongodb://localhost:27017/mernstack';
//console.log(process.env.MONGODB_URI);

const URI = process.env.MONGODB_URI ?
    process.env.MONGODB_URI :
    'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is Connected'.cyan);
});