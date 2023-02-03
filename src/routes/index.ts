import express, { Express } from 'express';
var router = express.Router();
let root = require('./root');
let users = require('./users');

const app: Express = express();

/* GET home page. */
app.use('/', root);
app.use('/users', users);

module.exports = app;
