import express from 'express';
// import { processRequestBody } from 'zod-express-middleware';
// import { newBusinessSchema } from './schema';
import { getBusinessListHandler, getBusinessHandler, newBusinessHandler, updateBusinessHandler } from './controller';
import { requireUser } from '../../middleware';

const router = express.Router();

router.use(requireUser);

router.get('/', getBusinessListHandler);

router.get('/:businessId', getBusinessHandler);

router.post('/', newBusinessHandler);

router.patch('/:id', updateBusinessHandler);

router.delete('/:id');

export default router;