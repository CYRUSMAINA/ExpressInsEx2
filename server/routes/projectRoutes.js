import express from 'express';
import { getAllprojects, createProject } from '../controllers/projectController.js';

const router = express.Router();

//post and get api projects
router.post('/',createProject);
router.get ('/',getAllprojects);

export default router;