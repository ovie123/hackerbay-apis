import express from 'express';
import { validateLoginInput } from '../validation/login.js';
import { generateToken } from '../utils/token.js';
import Login from '../controller/authentication.js';

const router = express.Router();

router.post('/', Login);

export default router;
