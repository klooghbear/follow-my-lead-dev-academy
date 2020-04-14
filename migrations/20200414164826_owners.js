
exports.up = function(knex) {
  return knex.schema.createTable('owner_table', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('photo')
    table.string('city_name')
    table.string('suburb_name')
    table.string('street_name')
    table.string('street_number')
    table.integer('post_code')
    table.string('email')
    table.integer('mobile_number')
    table.integer('user_id')
    table.integer('feedback_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('owner_table')
};
