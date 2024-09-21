// src/routes/taskRoutes.ts
import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController';
import {protect} from '../middlewares/authMiddleware';

const router: Router = Router();

router.get('/get', protect, getTasks);
router.post('/create', protect, createTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

export default router;
