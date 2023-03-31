import { Router } from 'express';
import user from './user/route';
import product from './products/route';
const router = Router();

router.use('/user', user);

router.use('/product', product)




export default router
