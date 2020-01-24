const express = require("express")
const server = express()
const projectRouter = require("./projectRouter")
const resourceRouter = require("./resourceRouter")
server.use(express.json())

server.get("/", (req,res) => {
    res.json("hello")
})

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)

module.exports = server