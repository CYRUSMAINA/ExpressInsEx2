import express from 'express';
import { getAllprojects, createUser } from '../controllers/userController.js';

const router = express.Router();

//post and get api projects
router.post('/',createUser);
router.get ('/',getAllprojects);

export default router;