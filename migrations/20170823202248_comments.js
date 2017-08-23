exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('id')
    table.integer('restaurant_id')
    table.text('text')
    table.integer('rating_pos')
    table.integer('rating_neg')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
};


//rating_pos & rating_pos have values 0/1 in comments
