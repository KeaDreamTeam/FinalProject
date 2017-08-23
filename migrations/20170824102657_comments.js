exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('commennt_id')
    table.integer('user_id')
    table.integer('restaurant_id')
    table.text('content')
    table.boolean('is_pos').defaultTo(true)
    table.boolean('is_fair').defaultTo(true)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
};
