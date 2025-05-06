
import express from 'express'; // Importing express for creating the router
const router = express.Router();
import requireAuth from '../middlewares/requireAuth.js'; // Use ES module syntax
import taskController from '../controllers/taskController.js';

// Apply protection
router.use(requireAuth);

// Protected routes
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router; // Use ES module export

