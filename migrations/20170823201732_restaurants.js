
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('restaurants', (table) => {
    table.increments('restaurant_id')
    table.integer('net_rating').defaultTo(0)
    table.string('pricing').defaultTo("$$")
    table.string('restaurant_name')
    table.string('restaurant_url')
    table.string('image_url')
    table.string('address')
    table.text('description')
    table.boolean('is_meat').defaultTo(false)
    table.boolean('is_vegan').defaultTo(false)
    table.boolean('is_breakfast').defaultTo(false)
    table.boolean('is_dinner').defaultTo(false)
    table.boolean('is_dinein').defaultTo(false)
    table.boolean('is_takeaway').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurants')
};
