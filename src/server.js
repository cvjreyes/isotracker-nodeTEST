const express = require('express');
const app = express();
const config = require('./config.js');

const usersRouter = require('./resources/users/users.router');
app.use('/api/users', usersRouter);

const start = async () => {
    try {
      app.listen(config.port, () => {
        console.log(`REST API on http://localhost:${config.port}/api`);
      });
    } catch (e) {
      console.error(e);
    }
  };
  
  module.exports = {
    start,
  };