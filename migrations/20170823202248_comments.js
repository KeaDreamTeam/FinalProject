exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('id')
    table.integer('restaurant_id')
    table.text('text')
    table.integer('rating')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
};
