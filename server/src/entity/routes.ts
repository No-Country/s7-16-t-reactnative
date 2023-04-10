import { Router } from 'express';
import user from './user/route';
import product from './products/route';
import cart from './cart/route';

const router = Router();

router.use('/user', user);

router.use('/product', product);

router.use('/cart', cart);

export default router;
