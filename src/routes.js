import { Router } from 'express';
import userController from './userController';

const router = Router();

router.route('/')
      .get((req, res) => res.json({ status: 'API Its Working', message: 'Finally waaa!' }))

router.route('/users')
      .get(userController.index)

export default router;