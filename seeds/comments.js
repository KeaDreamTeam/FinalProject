
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          user_id: 1,
          restaurant_id: 1,
          content: "good price and great food"
        }
      ]);
    });
};
