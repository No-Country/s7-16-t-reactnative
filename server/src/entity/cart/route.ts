import express from 'express';
// import { processRequestBody } from 'zod-express-middleware';
// import { newCartSchema } from './schema';
import { getCartHandler, getCartsHandler, newCartHandler, updateCartHandler, updateCartMiddleware } from './controller';
import { requireUser } from '../../middleware';
import { createCheckout, handlePayment } from '../../providers/mercadopago/controller';

const router = express.Router();

router.use(requireUser);

router.get('/', getCartsHandler);

router.get('/success', handlePayment);

router.get('/checkout', updateCartMiddleware, createCheckout);

router.get('/:userId', getCartHandler);

router.post('/', newCartHandler);

router.put('/:id', updateCartHandler);

router.delete('/:id');

export default router;
