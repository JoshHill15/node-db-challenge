
exports.up = function(knex) {
 return knex.schema.createTable("projects", tbl => {
    tbl.increments()
    tbl.text("name", 128).notNullable().index()
    tbl.text("description", 750)
    tbl.boolean("completed").defaultTo(false)
  })
  .createTable("resources", tbl => {
      tbl.increments()
      tbl.text("name", 128).notNullable().index().unique()
      tbl.text("description",750)
  })
  .createTable("task", tbl => {
      tbl.increments()
      tbl.text("description", 750).notNullable()
      tbl.text("notes", 500)
      tbl.boolean("completed").defaultTo(false)
      tbl.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onUpdate("CASCADE").onDelete("CASCADE")
  })
  .createTable("project_resources", tbl => {
      tbl.increments()
      tbl.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onUpdate("CASCADE").onDelete("CASCADE")
      tbl.integer("resource_id").unsigned().notNullable().references("id").inTable("resources").onUpdate("CASCADE").onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project_resources")
  .dropTableIfExists("task")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
