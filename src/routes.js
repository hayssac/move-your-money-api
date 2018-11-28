import { Router } from 'express';
import userController from './userController';

const router = Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Finally waaa!',
  });
});

router.get('/users', userController.index)

export default router;