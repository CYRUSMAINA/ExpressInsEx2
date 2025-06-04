import express from 'express';
import { getAllprojects, 
    createProject,
    updateProject,
    deleteProject,
    getProjectById} from '../controllers/projectController.js';

const router = express.Router();

// create new project
router.post('/', createProject);

// read all project
router.get('/', getAllprojects);

// read project by id
router.get('/:id', getProjectById);

// update project by id
router.put('/:id', updateProject);

// delete project by ID
router.delete('/:id', deleteProject);

export default router;