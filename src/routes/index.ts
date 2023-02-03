import express, { Express } from 'express';
import root from './root';
import users from './users';

const app: Express = express();

/* GET home page. */
app.use('/', root);
app.use('/users', users);

export default app;
