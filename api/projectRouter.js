const router = require("express").Router();
const Project = require("./models");

router.get("/", async (req, res) => {
  const projects = await Project.findProjects();
  if (projects) res.status(200).json(projects);
  else res.status(500).json({ error: "can't find projects" });
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findProjectById(req.params.id);
    if (project) res.status(200).json(project);
  } catch {
    res.status(500).json({ error: "can't find project " });
  }
});

router.post("/", async (req, res) => {
  const newProject = await Project.addProjects(req.body);
  if (newProject) res.status(201).json(newProject);
  else res.status(500).json({ error: "can't add project" });
});

router.delete("/:id", async (req,res) => {
    const deletedProject = await Project.deleteProject(req.params.id)
    if (deletedProject) res.status(200).json(deletedProject)
    else res.status(500).json({ error: "can't delete project" });
})

router.put("/:id", async (req,res) => {
    const updatedProject = await Project.updateProjects(req.params.id, req.body)
    if (updatedProject) res.status(200).json(updatedProject)
    else res.status(500).json({ error: "can't update project" });
})

module.exports = router;
