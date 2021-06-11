import express from 'express';
import jsonPatch from '../controller/jsonPath.js';

const router = express.Router();

router.patch('/', jsonPatch);

export default router;
