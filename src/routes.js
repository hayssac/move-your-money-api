import { Router } from 'express';
import userController from './userController';

const routes = Router();

routes.use((req, res, next) => {
  // do logging
  console.log('Request incoming.');
  next(); // make sure we go to the next routes and don't stop here
});

routes.route('/')
      .get((req, res, next) => res.json({ status: 'API Its Working', message: 'Finally waaa!' }))

routes.route('/users')
      .get(userController.index)

export default routes;