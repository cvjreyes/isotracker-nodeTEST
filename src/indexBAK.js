const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./resources/users/users.model'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})