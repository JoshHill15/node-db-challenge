const router = require("express").Router();
const Task = require("./models");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findTasks();
    if (tasks) res.status(200).json(tasks);
  } catch {
    res.status(500).json({ error: "can't find tasks" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.addTasks(req.body);
    if (newTask) res.status(201).json(newTask);
  } catch {
    res.status(500).json({ error: "can't add task" });
  }
});

module.exports = router;
