/* ***** Servidor ***** */
require('dotenv').config();

const app = require('./app');
require('colors');

app.set('port', 4000);
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