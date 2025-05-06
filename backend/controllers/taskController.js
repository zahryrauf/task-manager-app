
// filepath: backend/controllers/taskController.js

const taskController = {
    getAllTasks: (req, res) => {
      res.send('Get all tasks');
    },
    createTask: (req, res) => {
      res.send('Create a task');
    },
    getTaskById: (req, res) => {
      res.send(`Get task with ID: ${req.params.id}`);
    },
    updateTask: (req, res) => {
      res.send(`Update task with ID: ${req.params.id}`);
    },
    deleteTask: (req, res) => {
      res.send(`Delete task with ID: ${req.params.id}`);
    },
  };
  
  export default taskController;