const express = require("express");
const router = express.Router();

const {
  getAlltasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getAlltasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
