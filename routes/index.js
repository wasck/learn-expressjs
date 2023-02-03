var express = require('express');
var router = express.Router();
let root = require('./root.js');
let users = require('./users.js');

const app = express();

/* GET home page. */
app.use('/', root);
app.use('/users', users);

module.exports = app;
