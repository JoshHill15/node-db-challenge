const express = require("express")
const server = express()
const projectRouter = require("./projectRouter")
const resourceRouter = require("./resourceRouter")
const taskRouter = require("./taskRouter")
server.use(express.json())

server.get("/", (req,res) => {
    res.json("hello")
})

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)
module.exports = server