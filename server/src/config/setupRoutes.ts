import { Application } from 'express';
import auth from '../auth/route';
import users from '../entity/user/route'

export const setupRoutes = (app: Application) => {
  app.use('/api/auth', auth);

  app.use('/api/users', users);
};
