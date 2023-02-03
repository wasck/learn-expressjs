import express, { Request, Response, NextFunction } from 'express';
var router = express.Router();
let { getUsers, getUserById, deleteById } = require('../services/users.service.js');

/* GET users listing. */
router
  .route('/')
  .get((req: Request, res: Response, next: NextFunction) => {
    res.send(getUsers());
    // res.render('users', { users: getUsers() });
  });

router
  .route('/:userId')
  .get((req: Request, res: Response, next: NextFunction) => {
    const { userId: id } = req.params;

    res.send(getUserById(id));
  })
  .delete((req: Request, res: Response, next: NextFunction) => {
    const { userId: id } = req.params;

    const items = deleteById(id);
    res.send({ operation: req.method, id, items });
  });

module.exports = router;
