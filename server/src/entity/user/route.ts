import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import { registerUserSchema } from './schema';
import { requireUser } from '../../middleware';
import { deleteUser, getAllUsers, getUserById, updateUserById } from './controller';
import ownership from '../../middleware/ownership';

const router = express.Router();
router.use(requireUser);
router.get('/', getAllUsers)
router.get('/:id', ownership, getUserById)
router.patch('/:id', ownership, updateUserById)
router.delete('/:id', ownership, deleteUser)

export default router;
