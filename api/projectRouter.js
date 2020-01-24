const router = require("express").Router()
const Project = require("./models")

router.get("/", async (req,res) => {
    const projects = await Project.find()
    if (projects) res.status(200).json(projects)
    else res.status(500).json({error: "can't find projects"})
})

router.post("/", async (req,res) => {
    const newProject = await Project.add(req.body)
    if (newProject) res.status(201).json(newProject)
    else res.status(500).json({error: "can't add project"})
})

module.exports = router