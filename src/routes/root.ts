import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router
  .route('/')
  .get((req: Request, res: Response, next: NextFunction) => {
    const title = 'Welcome to expressjs test environment';
    res.render('index', { title });
  });


export default router;
