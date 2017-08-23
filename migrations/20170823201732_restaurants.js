
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('restaurants', (table) => {
    table.increments('id')
    table.integer('rating')
    table.string('pricing')
    table.string('name')
    table.string('url')
    table.string('address')
    table.text('description')
    table.boolean('meat')
    table.boolean('vegan')
    table.boolean('breakfast')
    table.boolean('dinner')
    table.boolean('dinein')
    table.boolean('takeaway')
    table.boolean('pricing-cheap')
    table.boolean('pricing-mid')
    table.boolean('pricing-fine')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurants')
};
