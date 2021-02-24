/* const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.json());

// Routes
//app.use(require('./routes/users'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
}) */
const { start } = require('./server');
var path = require('path');
global.appRoot = path.resolve(__dirname);

start();
