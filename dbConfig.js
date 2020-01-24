const config = require("./knexfile").development
const knex = require("knex")
module.exports = knex(config)