import { Router } from 'express';
import user from './user/route';
import product from './products/route';
import cart from './cart/route';
import business from './business/route';
import { deserializeUser } from '../middleware';

const router = Router();

router.use(deserializeUser);

router.use('/user', user);

router.use('/product', product);

router.use('/cart', cart);

router.use('/business', business);

export default router;
