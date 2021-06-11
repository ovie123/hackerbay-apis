import express from 'express';
import thumbnail from '../controller/thumbnail.js';

const router = express.Router();

router.post('/', thumbnail);
export default router;
