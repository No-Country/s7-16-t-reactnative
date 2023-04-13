import { Router } from 'express';
import { login, register } from './controller';
import { checkMultipart, handleUploadFirebase } from '../middleware/upload';

const router: Router = Router();

router.post('/register', checkMultipart, handleUploadFirebase, register);

router.post('/login', login);

export default router;