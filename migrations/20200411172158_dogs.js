exports.up = function (knex) {
  return knex.schema.createTable('dog_table', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('breed');
    table.string('sex');
    table.string('age');
    table.string('size');
    table.string('special_requirements');
    table.string('activity_requirements')
    table.string('photo')
    table.string('vet_name')
    table.string('vet_contact')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('dog_table')
};
