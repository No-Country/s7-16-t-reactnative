import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import { registerUserHandler } from './controller';
import { registerUserSchema } from './schema';
import { requireUser } from '../../middleware';

const router = express.Router();

//Return logged user
router.get('/',requireUser, (req, res) => {
  return res.send(res.locals.user);
});

//register new user
router.post('/', processRequestBody(registerUserSchema.body), registerUserHandler);

export default router;
