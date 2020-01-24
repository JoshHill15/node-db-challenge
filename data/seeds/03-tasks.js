
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'do this', notes: "stop this", completed: true, project_id: 1},
        {description: 'do that', notes: "stop that",completed: false, project_id: 2},
        {description: 'do nothing',notes: "lazyyyyyyyy", completed: false, project_id: 3}
      ]);
    });
};
