import express, { Request, Response, NextFunction } from 'express';
import UserService from '../services/users.service';

const router = express.Router();
const userService = new UserService();

/* GET users listing. */
router
  .route('/')
  .get((req: Request, res: Response, next: NextFunction) => {

    res.send(userService.getUsers());
    // res.render('users', { users: getUsers() });
  });

router
  .route('/:userId')
  .get((req: Request, res: Response, next: NextFunction) => {
    const { userId: id } = req.params;

    res.send(userService.getUserById(id));
  })
  .delete((req: Request, res: Response, next: NextFunction) => {
    const { userId: id } = req.params;

    const items = userService.deleteById(id);
    res.send({ operation: req.method, id, items });
  });

export default router;
