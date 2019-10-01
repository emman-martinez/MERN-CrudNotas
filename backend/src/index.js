/* ***** Servidor ***** */
require('dotenv').config();
require('colors');

const app = require('./app');
const port = app.get('port');

require('./database');

const main = async() => {
    // app.listen(app.get('port'), () => {
    //     console.log('Server on Port', app.get('port'));
    // });
    await app.listen(port);
    console.log('Server on Port'.cyan, port);
}

main();