import express from 'express';
import { getAllprojects, createContact } from '../controllers/contactController';

const router = express.Router();

//post and get api projects
router.post('/',createContact);
router.get ('/',getAllprojects);

export default router;