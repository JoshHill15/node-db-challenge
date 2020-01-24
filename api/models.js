const db = require("../dbConfig")

module.exports = {
    findProjects,
    findProjectById,
    addProjects,
    updateProjects,
    deleteProject,
    findResources,
    addResources,
    findTasks,
    addTasks

}

function findProjects(){
    return db("projects")
}

function findProjectById(id){
    return db.select("projects.name").from("projects")
    .join("task", "project.id", "task.project_id").where({ id }).first()

}

function addProjects(body){
    return db("projects").insert(body)
}

function updateProjects(id,body){
    return db("projects").where({ id }).update(body)
}

function deleteProject(id){
    return db("projects").where({ id }).delete()
}

function findResources(){
    return db("resources")
}

function addResources(body){
    return db("resources").insert(body)
}

function findTasks(){
    return db("task")
    .join("projects", "task.project_id", "projects.id")
    .select("projects.name as project_name",
     "projects.description as project_description",
     "task.description as task_description",
     "task.notes as task_notes",
     "task.completed as task_completed",
     "task.project_id")
}

function addTasks(body){
    return db("task").insert(body)
}