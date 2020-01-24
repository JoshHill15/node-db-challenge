
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'alex the programmer', description: "does work"},
        {name: 'lab room'},
        {name: 'bob the builder', description: "buildin for decades"}
      ]);
    });
};
