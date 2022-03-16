const Task = require("../models/tasks");

const getAlltasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;

  if (!name || !completed) {
    return res.status(500).json({
      msg: "Please fill all the fields",
    });
  }

  try {
    const task = await Task.create({
      name,
      completed,
    });

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(500).json({ msg: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;

  try {
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body);

    if (!task) {
      return res.status(500).json({
        msg: "Task not found",
      });
    }

    return res.status(200).json({
      msg: "Task updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    return res.status(200).json({ msg: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

module.exports = {
  getAlltasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
