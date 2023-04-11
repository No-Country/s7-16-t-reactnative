import express from 'express';
// import { processRequestBody } from 'zod-express-middleware';
// import { newCartSchema } from './schema';
import { getCartHandler, getCartsHandler, newCartHandler, updateCartHandler } from './controller';

const router = express.Router();

router.get('/', getCartsHandler);

router.get('/:userId', getCartHandler);

router.post('/', newCartHandler);

router.put('/:id', updateCartHandler);

router.delete('/:id');

export default router;
