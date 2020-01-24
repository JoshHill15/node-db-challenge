
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'html project', description: "work on structure", completed: true},
        {name: 'css project', description: "work on styling", completed: false},
        {name: 'js project', description: "work on functionality", completed: false}
      ]);
    });
};
