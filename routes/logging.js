import express from 'express';
import logging from '../controller/logging.js';

const router = express.Router();

router.get('/', logging);

export default router;
