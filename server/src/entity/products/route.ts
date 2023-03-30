import express from 'express';
import { processRequestBody } from 'zod-express-middleware';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).json('GET-Product route');
});

router.post('/', (req, res) => {
  return res.status(StatusCodes.CREATED).json('POST-Product route');
});

export default router;
