import { Application } from 'express';
import auth from '../auth/route';

export const setupRoutes = (app: Application) => {
  app.use('/api/auth', auth);
};
