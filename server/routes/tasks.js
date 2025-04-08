const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

/**
 * We are using router.route and we can use the same endpoing
 * to handle multiple HTTP methods.
 * 
 * We can use other structure like this:
 * router.get('/', getAllTasks);
 * router.post('/', createTask);
 * router.get('/:id', getTaskById);
 * router.patch('/:id', updateTask);
 * router.delete('/:id', deleteTask);
 * 
 * or without the controller we can use the structure like this:
 * router.get('/', async(req, res) => {
 *  const tasks = await Task.find({}); 
 *  res.status(200).json({tasks});
 * })
 */


router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
