import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import { registerUserSchema } from './schema';
import { requireUser } from '../../middleware';
import { deleteUser, getAllUsers, getUserById, updateUserById } from './controller';

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUser)

export default router;
