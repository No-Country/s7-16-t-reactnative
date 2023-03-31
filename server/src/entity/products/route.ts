import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import { newProductSchema } from './schema';
import { getProductHandler, getProductsHandler, newProductHandler, updateProductHandler } from './controller';

const router = express.Router();

router.get('/', getProductsHandler);

router.get('/:barCode', getProductHandler);

router.post('/', processRequestBody(newProductSchema.body), newProductHandler);

router.put('/:id', processRequestBody(newProductSchema.body), updateProductHandler);

router.delete('/:id');

export default router;
