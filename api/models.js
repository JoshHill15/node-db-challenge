const db = require("../dbConfig")

module.exports = {
    find,
    add
}

function find(){
    return db("projects")
}

function add(body){
    return db("projects").insert(body)
}